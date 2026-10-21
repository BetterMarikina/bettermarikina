'use client';

import { useLiveData } from '@/hooks/useLiveData';
import { describeWeatherCode } from '@/lib/weather-codes';
import type { MarikinaWeather } from '@/types';

const REFRESH_MS = 10 * 60 * 1000;

function hourOf(isoLocal: string): number {
  return Number(isoLocal.slice(11, 13));
}

// Rough daylight window for icon choice; Open-Meteo's hourly block doesn't carry is_day here.
function isDaytime(isoLocal: string): boolean {
  const hour = hourOf(isoLocal);
  return hour >= 6 && hour < 18;
}

function formatHour(isoLocal: string): string {
  const hour = hourOf(isoLocal);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  return `${hour % 12 || 12} ${suffix}`;
}

export default function WeatherWidget() {
  const state = useLiveData<MarikinaWeather>('/api/weather', REFRESH_MS);
  const weather = state.status === 'ready' ? state.data : null;
  const condition = weather ? describeWeatherCode(weather.code, weather.isDay) : null;

  const conditionText =
    condition?.label ?? (state.status === 'error' ? 'Weather is temporarily unavailable' : 'Loading weather…');

  return (
    <div className="weather-widget" role="region" aria-label="Current weather in Marikina">
      <div className="weather-current">
        <div className="weather-current-icon">
          <i className={`bi ${condition?.icon ?? 'bi-cloud-sun-fill'}`} aria-hidden="true"></i>
        </div>
        <div className="weather-current-info">
          <div className="weather-current-temp">{weather ? `${Math.round(weather.temp)}°C` : '—'}</div>
          <div className="weather-current-condition">
            {conditionText}
            {weather ? ` · feels like ${Math.round(weather.feelsLike)}°C` : ''}
          </div>
          <div className="weather-current-location">
            <i className="bi bi-geo-alt" aria-hidden="true"></i> Marikina City, Metro Manila
          </div>
        </div>
      </div>
      <div className="weather-stats">
        <div className="weather-stat" title="Relative humidity">
          <i className="bi bi-droplet" aria-hidden="true"></i>
          <span>{weather ? `${Math.round(weather.humidity)}% humidity` : '—'}</span>
        </div>
        <div className="weather-stat" title="Wind speed">
          <i className="bi bi-wind" aria-hidden="true"></i>
          <span>{weather ? `${Math.round(weather.windKph)} km/h` : '—'}</span>
        </div>
      </div>
      {weather && weather.hourly.length > 0 && (
        <div className="weather-hourly">
          {weather.hourly.map((hour) => (
            <div className="weather-hour" key={hour.time}>
              <span className="weather-hour-time">{formatHour(hour.time)}</span>
              <i className={`bi ${describeWeatherCode(hour.code, isDaytime(hour.time)).icon}`} aria-hidden="true"></i>
              <span className="weather-hour-temp">{Math.round(hour.temp)}°</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
