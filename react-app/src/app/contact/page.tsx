'use client';

import Link from 'next/link';
import SourceNote from '@/components/SourceNote';
import directoryData from '@/data/marikina/directory.json';
import type { Dataset, DirectoryData } from '@/types';

const directory = directoryData as unknown as Dataset<DirectoryData>;
const medicalGroups = directory.data.groups.filter((group) => ['health-office', 'health-centers'].includes(group.id));

export default function ContactPage(): JSX.Element {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Contact</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-envelope-fill"></i> Contact</span>
            <h1>Contact Us</h1>
            <p className="page-header-desc">We&apos;re here to help. Reach out to us through any of these channels.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ gap: 'var(--spacing-md)' }}>
            <a href="mailto:web@marikina.gov.ph" className="contact-card">
              <div className="contact-card-icon"><i className="bi bi-envelope-fill"></i></div>
              <div className="contact-card-content">
                <h3>Email</h3>
                <p className="contact-card-value">web@marikina.gov.ph</p>
                <span className="contact-card-note">Marikina City Government</span>
              </div>
            </a>
            <a href="tel:0286460462" className="contact-card">
              <div className="contact-card-icon"><i className="bi bi-telephone-fill"></i></div>
              <div className="contact-card-content">
                <h3>City Hall</h3>
                <p className="contact-card-value">(02) 8646-0462</p>
                <span className="contact-card-note">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </a>
            <div className="contact-card">
              <div className="contact-card-icon"><i className="bi bi-geo-alt-fill"></i></div>
              <div className="contact-card-content">
                <h3>Address</h3>
                <p className="contact-card-value">Marikina City Hall</p>
                <span className="contact-card-note">Shoe Avenue, Sta. Elena, Marikina City 1800</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="office-hours-section">
        <div className="container">
          <div className="office-hours-inner">
            <div className="office-hours-header">
              <i className="bi bi-clock-fill"></i>
              <h2>Office Hours</h2>
            </div>
            <div className="office-hours-schedule">
              <div className="office-hours-item office-hours-item--open">
                <span className="office-hours-day">Monday - Friday</span>
                <span className="office-hours-time">8:00 AM - 5:00 PM</span>
                <span className="office-hours-status"><i className="bi bi-check-circle-fill"></i> Open</span>
              </div>
              <div className="office-hours-item office-hours-item--break">
                <span className="office-hours-day">Lunch Break</span>
                <span className="office-hours-time">12:00 PM - 1:00 PM</span>
                <span className="office-hours-status"><i className="bi bi-pause-circle-fill"></i> Break</span>
              </div>
              <div className="office-hours-item office-hours-item--closed">
                <span className="office-hours-day">Saturday &amp; Sunday</span>
                <span className="office-hours-time">Closed</span>
                <span className="office-hours-status"><i className="bi bi-x-circle-fill"></i> Closed</span>
              </div>
              <div className="office-hours-item office-hours-item--closed">
                <span className="office-hours-day">National &amp; Local Holidays</span>
                <span className="office-hours-time">Closed</span>
                <span className="office-hours-status"><i className="bi bi-x-circle-fill"></i> Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Hotlines */}
      <section className="section">
        <div className="container">
          <div className="hotlines-header">
            <div className="hotlines-title">
              <span className="hotlines-badge"><i className="bi bi-exclamation-triangle-fill"></i> Emergency</span>
              <h2>Emergency Hotlines</h2>
            </div>
            <p>For emergencies and inquiries, contact these numbers anytime.</p>
          </div>
          <div className="hotlines-grid">
            <a href="tel:161" className="hotline-card">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <span className="hotline-card-label">Marikina Rescue 161</span>
              <span className="hotline-card-number">161</span>
            </a>
            <a href="tel:0286462436" className="hotline-card">
              <i className="bi bi-telephone-fill"></i>
              <span className="hotline-card-label">Rescue 161 (Landline)</span>
              <span className="hotline-card-number">(02) 8646-2436</span>
            </a>
            <a href="tel:09175842168" className="hotline-card">
              <i className="bi bi-phone-fill"></i>
              <span className="hotline-card-label">Rescue 161 (Globe)</span>
              <span className="hotline-card-number">0917 584 2168</span>
            </a>
            <a href="tel:09285593341" className="hotline-card">
              <i className="bi bi-phone-fill"></i>
              <span className="hotline-card-label">Rescue 161 (Smart)</span>
              <span className="hotline-card-number">0928 559 3341</span>
            </a>
            <a href="tel:0286461634" className="hotline-card">
              <i className="bi bi-building-fill"></i>
              <span className="hotline-card-label">Mayor&apos;s Office</span>
              <span className="hotline-card-number">(02) 8646-1634</span>
            </a>
            <a href="tel:0286466451" className="hotline-card">
              <i className="bi bi-megaphone-fill"></i>
              <span className="hotline-card-label">Public Information Office</span>
              <span className="hotline-card-number">(02) 8646-6451</span>
            </a>
            <a href="tel:0286460373" className="hotline-card">
              <i className="bi bi-file-earmark-text-fill"></i>
              <span className="hotline-card-label">Local Civil Registry</span>
              <span className="hotline-card-number">(02) 8646-0373</span>
            </a>
            <a href="tel:0286829571" className="hotline-card">
              <i className="bi bi-cash-coin"></i>
              <span className="hotline-card-label">Treasury Office</span>
              <span className="hotline-card-number">(02) 8682-9571</span>
            </a>
            <a href="tel:0282441800" className="hotline-card">
              <i className="bi bi-shop"></i>
              <span className="hotline-card-label">Business Permits (BPLO)</span>
              <span className="hotline-card-number">(02) 8244-1800</span>
            </a>
            <a href="tel:0286591956" className="hotline-card">
              <i className="bi bi-person-hearts"></i>
              <span className="hotline-card-label">Senior Citizen Affairs (OSCA)</span>
              <span className="hotline-card-number">(02) 8659-1956</span>
            </a>
          </div>
          <p className="contact-card-note">Source: <a href="https://www.marikina.gov.ph/contact-us" target="_blank" rel="noopener noreferrer">marikina.gov.ph/contact-us</a></p>
        </div>
      </section>

      {/* Medical Emergency Hotlines */}
      <section className="section bg-alt">
        <div className="container">
          <div className="hotlines-header">
            <div className="hotlines-title">
              <span className="hotlines-badge hotlines-badge--medical"><i className="bi bi-hospital-fill"></i> Medical</span>
              <h2>Medical Emergency Hotlines</h2>
            </div>
            <p>For medical emergencies and hospital inquiries.</p>
          </div>
          {medicalGroups.map((group) => (
            <div key={group.id} style={{ marginBottom: 'var(--spacing-md)' }}>
              <h3>{group.title}</h3>
              <ul style={{ columns: 2, paddingLeft: '1.25rem' }}>
                {group.entries.map((entry) => (
                  <li key={entry.name}>{entry.name}: {entry.phones.join(' / ')}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className="contact-card-note">Private hospitals and DOH-registered facilities are not listed yet. For emergencies call Rescue 161.</p>
          <SourceNote meta={directory.meta} />
        </div>
      </section>
    </>
  );
}
