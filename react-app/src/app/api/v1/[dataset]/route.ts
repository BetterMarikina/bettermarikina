import { LICENSE, getOpenDataset, getOpenDatasets } from '@/lib/open-data';
import { openDataJson } from '@/lib/open-data-response';

// One static JSON file per dataset, built at deploy time. Unknown ids return 404.
export const dynamic = 'force-static';
export const dynamicParams = false;

interface Context {
  params: { dataset: string };
}

export function generateStaticParams(): Context['params'][] {
  return getOpenDatasets().map((d) => ({ dataset: d.id }));
}

export function GET(_request: Request, { params }: Context): Response {
  const dataset = getOpenDataset(params.dataset);
  if (!dataset) return new Response('Not found', { status: 404 });
  return openDataJson({ id: dataset.id, license: LICENSE, meta: dataset.meta, data: dataset.data });
}
