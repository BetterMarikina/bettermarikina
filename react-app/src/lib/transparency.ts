import transparencyData from '@/data/marikina/transparency.json';
import type { AuditReport, Dataset, FoiRequest, FoiStatus, TransparencyData } from '@/types';

const transparency = transparencyData as unknown as Dataset<TransparencyData>;

export const FOI_STATUS: Record<FoiStatus, { label: string; badge: string }> = {
  draft: { label: 'Not yet sent', badge: 'badge' },
  sent: { label: 'Waiting for reply', badge: 'badge badge-warning' },
  answered: { label: 'Answered', badge: 'badge badge-success' },
  denied: { label: 'Denied', badge: 'badge badge-info' },
};

export function getTransparencyMeta(): Dataset<TransparencyData>['meta'] {
  return transparency.meta;
}

/** Newest first; annual reports before compliance reports of the same year. */
export function getAuditReports(): AuditReport[] {
  return [...transparency.data.auditReports].sort(
    (a, b) => b.year - a.year || (a.kind === 'annual' ? -1 : 1) - (b.kind === 'annual' ? -1 : 1),
  );
}

/** Sent requests first (they need watching), then drafts, in FOI number order. */
export function getFoiRequests(): FoiRequest[] {
  const rank = (r: FoiRequest): number => (r.status === 'sent' ? 0 : r.status === 'draft' ? 2 : 1);
  return [...transparency.data.foiRequests].sort(
    (a, b) => rank(a) - rank(b) || Number(a.id.split('-')[1]) - Number(b.id.split('-')[1]),
  );
}
