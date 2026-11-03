import { notFound } from 'next/navigation';
import Link from 'next/link';
import PrintButton from '@/components/PrintButton';
import SourceNote from '@/components/SourceNote';
import {
  getAllServices,
  getCharterLink,
  getService,
  getServicesInCategory,
  getServicesMeta,
  servicePath,
} from '@/lib/services';

interface Props {
  params: { category: string; id: string };
}

export function generateStaticParams(): Props['params'][] {
  return getAllServices().map((s) => ({ category: s.categoryId, id: s.id }));
}

export function generateMetadata({ params }: Props): { title: string; description?: string } {
  const service = getService(params.category, params.id);
  if (!service) return { title: 'Service' };
  return {
    title: `${service.title} | Requirements and fees`,
    description: `${service.description} Fee, processing time and requirements from the Marikina Citizen's Charter.`,
  };
}

export default function ServicePage({ params }: Props): JSX.Element {
  const service = getService(params.category, params.id);
  if (!service) notFound();

  const charter = getCharterLink(service);
  const related = getServicesInCategory(service.categoryId).filter((s) => s.id !== service.id);

  return (
    <>
      <div className="container no-print">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <Link href={`/services/${service.categoryId}`}>{service.category}</Link>
          <span>/</span>
          <span aria-current="page">{service.title}</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-clipboard-check"></i> {service.category}</span>
            <h1>{service.title}</h1>
            <p className="page-header-desc">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-checklist">
          <dl className="service-facts">
            <div>
              <dt>Fee</dt>
              <dd>{service.fee}</dd>
            </div>
            <div>
              <dt>Processing time</dt>
              <dd>{service.processingTime}</dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>{service.office}</dd>
            </div>
            {service.whoMayAvail && (
              <div>
                <dt>Who may apply</dt>
                <dd>{service.whoMayAvail}</dd>
              </div>
            )}
          </dl>

          <div className="service-checklist-head">
            <h2 className="section-title-sm">What to bring</h2>
            <PrintButton />
          </div>
          <ul className="checklist">
            {service.requirements.map((req) => (
              <li key={req}>
                <label>
                  <input type="checkbox" /> <span>{req}</span>
                </label>
              </li>
            ))}
          </ul>

          {service.onlineUrl && (
            <p className="no-print">
              <i className="bi bi-globe" aria-hidden="true"></i>{' '}
              This service can also be started online:{' '}
              <a href={service.onlineUrl} target="_blank" rel="noopener noreferrer">{service.onlineUrl}</a>
            </p>
          )}

          <p className="service-charter-ref">
            From the{' '}
            {charter ? (
              <a href={charter.url} target="_blank" rel="noopener noreferrer">{charter.label}</a>
            ) : (
              `Citizen's Charter, ${service.charter.edition}, ${service.charter.ref}`
            )}
            . Fees and requirements can change; check with the office before you go.
          </p>

          {related.length > 0 && (
            <div className="no-print">
              <h2 className="section-title-sm">Other {service.category} services</h2>
              <ul>
                {related.map((s) => (
                  <li key={s.id}><Link href={servicePath(s)}>{s.title}</Link></li>
                ))}
              </ul>
            </div>
          )}

          <SourceNote meta={getServicesMeta()} />
        </div>
      </section>
    </>
  );
}
