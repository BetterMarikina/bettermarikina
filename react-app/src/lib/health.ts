import type { HealthFacility } from '@/types';

/**
 * Barangay health centers grouped by barangay name. Only facilities named "... Health Center" count, so the
 * city employees' clinic (also licensed as primary care) is left out.
 */
export function healthCentersByBarangay(facilities: HealthFacility[]): Map<string, HealthFacility[]> {
  const byBarangay = new Map<string, HealthFacility[]>();
  for (const f of facilities) {
    if (f.type !== 'health-center' || !f.barangay || !/health center/i.test(f.name)) continue;
    byBarangay.set(f.barangay, [...(byBarangay.get(f.barangay) ?? []), f]);
  }
  return byBarangay;
}
