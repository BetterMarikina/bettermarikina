import Link from 'next/link';
import SourceNote from '@/components/SourceNote';
import ComingSoon from '@/components/ComingSoon';
import drrmData from '@/data/marikina/drrm.json';
import type { Dataset, DrrmData } from '@/types';

export const metadata = {
  title: 'Disaster risk and flood information',
  description: 'Live flood bulletins, emergency services and hazard maps for Marikina City.',
};

const drrm = drrmData as unknown as Dataset<DrrmData>;

export default function DisasterRiskPage(): JSX.Element {
  const { liveReadings, hazardMaps, emergencyServices } = drrm.data;
  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Disaster risk</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-water"></i> Disaster risk</span>
            <h1>Disaster risk and flood information</h1>
            <p className="page-header-desc">In an emergency, dial 161 (Rescue 161).</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Live flood information</h2>
          <ul>
            {liveReadings.map((item) => (
              <li key={item.url}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a></li>
            ))}
          </ul>

          <h2>Marikina River alarm levels</h2>
          <ComingSoon
            title="Official thresholds not yet confirmed"
            message="We could not find the city's alarm levels on a government page, and news reports disagree, so we do not publish them. Follow the city's announcements."
          />

          <h2>Evacuation centers</h2>
          <ComingSoon
            title="List not yet available"
            message="The city has not published a list we could read. Ask your barangay hall or call Rescue 161."
          />

          <h2>Emergency services (Rescue 161)</h2>
          {emergencyServices.map((service) => (
            <article key={service.service} style={{ marginBottom: 'var(--spacing-md)' }}>
              <h3>{service.service}</h3>
              <p>
                {service.office}. Open to: {service.whoMayAvail}. Fee: {service.fee}. Time: {service.processingTime}.
              </p>
              <p>{service.howTo}</p>
            </article>
          ))}

          <h2>Hazard maps</h2>
          <ul>
            {hazardMaps.map((item) => (
              <li key={item.url}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a></li>
            ))}
          </ul>
          <SourceNote meta={drrm.meta} />
        </div>
      </section>
    </>
  );
}
