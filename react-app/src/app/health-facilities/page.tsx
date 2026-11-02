import Link from 'next/link';
import SourceNote from '@/components/SourceNote';
import facilitiesData from '@/data/marikina/facilities.json';
import type { Dataset, FacilitiesData, HealthFacility } from '@/types';

export const metadata = {
  title: 'Hospitals and Health Facilities in Marikina',
  description: 'PhilHealth-accredited hospitals and dialysis clinics, and the barangay health centers of Marikina City.',
};

const facilities = facilitiesData as unknown as Dataset<FacilitiesData>;

const GROUPS: { type: HealthFacility['type']; title: string; caption: string; showLevel: boolean }[] = [
  { type: 'hospital', title: 'Hospitals', caption: 'PhilHealth-accredited hospitals', showLevel: true },
  { type: 'health-center', title: 'Health centers', caption: 'DOH-licensed primary care facilities (barangay health centers)', showLevel: false },
  { type: 'dialysis', title: 'Dialysis clinics', caption: 'PhilHealth-accredited dialysis clinics', showLevel: false },
];

export default function HealthFacilitiesPage(): JSX.Element {
  const all = facilities.data.healthFacilities;
  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services/health">Health</Link>
          <span>/</span>
          <span aria-current="page">Health Facilities</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-hospital-fill"></i> Health</span>
            <h1>Hospitals and Health Facilities</h1>
            <p className="page-header-desc">Hospitals, barangay health centers and dialysis clinics in Marikina. For emergencies call Rescue 161.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {GROUPS.map((group) => {
            const rows = all.filter((f) => f.type === group.type);
            return (
              <div key={group.type} id={group.type}>
                <h2 className="section-title-sm">{group.title} ({rows.length})</h2>
                <div className="table-responsive">
                  <table className="data-table">
                    <caption className="sr-only">{group.caption}</caption>
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        {group.showLevel && <th scope="col">Level</th>}
                        <th scope="col">Ownership</th>
                        <th scope="col">Barangay</th>
                        <th scope="col">Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((f) => (
                        <tr key={`${f.name}-${f.address}`}>
                          <td>{f.name}</td>
                          {group.showLevel && <td>{f.level ?? '—'}</td>}
                          <td>{f.ownership}</td>
                          <td>{f.barangay ?? '—'}</td>
                          <td>{f.address}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
          <p>Clinic services and fees at the City Health Office are listed under <Link href="/services/health">Health &amp; Wellness</Link>.</p>
          <SourceNote meta={facilities.meta} />
        </div>
      </section>
    </>
  );
}
