import Link from 'next/link';
import SourceNote from '@/components/SourceNote';
import facilitiesData from '@/data/marikina/facilities.json';
import type { Dataset, FacilitiesData } from '@/types';

export const metadata = {
  title: 'Schools in Marikina',
  description: 'The 33 public schools of the DepEd Marikina City division and the city-run college.',
};

const facilities = facilitiesData as unknown as Dataset<FacilitiesData>;

export default function SchoolsPage(): JSX.Element {
  const { publicSchools, higherEducation } = facilities.data;
  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/government">Government</Link>
          <span>/</span>
          <span aria-current="page">Schools</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-mortarboard-fill"></i> Schools</span>
            <h1>Schools in Marikina</h1>
            <p className="page-header-desc">{publicSchools.length} public schools (DepEd) and the city-run college</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <caption style={{ textAlign: 'left', paddingBottom: 8 }}>Public schools, DepEd Marikina City division</caption>
              <thead>
                <tr>
                  <th scope="col" align="left">School ID</th>
                  <th scope="col" align="left">School</th>
                  <th scope="col" align="left">Level</th>
                </tr>
              </thead>
              <tbody>
                {publicSchools.map((school) => (
                  <tr key={school.schoolId}>
                    <td>{school.schoolId}</td>
                    <th scope="row" align="left">{school.name}</th>
                    <td>{school.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 style={{ marginTop: 'var(--spacing-lg)' }}>Higher education</h2>
          <ul>
            {higherEducation.map((school) => (
              <li key={school.name}>{school.name}, run by the {school.operator}</li>
            ))}
          </ul>
          <p>Private schools, other colleges and the CHED list are not yet published here.</p>
          <SourceNote meta={facilities.meta} />
        </div>
      </section>
    </>
  );
}
