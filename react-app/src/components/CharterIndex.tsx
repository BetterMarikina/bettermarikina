import servicesData from '@/data/services.json';
import SourceNote from '@/components/SourceNote';
import type { DatasetMeta } from '@/types';

interface CharterOffice {
  id: string;
  office: string;
  edition: string;
  pdfUrl: string;
  externalServices: string[] | null;
  externalServicesNote: string | null;
}

export default function CharterIndex(): JSX.Element {
  const offices = servicesData.charterIndex as CharterOffice[];
  return (
    <section className="section">
      <div className="container">
        <h2>Citizen&apos;s Charter by office</h2>
        <p>
          Fees, requirements and processing times are in each office&apos;s charter. Open the PDF for the full table.
        </p>
        {offices.map((office) => (
          <details key={office.id} style={{ marginBottom: 'var(--spacing-sm)' }}>
            <summary>
              {office.office} ({office.edition} edition)
            </summary>
            {office.externalServices ? (
              <ul>
                {office.externalServices.map((title) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            ) : (
              <p>{office.externalServicesNote}</p>
            )}
            <a href={office.pdfUrl} target="_blank" rel="noopener noreferrer">
              Read the charter (PDF)
            </a>
          </details>
        ))}
        <SourceNote meta={servicesData.meta as DatasetMeta} />
      </div>
    </section>
  );
}
