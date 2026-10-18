import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';

export default function StatisticsPage(): JSX.Element {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/statistics.css" />

      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Statistics</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="stats-hero">
        <div className="container">
          <div className="stats-hero-content">
            <span className="stats-hero-badge"><i className="bi bi-bar-chart-fill"></i> City Data</span>
            <h1>City Statistics</h1>
            <p>Data and statistics about Marikina City, Metro Manila</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <ComingSoon message="Population, economic and competitiveness data for Marikina City will be published here once sourced from PSA and DTI." />
          <p className="data-source"><i className="bi bi-info-circle"></i> Sources: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer">Philippine Statistics Authority</a>, <a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer">DTI Cities and Municipalities Competitiveness Index</a></p>
        </div>
      </section>
    </>
  );
}
