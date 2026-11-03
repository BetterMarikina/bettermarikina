import { notFound } from 'next/navigation';
import Link from 'next/link';
import SourceNote from '@/components/SourceNote';
import {
  getBarangay,
  getBarangaysDataset,
  getDrrmMeta,
  getFacilitiesMeta,
  healthFacilitiesIn,
  riverStationsIn,
} from '@/lib/barangays';

interface Props {
  params: { id: string };
}

const numberFormat = new Intl.NumberFormat('en-PH');

export function generateStaticParams(): Props['params'][] {
  return getBarangaysDataset().data.map((b) => ({ id: b.id }));
}

export function generateMetadata({ params }: Props): { title: string; description?: string } {
  const b = getBarangay(params.id);
  if (!b) return { title: 'Barangay' };
  return {
    title: `Barangay ${b.name}, Marikina`,
    description: `Population, officials, office phone, health facilities and flood information for Barangay ${b.name}, Marikina City.`,
  };
}

function ComingSoon({ what, waitingOn }: { what: string; waitingOn: string }): JSX.Element {
  return (
    <p>
      <span className="badge badge-warning">Coming soon</span> {what}. Waiting on {waitingOn}.
    </p>
  );
}

export default function BarangayPage({ params }: Props): JSX.Element {
  const b = getBarangay(params.id);
  if (!b) notFound();

  const dataset = getBarangaysDataset();
  const stations = riverStationsIn(b);
  const health = healthFacilitiesIn(b);
  const kagawad = b.officials?.kagawad;

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/barangays">Barangays</Link>
          <span>/</span>
          <span aria-current="page">{b.name}</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-geo-alt-fill"></i> District {b.district}</span>
            <h1>Barangay {b.name}</h1>
            <p className="page-header-desc">
              {b.alsoKnownAs ? `Also known as ${b.alsoKnownAs}. ` : ''}PSGC {b.psgc}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <dl className="service-facts">
            <div><dt>Population (2024)</dt><dd>{numberFormat.format(b.population['2024'])}</dd></div>
            <div><dt>Population (2020)</dt><dd>{numberFormat.format(b.population['2020'])}</dd></div>
            <div><dt>Land area</dt><dd>{b.landAreaHa.toFixed(2)} ha</dd></div>
            <div><dt>Barangay hall phone</dt><dd>{b.officePhone ?? 'Not listed'}</dd></div>
          </dl>

          <h2 className="section-title-sm">Barangay council</h2>
          <p><strong>Punong Barangay:</strong> {b.officials?.punongBarangay ?? 'Not published'}</p>
          {kagawad ? (
            <>
              <p><strong>Kagawad:</strong> {kagawad.join(', ')}</p>
              <p><strong>SK Chairperson:</strong> {b.officials?.skChairperson ?? 'Not named in the source'}</p>
            </>
          ) : (
            <ComingSoon what="Kagawads and SK Chairperson" waitingOn="FOI-1 (DILG list of barangay officials)" />
          )}
          {b.facebook ? (
            <p>
              <i className="bi bi-facebook" aria-hidden="true"></i>{' '}
              <a href={b.facebook} target="_blank" rel="noopener noreferrer">Official barangay Facebook page</a>
            </p>
          ) : (
            <ComingSoon what="Official barangay Facebook page" waitingOn="a confirmed official page" />
          )}

          <h2 className="section-title-sm">Health facilities</h2>
          <ul>
            {health.map((f) => (
              <li key={f.name}>{f.name}, {f.address}</li>
            ))}
          </ul>
          <p><Link href="/health-facilities">All hospitals, health centers and dialysis clinics in Marikina</Link></p>
          <SourceNote meta={getFacilitiesMeta()} />

          <h2 className="section-title-sm">Flood information</h2>
          <p>In an emergency, dial <strong>161</strong> (Rescue 161).</p>
          {stations.map((s) => (
            <p key={s.stationCode}>
              PAGASA river station in this barangay: <strong>{s.station}</strong>. Alert {s.alert} m, alarm {s.alarm} m,
              critical {s.critical} m (PAGASA levels, not the city&apos;s alarms).
            </p>
          ))}
          <p><Link href="/disaster-risk">Live Marikina River levels and flood information</Link></p>
          <ComingSoon what="Evacuation centers for this barangay" waitingOn="FOI-7 (City DRRM Office)" />
          <ComingSoon what="Flood hazard level" waitingOn="FOI-7 (City DRRM Office)" />
          {stations.length > 0 && <SourceNote meta={getDrrmMeta()} />}

          <SourceNote meta={dataset.meta} />
        </div>
      </section>
    </>
  );
}
