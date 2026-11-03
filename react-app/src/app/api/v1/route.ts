import { LICENSE, datasetPath, getOpenDatasets } from '@/lib/open-data';
import { openDataJson } from '@/lib/open-data-response';

// Built once at deploy time and served as a static file.
export const dynamic = 'force-static';

export function GET(): Response {
  return openDataJson({
    name: 'BetterMarikina open data',
    docs: '/open-data',
    license: LICENSE,
    datasets: getOpenDatasets().map((d) => ({
      id: d.id,
      title: d.meta.title,
      description: d.description,
      url: datasetPath(d.id),
      asOf: d.meta.asOf,
      sources: d.meta.sources.length,
    })),
  });
}
