'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SearchAutocomplete from '@/components/SearchAutocomplete';
import NewsChannels from '@/components/NewsChannels';
import SourceNote from '@/components/SourceNote';
import WeatherWidget from '@/components/WeatherWidget';
import cityProfileData from '@/data/marikina/city-profile.json';
import officialsData from '@/data/marikina/officials.json';
import type { CityProfile, Dataset, ElectedOfficial } from '@/types';

const cityProfile = cityProfileData as unknown as Dataset<CityProfile>;
const officials = officialsData as unknown as Dataset<ElectedOfficial[]>;
const leaders = officials.data.filter((o) => ['mayor', 'vice-mayor', 'rep-d1', 'rep-d2'].includes(o.id));

export default function HomePage() {
  const { t } = useLanguage();

  useEffect(() => {
    // Load Leaflet map after component mounts - handled by iframe fallback
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="home-hero-v2">
        <div className="container">
          <div className="home-hero-v2-inner">
            <div className="home-hero-v2-text">
              <h1>{t('hero-welcome')}</h1>
              <p>{t('hero-subtitle')}</p>
              <div className="home-hero-v2-actions">
                <Link href="/services" className="btn btn-primary">Browse Services <i className="bi bi-arrow-right"></i></Link>
                <Link href="/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
            <div className="home-hero-v2-search">
              <div className="home-search-box">
                <h2><i className="bi bi-search"></i> {t('hero-find-service')}</h2>
                <form className="search-form" role="search" onSubmit={(e) => e.preventDefault()}>
                  <div className="search-input-wrapper">
                    <SearchAutocomplete placeholder="e.g., birth certificate, business permit" />
                    <button type="submit" className="search-submit-btn" aria-label="Search"><i className="bi bi-arrow-right"></i></button>
                  </div>
                </form>
                <div className="home-search-tags">
                  <span>Popular:</span>
                  <Link href="/service-details/birth-certificate">Birth Certificate</Link>
                  <Link href="/service-details/business-permits-licensing">Business Permit</Link>
                  <Link href="/service-details/municipal-treasurer">Real Property Tax</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-popular')}</h2>
            <p>Quick access to frequently requested city services</p>
          </div>
          <div className="home-services-grid">
            <Link href="/services/certificates" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-file-earmark-text-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('service-certificates')}</h3>
                <p>{t('service-certificates-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/business" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-shop"></i></div>
              <div className="home-service-content">
                <h3>{t('service-business')}</h3>
                <p>{t('service-business-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/tax-payments" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-cash-coin"></i></div>
              <div className="home-service-content">
                <h3>{t('service-tax')}</h3>
                <p>{t('service-tax-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/social-services" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-people-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('service-social')}</h3>
                <p>{t('service-social-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/health" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-heart-pulse-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('service-health')}</h3>
                <p>{t('service-health-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services" className="home-service-card home-service-card--all">
              <div className="home-service-icon"><i className="bi bi-grid-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('btn-view-all-services')}</h3>
                <p>Browse complete directory</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="home-stats-v2">
        <div className="container">
          <div className="home-stats-v2-header">
            <h2>Marikina at a Glance</h2>
            <Link href="/statistics" className="home-section-link">View Statistics <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="home-stats-v2-grid">
            <Link href="/statistics" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-people-fill"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">—</span>
                <span className="home-stat-card-label">Population</span>
                <span className="home-stat-card-source">Coming soon</span>
              </div>
            </Link>
            <Link href="/government" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-geo-alt-fill"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">16</span>
                <span className="home-stat-card-label">Barangays</span>
                <span className="home-stat-card-source">Administrative Units</span>
              </div>
            </Link>
            <Link href="/budget" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-award-fill"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">—</span>
                <span className="home-stat-card-label">Income Class</span>
                <span className="home-stat-card-source">Coming soon</span>
              </div>
            </Link>
            <Link href="/statistics" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-rulers"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">—</span>
                <span className="home-stat-card-label">Land Area</span>
                <span className="home-stat-card-source">Coming soon</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Weather & Map */}
      <section className="section weather-map-section">
        <div className="container">
          <div className="home-stats-v2-header">
            <h2>Weather and Map of Marikina</h2>
          </div>
          <div className="weather-map-grid">
            <div className="weather-column">
              <div id="weather-container" aria-live="polite">
                <WeatherWidget />
              </div>
            </div>
            <div className="map-column">
              <div className="map-card">
                <div id="map-container" role="application" aria-label="Interactive map of Marikina City, Metro Manila" className="map-container-iframe">
                  <iframe width="100%" height="300" frameBorder="0" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=121.0800%2C14.6200%2C121.1300%2C14.6800&layer=mapnik&marker=14.6507%2C121.1029" className="map-iframe" title="Map of Marikina" loading="lazy"></iframe>
                </div>
                <p className="map-attribution">
                  <i className="bi bi-geo-alt" aria-hidden="true"></i> Marikina City Hall, Shoe Avenue, Sta. Elena, Marikina City 1800
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief History of Marikina */}
      <section className="section history-section">
        <div className="container">
          <div className="home-stats-v2-header">
            <h2><i className="bi bi-book" aria-hidden="true"></i> Brief History of Marikina</h2>
          </div>
          <div className="history-content">
            <div className="history-timeline">
              {cityProfile.data.history.map((item) => (
                <div key={`${item.year}-${item.event}`} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <p>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="history-summary">
              <div className="history-card">
                <div className="history-card-content">
                  <h4>Marikina at a glance</h4>
                  <p>{cityProfile.data.classification} in the {cityProfile.data.region}. {cityProfile.data.barangayCount} barangays, {cityProfile.data.legislativeDistricts} legislative districts, {cityProfile.data.landAreaHa.toLocaleString('en-PH')} hectares. Population {cityProfile.data.population[cityProfile.data.population.length - 1].count.toLocaleString('en-PH')} (PSA 2024 Census).</p>
                </div>
              </div>
            </div>
          </div>
          <SourceNote meta={cityProfile.meta} />
        </div>
        <style jsx>{`
          .history-section { background: linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%); }
          .history-section .home-stats-v2-header h2 { display: flex; align-items: center; gap: 10px; }
          .history-section .home-stats-v2-header h2 i { color: var(--color-primary); }
          .history-content { display: grid; grid-template-columns: 1fr 340px; gap: 32px; align-items: start; }
          .history-timeline { position: relative; padding-left: 28px; }
          .history-timeline::before { content: ''; position: absolute; left: 6px; top: 8px; bottom: 8px; width: 2px; background: linear-gradient(180deg, var(--color-primary) 0%, rgba(0,50,160,0.2) 100%); border-radius: 2px; }
          .timeline-item { position: relative; padding-bottom: 20px; opacity: 0; animation: fadeInUp 0.5s ease forwards; }
          .timeline-item:nth-child(1) { animation-delay: 0.1s; }
          .timeline-item:nth-child(2) { animation-delay: 0.2s; }
          .timeline-item:nth-child(3) { animation-delay: 0.3s; }
          .timeline-item:nth-child(4) { animation-delay: 0.4s; }
          .timeline-item:nth-child(5) { animation-delay: 0.5s; }
          .timeline-item:nth-child(6) { animation-delay: 0.6s; }
          .timeline-item:nth-child(7) { animation-delay: 0.7s; }
          .timeline-item:last-child { padding-bottom: 0; }
          .timeline-marker { position: absolute; left: -28px; top: 4px; width: 14px; height: 14px; background: var(--color-bg); border: 3px solid var(--color-primary); border-radius: 50%; transition: all 0.3s ease; z-index: 1; }
          .timeline-item:hover .timeline-marker { background: var(--color-primary); transform: scale(1.2); box-shadow: 0 0 0 4px rgba(0,50,160,0.15); }
          .timeline-content { background: var(--color-bg); border: 1px solid rgba(0,0,0,0.06); border-radius: 10px; padding: 16px 18px; transition: all 0.3s ease; }
          .timeline-item:hover .timeline-content { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(0,50,160,0.1); transform: translateX(4px); }
          .timeline-year { display: inline-block; background: var(--color-primary); color: white; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; margin-bottom: 8px; }
          .timeline-content p { font-size: 0.875rem; color: var(--color-text); margin: 0; line-height: 1.6; }
          .timeline-content p strong { color: var(--color-primary); }
          .timeline-content p em { font-style: italic; color: var(--color-text-light); }
          .history-summary { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 100px; }
          .history-card { background: var(--color-bg); border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; padding: 20px; display: flex; gap: 14px; align-items: flex-start; transition: all 0.3s ease; }
          .history-card:hover { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(0,50,160,0.1); transform: translateY(-2px); }
          .history-card-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .history-card-icon i { color: white; font-size: 1.25rem; }
          .history-card-content h4 { font-size: 0.9375rem; font-weight: 600; color: var(--color-text); margin: 0 0 6px 0; }
          .history-card-content p { font-size: 0.8125rem; color: var(--color-text-light); margin: 0; line-height: 1.5; }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
          @media (max-width: 900px) { .history-content { grid-template-columns: 1fr; } .history-summary { position: static; flex-direction: row; flex-wrap: wrap; } .history-card { flex: 1 1 280px; } }
          @media (max-width: 575px) { .history-summary { flex-direction: column; } .history-card { flex: 1 1 100%; } }
        `}</style>
      </section>

      {/* Latest Updates */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-updates')}</h2>
            <Link href="/news" className="home-section-link"><span>{t('btn-view-all')}</span> <i className="bi bi-arrow-right"></i></Link>
          </div>
          <NewsChannels />
        </div>
      </section>

      {/* City Leadership */}
      <section className="section home-leadership-section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-leadership')}</h2>
            <Link href="/government" className="home-section-link"><span>{t('btn-view-officials')}</span> <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="grid grid-4" style={{ gap: 'var(--spacing-sm)' }}>
            {leaders.map((o) => (
              <div key={o.id} className="dept-card">
                <div className="dept-card-content">
                  <h4 className="dept-card-title">{o.name}</h4>
                  <p className="dept-card-desc">{o.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-contact')}</h2>
            <Link href="/contact" className="home-section-link">{t('btn-view-all')} <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="home-contact-v2-grid">
            <a href="tel:0286460462" className="home-contact-v2-card">
              <div className="home-contact-v2-icon"><i className="bi bi-telephone-fill"></i></div>
              <div className="home-contact-v2-content">
                <h3>{t('contact-phone')}</h3>
                <p className="home-contact-v2-value">(02) 8646-0462</p>
                <span className="home-contact-v2-note">{t('contact-hours')}</span>
              </div>
            </a>
            <a href="mailto:web@marikina.gov.ph" className="home-contact-v2-card">
              <div className="home-contact-v2-icon"><i className="bi bi-envelope-fill"></i></div>
              <div className="home-contact-v2-content">
                <h3>{t('contact-email')}</h3>
                <p className="home-contact-v2-value">web@marikina.gov.ph</p>
                <span className="home-contact-v2-note">{t('contact-response')}</span>
              </div>
            </a>
            <div className="home-contact-v2-card">
              <div className="home-contact-v2-icon"><i className="bi bi-geo-alt-fill"></i></div>
              <div className="home-contact-v2-content">
                <h3>{t('contact-address')}</h3>
                <p className="home-contact-v2-value">{t('contact-municipal-hall')}</p>
                <span className="home-contact-v2-note">Shoe Avenue, Sta. Elena, Marikina City 1800</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
