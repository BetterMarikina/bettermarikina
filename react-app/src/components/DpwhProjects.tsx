import SourceNote from '@/components/SourceNote';
import dpwhData from '@/data/marikina/dpwh-2027.json';
import type { Dataset, DpwhBudgetData } from '@/types';

const dpwh = dpwhData as unknown as Dataset<DpwhBudgetData>;
const peso = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 });

function Amount({ php, pdfUrl }: { php: number | null; pdfUrl: string | null }): JSX.Element {
  if (php === null) return <>—</>;
  if (!pdfUrl) return <>{peso.format(php)}</>;
  return <a href={pdfUrl} target="_blank" rel="noopener noreferrer">{peso.format(php)}</a>;
}

/** FY2027 DPWH lines naming Marikina City: NEP vs House Bill 10858, with the API's disclaimers kept verbatim. */
export default function DpwhProjects(): JSX.Element {
  const { office, projects, disclaimers, notice } = dpwh.data;
  return (
    <>
      <p>
        {projects.length} lines in the FY2027 DPWH budget name Marikina City. Each amount links to its page in the
        budget documents. These are amounts as published in the 2027 NEP and House Bill 10858, not spending. A
        project found in only one version is a candidate to check, not a finding.
      </p>
      <p>
        Marikina is served by the {office.name}, which it shares with Mandaluyong, Pasig, San Juan and
        Taguig-Pateros. That office&apos;s total is not Marikina&apos;s own, so it is not shown here.{' '}
        <a href={office.officeLedgerUrl} target="_blank" rel="noopener noreferrer">See the office&apos;s full ledger</a>.
      </p>
      <div className="table-responsive">
        <table className="data-table">
          <caption className="sr-only">FY2027 DPWH project lines naming Marikina City</caption>
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">2027 NEP</th>
              <th scope="col">House bill</th>
              <th scope="col">Comparison</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td><a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a></td>
                <td><Amount php={p.nepPhp} pdfUrl={p.nepPdfUrl} /></td>
                <td><Amount php={p.housePhp} pdfUrl={p.housePdfUrl} /></td>
                <td>{p.statusLabel}{p.held ? ' (unconfirmed match)' : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {notice && <p className="sre-source">{notice}</p>}
      {disclaimers.map((d) => (
        <p key={d.id} className="sre-source">
          <strong>{d.title}</strong> {d.body} <a href={d.url} target="_blank" rel="noopener noreferrer">More</a>
        </p>
      ))}
      <SourceNote meta={dpwh.meta} />
    </>
  );
}
