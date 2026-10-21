'use client';

import { useState, useEffect } from 'react';
import { useLiveData } from '@/hooks/useLiveData';
import type { MarikinaWeather, UsdPhpRate } from '@/types';

const RATE_REFRESH_MS = 30 * 60 * 1000;
const WEATHER_REFRESH_MS = 10 * 60 * 1000;

export default function InfoBar() {
  const [dateTime, setDateTime] = useState({ date: '--- --, ----', time: '--:-- --' });
  const rate = useLiveData<UsdPhpRate>('/api/rates', RATE_REFRESH_MS);
  const weather = useLiveData<MarikinaWeather>('/api/weather', WEATHER_REFRESH_MS);

  const rateText =
    rate.status === 'ready' ? `1 USD = ₱ ${rate.data.rate.toFixed(2)}` : rate.status === 'error' ? 'USD rate unavailable' : '1 USD = ₱ …';
  const rateTitle = rate.status === 'ready' ? `${rate.data.source}, updated ${new Date(rate.data.updatedAt).toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}` : undefined;
  const tempText = weather.status === 'ready' ? `${Math.round(weather.data.temp)}°C` : '—';

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateOptions: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Manila', month: 'short', day: '2-digit', year: 'numeric' };
      const timeOptions: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', hour12: true };
      setDateTime({
        date: now.toLocaleDateString('en-US', dateOptions),
        time: now.toLocaleTimeString('en-US', timeOptions),
      });
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="info-bar" role="complementary" aria-label="Real-time information">
      <div className="container">
        <div className="info-bar-inner" aria-live="polite" aria-atomic="false">
          <div className="info-bar-item info-bar-rates" aria-label="Exchange rates">
            <i className="bi bi-currency-exchange" aria-hidden="true"></i>
            <span className="rate-rotator">
              <span className="rate-display" title={rateTitle}>{rateText}</span>
            </span>
          </div>
          <div className="info-bar-item info-bar-weather" aria-label="Current weather in Marikina">
            <i className="bi bi-thermometer-half" aria-hidden="true"></i>
            <span className="weather-location">Marikina</span>
            <span className="weather-temp">{tempText}</span>
          </div>
          <div className="info-bar-item info-bar-datetime" aria-label="Philippine Date and Time">
            <i className="bi bi-calendar3" aria-hidden="true"></i>
            <span className="date-value">{dateTime.date}</span>
            <span className="datetime-separator" aria-hidden="true">•</span>
            <i className="bi bi-clock" aria-hidden="true"></i>
            <span className="time-value">{dateTime.time}</span>
            <span className="time-label">PHT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
