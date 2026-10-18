import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Government Officials & Structure',
  description: 'Meet the leadership and offices serving Marikina City, Metro Manila',
};

export default function GovernmentPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Government</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-building-fill"></i> Government</span>
            <h1>Government Structure &amp; Officials</h1>
            <p className="page-header-desc">Meet the leadership and offices serving Marikina City</p>
          </div>
        </div>
      </section>

      {/* Executive Branch */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-star-fill"></i> Executive Branch
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>City Leadership</h3>
            <p style={{ color: 'var(--color-text-light)' }}>The executive officials leading Marikina&apos;s governance</p>
          </div>

          <ComingSoon message="Official names and contact details for Marikina City officials will be published once verified from official sources." />
        </div>
      </section>

      {/* City Council */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-success) 0%, #05c793 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-people-fill"></i> Legislative Branch
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Sangguniang Panlungsod Members</h3>
            <p style={{ color: 'var(--color-text-light)' }}>City Councilors serving the people of Marikina</p>
          </div>

          <ComingSoon message="Sangguniang Panlungsod members and their committees will be published once verified from official sources." />
        </div>
      </section>

      {/* Department Heads */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-info) 0%, #0099cc 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-building-fill"></i> City Offices
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Department Heads &amp; Key Offices</h3>
            <p style={{ color: 'var(--color-text-light)' }}>City offices providing services to citizens</p>
          </div>

          <div className="grid grid-3" style={{ gap: 'var(--spacing-md)' }}>
            <Link href="/service-details/municipal-civil-registrar" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-file-earmark-text-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">City Civil Registrar</h4>
                <p className="dept-card-desc">Birth, death, marriage certificates, CENOMAR</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/municipal-treasurer" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-cash-coin"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">City Treasurer&apos;s Office</h4>
                <p className="dept-card-desc">Tax payments, real property tax, revenue collection</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/municipal-engineering" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-building-fill-gear"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">City Engineering Office</h4>
                <p className="dept-card-desc">Building permits, construction permits, infrastructure</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/mswdo-services" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-people-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">CSWDO</h4>
                <p className="dept-card-desc">Social services, PWD &amp; senior citizen IDs, financial assistance</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/municipal-agriculture" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-tree-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">City Agriculture Office</h4>
                <p className="dept-card-desc">Agricultural loans, crop insurance, fertilizer assistance</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/municipal-planning" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-clipboard-data-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">City Planning &amp; Development</h4>
                <p className="dept-card-desc">Development planning, project monitoring, zoning</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/municipal-assessor" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-house-door-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">City Assessor&apos;s Office</h4>
                <p className="dept-card-desc">Property assessment, tax declarations, land records</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/municipal-accounting" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-calculator-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">City Accounting Office</h4>
                <p className="dept-card-desc">Financial records, disbursements, accounting services</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/municipal-budget" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-piggy-bank-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">City Budget Office</h4>
                <p className="dept-card-desc">Budget preparation, appropriations, fiscal management</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/municipal-general-services" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-gear-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">City General Services Office</h4>
                <p className="dept-card-desc">Property management, procurement, administration</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/services/health" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-heart-pulse-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">City Health Office</h4>
                <p className="dept-card-desc">Vaccination, health certificates, medical assistance</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/business-permits-licensing" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-shop"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">Business Permits &amp; Licensing</h4>
                <p className="dept-card-desc">Business permits, Mayor&apos;s clearance, licensing</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/service-details/human-resource-management" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-person-badge-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">Human Resource Management</h4>
                <p className="dept-card-desc">Personnel services, recruitment, employee records</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/services/public-safety" className="dept-card dept-card-link-wrap">
              <div className="dept-card-icon"><i className="bi bi-exclamation-triangle-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">CDRRMO</h4>
                <p className="dept-card-desc">Disaster preparedness, emergency response, risk reduction</p>
                <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
              </div>
            </Link>
            <div className="dept-card">
              <div className="dept-card-icon"><i className="bi bi-briefcase-fill"></i></div>
              <div className="dept-card-content">
                <h4 className="dept-card-title">PESO</h4>
                <p className="dept-card-desc">Job placement, employment assistance, career guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barangays */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-geo-alt-fill"></i> Barangay Units
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Barangays of Marikina</h3>
            <p style={{ color: 'var(--color-text-light)' }}>16 Barangays serving our community</p>
          </div>

          <div className="grid grid-4" style={{ gap: 'var(--spacing-sm)' }}>
            {[
              'Barangka', 'Calumpang', 'Concepcion Uno', 'Concepcion Dos',
              'Fortune', 'Industrial Valley', 'Jesus de la Peña', 'Malanday',
              'Marikina Heights', 'Nangka', 'Parang', 'San Roque',
              'Santa Elena', 'Santo Niño', 'Tañong', 'Tumana',
            ].map((name) => (
              <div key={name} className="barangay-card">
                <div className="barangay-card-header">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span className="barangay-name">{name}</span>
                </div>
                <div className="barangay-card-body">
                  <span className="barangay-captain">Contact details coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
