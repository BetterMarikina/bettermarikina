import Link from 'next/link';
import SourceNote from '@/components/SourceNote';
import { FOI_STATUS, getAuditReports, getFoiRequests, getTransparencyMeta } from '@/lib/transparency';

export const metadata = {
  title: 'Transparency',
  description: 'Where Marikina City public money goes: budget, debt, special funds, DPWH projects, COA audit reports and FOI requests.',
};

const FOI_LOG_URL = 'https://github.com/BetterMarikina/bettermarikina/blob/main/docs/data/foi-drafts.md';

const SECTIONS = [
  { href: '/budget', icon: 'bi-cash-stack', title: 'Budget and spending', desc: 'Annual budgets 2020-2026 and receipts and expenditures 2019-2026' },
  { href: '/budget#dpwh', icon: 'bi-building', title: 'DPWH projects', desc: 'The 52 DPWH lines in the 2027 national budget that name Marikina City' },
  { href: '/legislative', icon: 'bi-journal-text', title: 'Ordinances and resolutions', desc: 'City ordinances as listed on the Full Disclosure Portal' },
  { href: '/government#officials', icon: 'bi-person-badge', title: 'Elected officials', desc: 'Mayor, vice mayor, representatives and councilors, 2025-2028' },
  { href: '/barangays', icon: 'bi-geo-alt', title: 'Barangay officials', desc: 'Punong Barangay of all 16 barangays, and councils where published' },
  { href: '/open-data', icon: 'bi-braces', title: 'Open data API', desc: 'Every dataset on this site as free JSON, with its sources' },
] as const;

export default function TransparencyPage(): JSX.Element {
  const audits = getAuditReports();
  const foi = getFoiRequests();

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Transparency</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-shield-check"></i> Transparency</span>
            <h1>Transparency</h1>
            <p className="page-header-desc">Where Marikina&apos;s public money goes, who checks it, and what we have asked for.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {SECTIONS.map((s) => (
              <Link key={s.href} href={s.href} className="service-item-card service-item-link">
                <h2 className="service-item-title"><i className={`bi ${s.icon}`}></i> {s.title}</h2>
                <p className="service-item-desc">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact" id="audit">
        <div className="container">
          <h2 className="section-title-sm">Audit reports (Commission on Audit)</h2>
          <p>
            COA audits the city every year. The annual audit report lists COA&apos;s findings on how funds were used and what
            the city should fix. Each link opens COA&apos;s page, where the report downloads as a ZIP of PDFs.
          </p>
          <div className="table-responsive">
            <table className="data-table">
              <caption className="sr-only">COA audit reports on Marikina City</caption>
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Report</th>
                  <th scope="col">Posted by COA</th>
                  <th scope="col">Size</th>
                </tr>
              </thead>
              <tbody>
                {audits.map((r) => (
                  <tr key={r.url}>
                    <td>{r.year}</td>
                    <td><a href={r.url} target="_blank" rel="noopener noreferrer">{r.title}</a></td>
                    <td>{r.postedOn ?? 'Not shown'}</td>
                    <td>{r.fileSize ?? 'Not shown'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The 2020 and 2025 reports are not listed yet: COA&apos;s pages for them could not be reached when we checked.</p>
        </div>
      </section>

      <section className="section section-compact" id="foi">
        <div className="container">
          <h2 className="section-title-sm">Our Freedom of Information requests</h2>
          <p>
            When data is not published, we ask for it under Executive Order No. 2 (2016). Agencies must reply within 15
            working days. The full text of each request is in our{' '}
            <a href={FOI_LOG_URL} target="_blank" rel="noopener noreferrer">FOI log</a>.
          </p>
          <div className="table-responsive">
            <table className="data-table">
              <caption className="sr-only">BetterMarikina Freedom of Information requests and their status</caption>
              <thead>
                <tr>
                  <th scope="col">Request</th>
                  <th scope="col">What we asked for</th>
                  <th scope="col">Agency</th>
                  <th scope="col">Status</th>
                  <th scope="col">Sent</th>
                  <th scope="col">Reply due</th>
                </tr>
              </thead>
              <tbody>
                {foi.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.subject}</td>
                    <td>{r.agency}</td>
                    <td><span className={FOI_STATUS[r.status].badge}>{FOI_STATUS[r.status].label}</span></td>
                    <td>{r.sentOn ?? '—'}</td>
                    <td>{r.replyDueOn ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-compact" id="procurement">
        <div className="container">
          <h2 className="section-title-sm">Procurement and contracts</h2>
          <p>
            <span className="badge badge-warning">Coming soon</span> Bid notices, awarded contracts and the annual
            procurement plan. The city posts these on its{' '}
            <a href="https://fdpp.marikina.gov.ph/full-disclosure" target="_blank" rel="noopener noreferrer">Full Disclosure Portal</a>{' '}
            as scanned PDFs, so they need to be transcribed and checked first (FOI-3 asks for searchable copies).
          </p>
          <SourceNote meta={getTransparencyMeta()} />
        </div>
      </section>
    </>
  );
}
