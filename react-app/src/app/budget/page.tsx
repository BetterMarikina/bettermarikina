import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';

export default function BudgetPage(): JSX.Element {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/transparency-v2.css" />
      
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Budget &amp; Transparency</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="trans-hero-v2">
        <div className="container">
          <div className="trans-hero-content-v2">
            <span className="trans-hero-badge-v2"><i className="bi bi-shield-check"></i> Financial Transparency</span>
            <h1>Budget &amp; Financial Transparency</h1>
            <p>Tracking city finances and projects for accountability</p>
          </div>
        </div>
      </section>

      {/* SRE Section */}
      <section className="sre-section-v2">
        <div className="container">
          <div className="sre-header-v2">
            <div className="sre-title-group">
              <span className="sre-label"><i className="bi bi-graph-up-arrow"></i> Financial Report</span>
              <h2>Statement of Receipts &amp; Expenditures</h2>
            </div>
          </div>
          <ComingSoon title="Figures not yet transcribed" message="The city publishes its Annual Budget, Statement of Receipts and Expenditures, SEF, LDRRMF and indebtedness reports as PDF scans (2020 to 2026). They have no text layer, so the figures cannot yet be extracted reliably. Read the originals on the city's Full Disclosure Portal." />
          <p className="sre-source"><i className="bi bi-box-arrow-up-right"></i> <a href="https://fdpp.marikina.gov.ph/full-disclosure" target="_blank" rel="noopener noreferrer">Marikina Full Disclosure Portal</a></p>
          <p className="sre-source"><i className="bi bi-info-circle"></i> Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer">Bureau of Local Government Finance (BLGF)</a></p>
        </div>
      </section>

      {/* DPWH Projects Section */}
      <section className="infra-section-v5 infra-section-alt">
        <div className="container">
          <div className="infra-header-v5">
            <span className="infra-label-v5"><i className="bi bi-building"></i> National Government Projects</span>
            <h2>DPWH Infrastructure Projects in Marikina</h2>
          </div>
          <ComingSoon title="Project list not yet available" message="DPWH's own procurement notices list Marikina City projects under the Metro Manila 1st District Engineering Office. DPWH's project listings could not be read by our tools on 2026-10-19, so no project list is shown yet. Search DPWH's civil works notices for the full list." />
          <p className="sre-source dpwh-source-margin"><i className="bi bi-info-circle"></i> Source: <a href="https://transparency.dpwh.gov.ph/" target="_blank" rel="noopener noreferrer">DPWH Transparency Portal</a></p>
        </div>
      </section>
    </>
  );
}
