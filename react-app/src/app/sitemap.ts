import type { MetadataRoute } from 'next';
import { categoriesContent } from '@/data/categoriesContent';
import { serviceDetailsContent } from '@/data/serviceDetailsContent';

const SITE_URL = 'https://www.bettermarikina.org';

// Static routes under src/app; keep in sync when adding a page.
const STATIC_ROUTES = [
  '',
  '/accessibility',
  '/barangays',
  '/budget',
  '/contact',
  '/faq',
  '/government',
  '/legislative',
  '/legislative/ordinance-framework',
  '/legislative/resolution-framework',
  '/news',
  '/privacy',
  '/services',
  '/sitemap',
  '/sitemap-page',
  '/statistics',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_ROUTES,
    ...categoriesContent.map((category) => `/services/${category.id}`),
    ...serviceDetailsContent.map((service) => `/service-details/${service.id}`),
  ];

  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
