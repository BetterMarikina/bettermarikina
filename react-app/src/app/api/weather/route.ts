import { NextResponse } from 'next/server';
import type { MarikinaWeather } from '@/types';

// Marikina City Hall. Open-Meteo refreshes "current" every 15 minutes.
const LATITUDE = 14.6507;
const LONGITUDE = 121.1029;
const REVALIDATE_SECONDS = 600;
// Not prerendered at build time; upstream calls are still cached via fetch `revalidate`.
export const dynamic = 'force-dynamic';
const UPSTREAM_TIMEOUT_MS = 5000;
const HOURS_AHEAD = 6;

const UPSTREAM_URL = `https://api.open-meteo.com/v1/forecast?${new URLSearchParams({
  latitude: String(LATITUDE),
  longitude: String(LONGITUDE),
  current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day',
  hourly: 'temperature_2m,weather_code',
  forecast_hours: String(HOURS_AHEAD),
  timezone: 'Asia/Manila',
})}`;

interface OpenMeteoResponse {
  current?: {
    time?: unknown;
    temperature_2m?: unknown;
    apparent_temperature?: unknown;
    relative_humidity_2m?: unknown;
    weather_code?: unknown;
    wind_speed_10m?: unknown;
    is_day?: unknown;
  };
  hourly?: { time?: unknown; temperature_2m?: unknown; weather_code?: unknown };
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function isNumberArray(value: unknown): value is number[] {
  return Array.isArray(value) && value.every(isFiniteNumber);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((v) => typeof v === 'string');
}

function parseWeather(body: OpenMeteoResponse): MarikinaWeather {
  const c = body.current;
  const h = body.hourly;
  if (
    !c ||
    typeof c.time !== 'string' ||
    !isFiniteNumber(c.temperature_2m) ||
    !isFiniteNumber(c.apparent_temperature) ||
    !isFiniteNumber(c.relative_humidity_2m) ||
    !isFiniteNumber(c.weather_code) ||
    !isFiniteNumber(c.wind_speed_10m) ||
    !isFiniteNumber(c.is_day)
  ) {
    throw new Error('open-meteo returned an unexpected "current" block');
  }

  const hourly: MarikinaWeather['hourly'] = [];
  if (h && isStringArray(h.time) && isNumberArray(h.temperature_2m) && isNumberArray(h.weather_code)) {
    const { time, temperature_2m: temps, weather_code: codes } = h;
    for (let i = 1; i < time.length; i += 1) {
      hourly.push({ time: time[i], temp: temps[i], code: codes[i] });
    }
  }

  return {
    temp: c.temperature_2m,
    feelsLike: c.apparent_temperature,
    humidity: c.relative_humidity_2m,
    windKph: c.wind_speed_10m,
    code: c.weather_code,
    isDay: c.is_day === 1,
    observedAt: c.time,
    hourly,
  };
}

export async function GET(): Promise<NextResponse> {
  try {
    const res = await fetch(UPSTREAM_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`open-meteo responded ${res.status}`);
    const weather = parseWeather((await res.json()) as OpenMeteoResponse);
    return NextResponse.json(weather, {
      headers: { 'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=3600` },
    });
  } catch (error) {
    console.error('[api/weather] failed:', error);
    return NextResponse.json({ error: 'Weather unavailable' }, { status: 502 });
  }
}
