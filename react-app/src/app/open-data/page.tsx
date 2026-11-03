import Link from 'next/link';
import { API_BASE, LICENSE, datasetPath, getOpenDatasets } from '@/lib/open-data';

export const metadata = {
  title: 'Open data API',
  description: 'Free JSON API for Marikina City data: barangays, officials, services, facilities, budget and more, with sources.',
};

const SITE_URL = 'https://www.bettermarikina.org';

export default function OpenDataPage(): JSX.Element {
  const datasets = getOpenDatasets();

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Open data API</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-braces"></i> Open data</span>
            <h1>Open data API</h1>
            <p className="page-header-desc">
              Every dataset on this site as free JSON, with the official sources it came from.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title-sm">How to use it</h2>
          <p>
            No key or sign-up. Send a GET request; responses are JSON and can be read from any website (CORS is open).
            The list of datasets is at <a href={API_BASE}><code>{API_BASE}</code></a>.
          </p>
          <pre><code>{`curl ${SITE_URL}${datasetPath('barangays')}`}</code></pre>
          <p>Each response has the same shape:</p>
          <pre><code>{`{
  "id": "barangays",
  "license": { "name": "${LICENSE.name}", ... },
  "meta": { "title", "asOf", "sources": [{ "id", "tier", "url", "retrievedAt", "covers" }], "notes" },
  "data": ...
}`}</code></pre>

          <h2 className="section-title-sm">Datasets</h2>
          <div className="table-responsive">
            <table className="data-table">
              <caption className="sr-only">Open datasets and their endpoints</caption>
              <thead>
                <tr>
                  <th scope="col">Endpoint</th>
                  <th scope="col">What it has</th>
                  <th scope="col">As of</th>
                  <th scope="col">Sources</th>
                </tr>
              </thead>
              <tbody>
                {datasets.map((d) => (
                  <tr key={d.id}>
                    <td><a href={datasetPath(d.id)}><code>{datasetPath(d.id)}</code></a></td>
                    <td>{d.description}</td>
                    <td>{d.meta.asOf}</td>
                    <td>{d.meta.sources.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title-sm">Before you use the data</h2>
          <ul>
            <li>
              <strong>Check the source.</strong> Every dataset lists its sources in <code>meta.sources</code>. Tier 1 is an
              official government source, tier 2 an official but indirect one, tier 3 secondary. Read{' '}
              <code>meta.notes</code> for gaps and known differences.
            </li>
            <li>
              <strong>Missing values are <code>null</code>.</strong> We publish a value only after checking it against a
              source, so <code>null</code> means &quot;not yet verified&quot;, not zero.
            </li>
            <li>
              <strong>It is a snapshot.</strong> The files update when the site is redeployed. Use <code>meta.asOf</code> and
              each source&apos;s <code>retrievedAt</code> to see how current a figure is.
            </li>
            <li>
              <strong>Not an official city service.</strong> BetterMarikina is a volunteer project. For transactions, use{' '}
              <a href="https://www.marikina.gov.ph/" target="_blank" rel="noopener noreferrer">marikina.gov.ph</a>.
            </li>
          </ul>

          <h2 className="section-title-sm">License</h2>
          <p>
            The data is shared under <a href={LICENSE.url} target="_blank" rel="noopener noreferrer">{LICENSE.name}</a>.
            Credit &quot;{LICENSE.attribution}&quot;. Found an error? Open an issue on{' '}
            <a href="https://github.com/BetterMarikina/bettermarikina/issues" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
      </section>
    </>
  );
}
