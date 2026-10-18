import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Resolution Framework | BetterMarikina.org',
  description: 'Browse resolutions passed by the Sangguniang Panlungsod of Marikina City.',
};

const resolutionTypes = [
  { icon: 'bi-award', label: 'Commendation' },
  { icon: 'bi-envelope-paper', label: 'Request/Appeal' },
  { icon: 'bi-hand-thumbs-up', label: 'Support/Endorsement' },
  { icon: 'bi-exclamation-circle', label: 'Condolence' },
  { icon: 'bi-clipboard-check', label: 'Authorization' },
];


export default function ResolutionFrameworkPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/legislative">Legislative</Link>
          <span>/</span>
          <span aria-current="page">Resolution Framework</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-file-earmark-text"></i> Legislative</span>
            <h1>Resolution Framework</h1>
            <p className="page-header-desc">Resolutions passed by the Sangguniang Panlungsod ng Marikina</p>
          </div>
        </div>
      </section>

      {/* About Resolutions */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon"><i className="bi bi-info-circle"></i></div>
            <div className="info-card-content">
              <h3>What is a Resolution?</h3>
              <p>A resolution is a formal expression of the opinion or will of the Sangguniang Panlungsod. Unlike ordinances, resolutions do not have the force and effect of law but serve as official statements of the legislative body.</p>
              <p>Resolutions are commonly used for: commendations, requests to higher government agencies, expressions of support or opposition, and administrative matters of the Sangguniang Panlungsod.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resolution Types */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Types of Resolutions</h2>
          </div>
          <div className="grid grid-3" style={{ gap: 'var(--spacing-sm)' }}>
            {resolutionTypes.map((type) => (
              <div key={type.label} className="category-tag">
                <i className={`bi ${type.icon}`}></i> {type.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resolutions List */}
      <section className="section">
        <div className="container">
          <ComingSoon message="A searchable list of Marikina City resolutions is being prepared." />
          <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
            <a href="https://fdpp.marikina.gov.ph/city-ordinance" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <i className="bi bi-box-arrow-up-right"></i> View Official Resolutions on marikina.gov.ph
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
