import Link from 'next/link';
import SourceNote from '@/components/SourceNote';
import StatisticsCharts from '@/components/StatisticsCharts';
import statisticsData from '@/data/marikina/statistics.json';
import type { Dataset, StatisticsData } from '@/types';

const statistics = statisticsData as unknown as Dataset<StatisticsData>;

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
          <StatisticsCharts data={statistics.data} />
          <SourceNote meta={statistics.meta} />
        </div>
      </section>
    </>
  );
}
