import { request } from 'node:https';
import { rootCertificates } from 'node:tls';
import { NextResponse } from 'next/server';
import { GLOBALSIGN_GCC_R46_OV_TLS_CA_2025 } from '@/lib/pagasa-ca';
import { unstable_cache } from 'next/cache';
import drrmData from '@/data/marikina/drrm.json';
import { pagasaSlot, parsePagasaLevel, riverStatus } from '@/lib/river';
import type { Dataset, DrrmData, RiverReading, RiverResponse } from '@/types';

// PAGASA Pasig-Marikina-Tullahan FFWS. The endpoint is undocumented; PAGASA's okay to use it is still pending
// (see sprint-05 report). We call it at most once per 10 minutes server-side and link back to PAGASA.
const UPSTREAM_URL = 'https://pasig-marikina-tullahanffws.pagasa.dost.gov.ph/water/table_list.do';
const REVALIDATE_SECONDS = 600;
const UPSTREAM_TIMEOUT_MS = 5000;
const EARLIER_SLOTS_TO_TRY = 3;
export const dynamic = 'force-dynamic';

const stations = (drrmData as unknown as Dataset<DrrmData>).data.riverAlarmLevels;

interface PagasaRow {
  obscd?: unknown;
  wl?: unknown;
  wl1h?: unknown;
}

function isRowArray(value: unknown): value is PagasaRow[] {
  return Array.isArray(value) && value.every((row) => typeof row === 'object' && row !== null);
}

// node:https instead of fetch so we can add the intermediate PAGASA's server leaves out of its chain.
const TRUSTED_CA = [...rootCertificates, GLOBALSIGN_GCC_R46_OV_TLS_CA_2025];

function postForm(url: string, form: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = request(
      url,
      {
        method: 'POST',
        ca: TRUSTED_CA,
        timeout: UPSTREAM_TIMEOUT_MS,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(form) },
      },
      (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`pagasa responded ${res.statusCode ?? 'without a status'}`));
          return;
        }
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk: string) => { body += chunk; });
        res.on('end', () => resolve(body));
      },
    );
    req.on('timeout', () => req.destroy(new Error('pagasa timed out')));
    req.on('error', reject);
    req.end(form);
  });
}

async function fetchSlot(slot: string): Promise<PagasaRow[]> {
  const text = await postForm(UPSTREAM_URL, new URLSearchParams({ ymdhm: slot }).toString());
  if (text.trim() === '') return [];
  const body: unknown = JSON.parse(text);
  return isRowArray(body) ? body : [];
}

function toReadings(rows: PagasaRow[]): RiverReading[] {
  const readings: RiverReading[] = [];
  for (const s of stations) {
    const row = rows.find((r) => r.obscd === s.stationCode);
    const level = row ? parsePagasaLevel(row.wl) : null;
    if (!level) continue;
    readings.push({
      station: s.station,
      stationCode: s.stationCode,
      level: level.value,
      flagged: level.flagged,
      wl1h: parsePagasaLevel(row?.wl1h)?.value ?? null,
      status: riverStatus(level.value, s),
      alert: s.alert,
      alarm: s.alarm,
      critical: s.critical,
    });
  }
  return readings;
}

async function loadRiver(): Promise<RiverResponse> {
  const now = new Date();
  for (let step = 0; step <= EARLIER_SLOTS_TO_TRY; step += 1) {
    const slot = pagasaSlot(now, step);
    const readings = toReadings(await fetchSlot(slot));
    if (readings.length > 0) return { readingAt: slot, stations: readings };
  }
  throw new Error('pagasa returned no Marikina readings in the last 4 slots');
}

// Next's fetch cache skips POST, so cache the whole upstream call instead.
const getRiver = unstable_cache(loadRiver, ['pagasa-river'], { revalidate: REVALIDATE_SECONDS });

export async function GET(): Promise<NextResponse> {
  try {
    const river = await getRiver();
    return NextResponse.json(river, {
      headers: { 'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=600` },
    });
  } catch (error) {
    console.error('[api/river] failed:', error);
    return NextResponse.json({ error: 'River levels unavailable' }, { status: 502 });
  }
}
