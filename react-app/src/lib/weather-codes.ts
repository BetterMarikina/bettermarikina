interface WeatherCondition {
  label: string;
  /** Bootstrap Icons class */
  icon: string;
}

// WMO weather interpretation codes, as returned by Open-Meteo.
export function describeWeatherCode(code: number, isDay: boolean): WeatherCondition {
  if (code === 0) return isDay ? { label: 'Clear sky', icon: 'bi-sun-fill' } : { label: 'Clear sky', icon: 'bi-moon-stars-fill' };
  if (code === 1 || code === 2) {
    const label = code === 1 ? 'Mostly clear' : 'Partly cloudy';
    return { label, icon: isDay ? 'bi-cloud-sun-fill' : 'bi-cloud-moon-fill' };
  }
  if (code === 3) return { label: 'Overcast', icon: 'bi-clouds-fill' };
  if (code === 45 || code === 48) return { label: 'Fog', icon: 'bi-cloud-fog2-fill' };
  if (code >= 51 && code <= 57) return { label: 'Drizzle', icon: 'bi-cloud-drizzle-fill' };
  if (code >= 61 && code <= 67) return { label: 'Rain', icon: 'bi-cloud-rain-heavy-fill' };
  if (code >= 80 && code <= 82) return { label: 'Rain showers', icon: 'bi-cloud-rain-heavy-fill' };
  if (code >= 95) return { label: 'Thunderstorm', icon: 'bi-cloud-lightning-rain-fill' };
  return { label: 'Cloudy', icon: 'bi-cloud-fill' };
}
