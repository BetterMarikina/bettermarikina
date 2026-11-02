'use client';

import { useLiveData } from '@/hooks/useLiveData';
import type { RiverReading, RiverResponse, RiverStatus } from '@/types';

const REFRESH_MS = 10 * 60 * 1000;
const PAGASA_URL = 'https://pasig-marikina-tullahanffws.pagasa.dost.gov.ph/water/table.do';

const STATUS_LABEL: Record<RiverStatus, string> = {
  normal: 'Normal',
  alert: 'Alert',
  alarm: 'Alarm',
  critical: 'Critical',
};

function formatSlot(slot: string): string {
  const hour = Number(slot.slice(8, 10));
  const minute = slot.slice(10, 12);
  const date = `${slot.slice(0, 4)}-${slot.slice(4, 6)}-${slot.slice(6, 8)}`;
  return `${date} ${hour % 12 || 12}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
}

function trend(r: RiverReading): string {
  if (r.wl1h === null) return '—';
  const diff = r.level - r.wl1h;
  if (Math.abs(diff) < 0.005) return 'Steady';
  return `${diff > 0 ? 'Rising' : 'Falling'} ${Math.abs(diff).toFixed(2)} m`;
}

export default function RiverWidget(): JSX.Element {
  const state = useLiveData<RiverResponse>('/api/river', REFRESH_MS);
  const source = (
    <a href={PAGASA_URL} target="_blank" rel="noopener noreferrer">Source: PAGASA flood warning system</a>
  );

  if (state.status !== 'ready') {
    return (
      <p role="status">
        {state.status === 'loading' ? 'Loading live river levels… ' : 'Live river levels are unavailable right now. '}
        {source}
      </p>
    );
  }

  const { readingAt, stations } = state.data;
  const hasFlagged = stations.some((s) => s.flagged);
  return (
    <div role="region" aria-label="Live Marikina River levels">
      <div className="table-responsive">
        <table className="data-table">
          <caption className="sr-only">Live water levels, PAGASA reading at {formatSlot(readingAt)}</caption>
          <thead>
            <tr>
              <th scope="col">Station</th>
              <th scope="col">Level (m)</th>
              <th scope="col">Status</th>
              <th scope="col">Past hour</th>
            </tr>
          </thead>
          <tbody>
            {stations.map((s) => (
              <tr key={s.stationCode}>
                <td>{s.station}</td>
                <td>{s.level.toFixed(2)}{s.flagged ? ' (flagged by PAGASA)' : ''}</td>
                <td>{STATUS_LABEL[s.status]}</td>
                <td>{trend(s)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Reading at {formatSlot(readingAt)}, updated every 10 minutes. {source}
        {hasFlagged && ' Readings marked "flagged by PAGASA" carry PAGASA\'s (*) mark and may be stale or not yet validated.'}
      </p>
    </div>
  );
}
