import servicesData from '@/data/services.json';
import type { CharterService, DatasetMeta, ServicesFile } from '@/types';

const data = servicesData as unknown as ServicesFile;

// The first part of a service's charter ref ("BPLO, pp. 3-6") names the office whose PDF it cites.
const CHARTER_OFFICE_BY_REF: Record<string, string> = {
  BPLO: 'bplo',
  Treasury: 'treasury',
  'City Planning and Development Office': 'planning',
  'Office of the Building Official': 'building-official',
  'Civil Registry': 'civil-registry',
  'City Health Office': 'cho',
  OSCA: 'osca',
  CSWDO: 'cswdo',
  LRPESO: 'lrpeso',
  "City Assessor's Office": 'assessors',
};

const CHARTER_2022_SOURCE = 'city-charter-2022';

export interface CharterLink {
  label: string;
  url: string;
}

export function getServicesMeta(): DatasetMeta {
  return data.meta;
}

export function getAllServices(): CharterService[] {
  return data.services;
}

export function getService(categoryId: string, id: string): CharterService | undefined {
  return data.services.find((s) => s.categoryId === categoryId && s.id === id);
}

export function getServicesInCategory(categoryId: string): CharterService[] {
  return data.services.filter((s) => s.categoryId === categoryId);
}

export function servicePath(service: Pick<CharterService, 'categoryId' | 'id'>): string {
  return `/services/${service.categoryId}/${service.id}`;
}

/** The charter PDF the service's fees and requirements were read from, or null if it can't be matched. */
export function getCharterLink(service: CharterService): CharterLink | null {
  const { edition, ref } = service.charter;
  const label = `Citizen's Charter, ${edition}, ${ref}`;
  if (edition.startsWith('2022')) {
    const source = data.meta.sources.find((s) => s.id === CHARTER_2022_SOURCE);
    return source ? { label, url: source.url } : null;
  }
  const officeId = CHARTER_OFFICE_BY_REF[ref.split(',')[0].trim()];
  const office = data.charterIndex.find((o) => o.id === officeId && edition.startsWith(o.edition));
  return office ? { label, url: office.pdfUrl } : null;
}
