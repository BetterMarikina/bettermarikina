# BetterMarikina.org

A civic-tech initiative providing transparent access to the services, programs, and public funds of Marikina City, Metro Manila, Philippines.

BetterMarikina is an independent, volunteer-run project. It is **not** an official website of the Marikina City Government. For official transactions, visit [marikina.gov.ph](https://www.marikina.gov.ph/).

**Cost to the People of Marikina = ₱0**

> **Status:** 🟡 Work in Progress. As of Sprint 05 (2026-11-02): city services with fees and requirements from the Citizen's Charters, health facilities, live river levels, FY2027 DPWH budget lines, officials, budget, statistics and ordinances use sourced Marikina data. Still not published: evacuation centers, per-barangay hazard levels and certified barangay officials (waiting on FOI).

## Getting Started

The site is a Next.js 14 + React + TypeScript app in [`react-app/`](react-app/).

```bash
cd react-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Open Data API

Every dataset on the site is available as free JSON, with its sources and a CC BY 4.0 license. No key needed; CORS is open.

```bash
curl https://www.bettermarikina.org/api/v1            # list of datasets
curl https://www.bettermarikina.org/api/v1/barangays  # one dataset: { id, license, meta, data }
```

See [/open-data](https://www.bettermarikina.org/open-data) for the endpoints and how to read `meta.sources`.

## Data Sources

Every figure published on the site must come from an official source:

| Source | URL | Data Type |
|--------|-----|-----------|
| Marikina City Government | [marikina.gov.ph](https://www.marikina.gov.ph/) | Contacts, Services |
| Marikina Full Disclosure Portal | [fdpp.marikina.gov.ph](https://fdpp.marikina.gov.ph/full-disclosure) | Budget, Financial Reports |
| Marikina City Ordinances | [fdpp.marikina.gov.ph/city-ordinance](https://fdpp.marikina.gov.ph/city-ordinance) | Ordinances, Resolutions |
| Bureau of Local Government Finance | [blgf.gov.ph](https://blgf.gov.ph/) | Budget, Financial Reports |
| Philippine Statistics Authority | [psa.gov.ph](https://psa.gov.ph/) | Demographics, Census |
| DPWH Transparency Portal | [transparency.dpwh.gov.ph](https://transparency.dpwh.gov.ph/) | Infrastructure Projects |
| DTI CMCI Portal | [cmci.dti.gov.ph](https://cmci.dti.gov.ph/) | Competitiveness Index |

## Contributing

We welcome contributions from everyone: developers, designers, data researchers, content writers, translators, and concerned citizens of Marikina.

1. Fork the repository and create a feature branch.
2. Make your changes. Cite the official source for any data you add.
3. Open a pull request against `main`.

Before opening a pull request, run the checks CI runs (from `react-app/`):

```bash
npm run check:data   # dataset rules: sources, mobile numbers, barangay councils
npm run lint
npm run build
npm start & npm run check:links   # crawl the build for broken internal links
```

Report issues or volunteer through [GitHub Issues](https://github.com/BetterMarikina/bettermarikina/issues).

## Credits

BetterMarikina is built on [BetterSolano](https://github.com/BetterSolano/bettersolano) by [Ramon Logan Jr.](https://ramonloganjr.com/), and is part of the [BetterGov.ph](https://bettergov.ph) community of Better LGU portals.

## License

| License | Applies To | Details |
|---------|------------|---------|
| MIT License | Source Code | Free to use, modify, and distribute |
| CC BY 4.0 | Content | Attribution required for content reuse |

See [LICENSE](LICENSE) for full details.
