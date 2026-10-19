import Link from 'next/link';
import SourceNote from '@/components/SourceNote';
import barangaysData from '@/data/marikina/barangays.json';
import type { Barangay, Dataset } from '@/types';

export const metadata = {
  title: 'Barangays of Marikina',
  description: 'The 16 barangays of Marikina City by district: population, land area and Punong Barangay.',
};

const barangays = barangaysData as unknown as Dataset<Barangay[]>;
const numberFormat = new Intl.NumberFormat('en-PH');

export default function BarangaysPage(): JSX.Element {
  const rows = barangays.data;
  const total2020 = rows.reduce((sum, b) => sum + b.population['2020'], 0);
  const totalArea = rows.reduce((sum, b) => sum + b.landAreaHa, 0);

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/government">Government</Link>
          <span>/</span>
          <span aria-current="page">Barangays</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-geo-alt-fill"></i> Barangays</span>
            <h1>Barangays of Marikina</h1>
            <p className="page-header-desc">16 barangays in two legislative districts</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <caption style={{ textAlign: 'left', paddingBottom: 8 }}>
                Population is from the 2020 Census (PSA, as printed by the city) and the 2024 POPCEN (PSA PSGC, 2024 values as of 1 July 2024).
              </caption>
              <thead>
                <tr>
                  <th scope="col" align="left">Barangay</th>
                  <th scope="col">District</th>
                  <th scope="col" align="right">Population 2020</th>
                  <th scope="col" align="right">Population 2024</th>
                  <th scope="col" align="right">Land area (ha)</th>
                  <th scope="col" align="left">Punong Barangay</th>
                  <th scope="col" align="left">Office phone</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((b) => (
                  <tr key={b.id}>
                    <th scope="row" align="left">
                      {b.name}
                      {b.creation && (
                        <small style={{ display: 'block', fontWeight: 400 }}>
                          Created by {b.creation.instrument} ({b.creation.date})
                        </small>
                      )}
                    </th>
                    <td align="center">{b.district}</td>
                    <td align="right">{numberFormat.format(b.population['2020'])}</td>
                    <td align="right">{numberFormat.format(b.population['2024'])}</td>
                    <td align="right">{b.landAreaHa.toFixed(2)}</td>
                    <td>{b.officials?.punongBarangay ?? 'Not published'}</td>
                    <td>{b.officePhone ?? 'Not listed'}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" align="left">City total</th>
                  <td></td>
                  <td align="right">{numberFormat.format(total2020)}</td>
                  <td align="right">{numberFormat.format(rows.reduce((sum, b) => sum + b.population['2024'], 0))}</td>
                  <td align="right">{totalArea.toFixed(2)}</td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <SourceNote meta={barangays.meta} />
        </div>
      </section>
    </>
  );
}
