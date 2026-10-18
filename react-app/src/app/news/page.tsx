'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import ComingSoon from '@/components/ComingSoon';

export default function NewsPage(): JSX.Element {
  const { t } = useLanguage();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <span aria-current="page">News & Announcements</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-newspaper"></i> News</span>
            <h1>News & Announcements</h1>
            <p className="page-header-desc">Stay updated with the latest news and announcements from the City of Marikina</p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="section">
        <div className="container">
          <ComingSoon title="News coming soon" message="Marikina City announcements will appear here, linked to their official sources." />
        </div>
      </section>
    </>
  );
}
