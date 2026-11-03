import barangaysData from '@/data/marikina/barangays.json';
import drrmData from '@/data/marikina/drrm.json';
import facilitiesData from '@/data/marikina/facilities.json';
import type { Barangay, Dataset, DrrmData, FacilitiesData, HealthFacility, RiverStationLevels } from '@/types';

const barangays = barangaysData as unknown as Dataset<Barangay[]>;
const drrm = drrmData as unknown as Dataset<DrrmData>;
const facilities = facilitiesData as unknown as Dataset<FacilitiesData>;

export function getBarangaysDataset(): Dataset<Barangay[]> {
  return barangays;
}

export function getBarangay(id: string): Barangay | undefined {
  return barangays.data.find((b) => b.id === id);
}

export function barangayPath(b: Pick<Barangay, 'id'>): string {
  return `/barangays/${b.id}`;
}

// PAGASA writes "Sto. Niño" where the PSGC name is "Santo Niño".
function normalizeName(name: string): string {
  return name.toLowerCase().replace(/\bsto\.\s*/g, 'santo ').replace(/\bsta\.\s*/g, 'santa ').trim();
}

/** PAGASA river stations whose own location names this barangay. No "nearest station" guess. */
export function riverStationsIn(b: Barangay): RiverStationLevels[] {
  const name = normalizeName(b.name);
  return drrm.data.riverAlarmLevels.filter((s) => normalizeName(s.location).includes(name));
}

/** Every DOH- or PhilHealth-listed facility whose address is in this barangay. */
export function healthFacilitiesIn(b: Barangay): HealthFacility[] {
  return facilities.data.healthFacilities.filter((f) => f.barangay === b.name);
}

export function getDrrmMeta(): Dataset<DrrmData>['meta'] {
  return drrm.meta;
}

export function getFacilitiesMeta(): Dataset<FacilitiesData>['meta'] {
  return facilities.meta;
}
