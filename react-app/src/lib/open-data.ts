import barangays from '@/data/marikina/barangays.json';
import cityProfile from '@/data/marikina/city-profile.json';
import directory from '@/data/marikina/directory.json';
import dpwh2027 from '@/data/marikina/dpwh-2027.json';
import drrm from '@/data/marikina/drrm.json';
import facilities from '@/data/marikina/facilities.json';
import finance from '@/data/marikina/finance.json';
import officials from '@/data/marikina/officials.json';
import ordinances from '@/data/marikina/ordinances.json';
import resolutions from '@/data/marikina/resolutions.json';
import statistics from '@/data/marikina/statistics.json';
import services from '@/data/services.json';
import type { DatasetMeta } from '@/types';

export const API_BASE = '/api/v1';
export const LICENSE = {
  name: 'CC BY 4.0',
  url: 'https://creativecommons.org/licenses/by/4.0/',
  attribution: 'BetterMarikina (bettermarikina.org), from the official sources listed in meta.sources',
} as const;

interface RawDataset {
  meta: DatasetMeta;
  data: unknown;
}

export interface OpenDataset {
  id: string;
  description: string;
  meta: DatasetMeta;
  data: unknown;
}

// services.json keeps its records under `services` and `charterIndex` instead of `data`.
const servicesDataset: RawDataset = {
  meta: services.meta as DatasetMeta,
  data: { services: services.services, charterIndex: services.charterIndex },
};

const REGISTRY: { id: string; description: string; file: RawDataset }[] = [
  { id: 'barangays', description: 'The 16 barangays: PSGC code, district, population, land area, Punong Barangay, council where published', file: barangays as RawDataset },
  { id: 'city-profile', description: 'City profile: classification, income class, land area, population, legal basis', file: cityProfile as RawDataset },
  { id: 'officials', description: 'Elected city officials, 2025-2028', file: officials as RawDataset },
  { id: 'services', description: "42 city services with fees, processing times and requirements from the Citizen's Charter, plus the charter PDF index", file: servicesDataset },
  { id: 'facilities', description: 'Public schools, higher education institutions and health facilities', file: facilities as RawDataset },
  { id: 'directory', description: 'Hotlines and office phone numbers', file: directory as RawDataset },
  { id: 'drrm', description: 'Marikina River alarm thresholds, hazard maps and emergency services', file: drrm as RawDataset },
  { id: 'finance', description: 'Annual budgets, receipts and expenditures, debt, SEF, 20% NTA and LDRRMF', file: finance as RawDataset },
  { id: 'statistics', description: 'Population, households, CMCI scores and business counts', file: statistics as RawDataset },
  { id: 'ordinances', description: 'City ordinances as listed on the Full Disclosure Portal', file: ordinances as RawDataset },
  { id: 'resolutions', description: 'City resolutions as listed on the Full Disclosure Portal', file: resolutions as RawDataset },
  { id: 'dpwh-2027', description: 'DPWH FY2027 budget lines that name Marikina City (snapshot of the BetterGov.PH Budget API)', file: dpwh2027 as RawDataset },
];

export function getOpenDatasets(): OpenDataset[] {
  return REGISTRY.map(({ id, description, file }) => ({ id, description, meta: file.meta, data: file.data }));
}

export function getOpenDataset(id: string): OpenDataset | undefined {
  return getOpenDatasets().find((d) => d.id === id);
}

export function datasetPath(id: string): string {
  return `${API_BASE}/${id}`;
}
