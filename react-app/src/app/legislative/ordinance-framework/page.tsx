import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Ordinance Framework | BetterMarikina.org',
  description: 'Browse city ordinances enacted by the Sangguniang Panlungsod of Marikina City.',
};

const ordinanceCategories = [
  { icon: 'bi-cash-coin', label: 'Revenue & Taxation' },
  { icon: 'bi-shop', label: 'Business & Trade' },
  { icon: 'bi-shield-check', label: 'Public Safety' },
  { icon: 'bi-tree', label: 'Environment' },
  { icon: 'bi-signpost-2', label: 'Traffic & Transportation' },
  { icon: 'bi-building', label: 'Zoning & Land Use' },
];


export default function OrdinanceFrameworkPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/legislative">Legislative</Link>
          <span>/</span>
          <span aria-current="page">Ordinance Framework</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-journal-text"></i> Legislative</span>
            <h1>Ordinance Framework</h1>
            <p className="page-header-desc">City ordinances enacted by the Sangguniang Panlungsod ng Marikina</p>
          </div>
        </div>
      </section>

      {/* About Ordinances */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon"><i className="bi bi-info-circle"></i></div>
            <div className="info-card-content">
              <h3>What is an Ordinance?</h3>
              <p>A city ordinance is a local law enacted by the Sangguniang Panlungsod (City Council) that governs the city and its residents. Ordinances have the force and effect of law within the territorial jurisdiction of the city.</p>
              <p>Ordinances may cover various subjects including but not limited to: taxation, business regulations, public safety, environmental protection, traffic management, and zoning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ordinance Categories */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Ordinance Categories</h2>
          </div>
          <div className="grid grid-3" style={{ gap: 'var(--spacing-sm)' }}>
            {ordinanceCategories.map((cat) => (
              <div key={cat.label} className="category-tag">
                <i className={`bi ${cat.icon}`}></i> {cat.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordinances List */}
      <section className="section">
        <div className="container">
          <ComingSoon message="A searchable list of Marikina City ordinances is being prepared." />
          <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
            <a href="https://fdpp.marikina.gov.ph/city-ordinance" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <i className="bi bi-box-arrow-up-right"></i> View Official Ordinances on marikina.gov.ph
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
