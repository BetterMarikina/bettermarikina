import { NextResponse } from 'next/server';
import type { UsdPhpRate } from '@/types';

// Upstream publishes daily; an hour of caching keeps us well inside free-tier limits.
const REVALIDATE_SECONDS = 3600;
// Not prerendered at build time; upstream calls are still cached via fetch `revalidate`.
export const dynamic = 'force-dynamic';
const UPSTREAM_TIMEOUT_MS = 5000;

async function fetchJson(url: string): Promise<unknown> {
  const res = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`${url} responded ${res.status}`);
  return res.json();
}

function isPositiveNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0;
}

async function fromExchangeRateApi(): Promise<UsdPhpRate> {
  const body = (await fetchJson('https://open.er-api.com/v6/latest/USD')) as {
    rates?: { PHP?: unknown };
    time_last_update_unix?: unknown;
  };
  const rate = body.rates?.PHP;
  if (!isPositiveNumber(rate)) throw new Error('open.er-api.com returned no PHP rate');
  const updated = body.time_last_update_unix;
  return {
    rate,
    updatedAt: isPositiveNumber(updated) ? new Date(updated * 1000).toISOString() : new Date().toISOString(),
    source: 'ExchangeRate-API',
  };
}

async function fromFrankfurter(): Promise<UsdPhpRate> {
  const body = (await fetchJson('https://api.frankfurter.dev/v1/latest?base=USD&symbols=PHP')) as {
    rates?: { PHP?: unknown };
    date?: unknown;
  };
  const rate = body.rates?.PHP;
  if (!isPositiveNumber(rate)) throw new Error('frankfurter returned no PHP rate');
  const date = typeof body.date === 'string' ? new Date(`${body.date}T00:00:00Z`) : new Date();
  return { rate, updatedAt: date.toISOString(), source: 'European Central Bank' };
}

export async function GET(): Promise<NextResponse> {
  for (const provider of [fromExchangeRateApi, fromFrankfurter]) {
    try {
      return NextResponse.json(await provider(), {
        headers: { 'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=86400` },
      });
    } catch (error) {
      console.error('[api/rates] provider failed:', error);
    }
  }
  return NextResponse.json({ error: 'Exchange rate unavailable' }, { status: 502 });
}
