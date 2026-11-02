import type { RiverStatus } from '@/types';

/** Status of a water level against PAGASA's alert, alarm and critical levels (meters above sea level). */
export function riverStatus(level: number, t: { alert: number; alarm: number; critical: number }): RiverStatus {
  if (level >= t.critical) return 'critical';
  if (level >= t.alarm) return 'alarm';
  if (level >= t.alert) return 'alert';
  return 'normal';
}

/** PAGASA appends "(*)" to values it flags. Returns null when the value is missing or not a number. */
export function parsePagasaLevel(raw: unknown): { value: number; flagged: boolean } | null {
  if (typeof raw !== 'string' && typeof raw !== 'number') return null;
  const text = String(raw).trim();
  const flagged = text.includes('(*)');
  const value = Number(text.replace('(*)', '').trim());
  if (text === '' || !Number.isFinite(value)) return null;
  return { value, flagged };
}

/** PAGASA's `ymdhm` slot (YYYYMMDDHHmm, Asia/Manila), rounded down to 10 minutes, `stepsBack` slots earlier. */
export function pagasaSlot(now: Date, stepsBack = 0): string {
  const MANILA_OFFSET_MS = 8 * 60 * 60 * 1000;
  const TEN_MIN_MS = 10 * 60 * 1000;
  const manila = new Date(Math.floor((now.getTime() + MANILA_OFFSET_MS) / TEN_MIN_MS) * TEN_MIN_MS - stepsBack * TEN_MIN_MS);
  const pad = (n: number): string => String(n).padStart(2, '0');
  return `${manila.getUTCFullYear()}${pad(manila.getUTCMonth() + 1)}${pad(manila.getUTCDate())}${pad(manila.getUTCHours())}${pad(manila.getUTCMinutes())}`;
}
