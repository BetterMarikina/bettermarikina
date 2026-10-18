# Source Registry

This is every source BetterMarikina uses or plans to use. Conventions and tiers are in [README.md](README.md).

**Status:** ✅ reachable and has the data · ⚠️ partial or awkward to access · ❌ down or blocked · ❔ not yet checked

Entries marked "2026-10-19 (seed)" were checked while the sprint was being planned. Everything else gets checked in Sprint 01, Phase 1.

## City government (Tier 1)

| ID | Source | URL | What it has | Format | Status | Last checked | Notes |
|---|---|---|---|---|---|---|---|
| `city-our-city` | Marikina City – Our City | https://www.marikina.gov.ph/our-city | History, city officials (mayor, VM, reps, 16 councilors), barangays by district | HTML | ✅ | 2026-10-19 (seed) | Gives two land areas (~2,150 ha and 2,314.37 ha) and two proclamation dates (Dec 6 and Dec 8, 1996). See discrepancy log. |
| `city-facts` | Marikina City – Facts and Figures | https://www.marikina.gov.ph/facts-and-figures | Ecological Profile, 2023 Facts & Figures, 2022 Citizen's Charter, District 1/2 Roadmaps, BPLO statistical reports (footwear 1991–2025, businesses 2021–2026 Q2) | PDF/XLSX | ✅ | 2026-10-19 (seed) | The page itself has no figures. Everything is in the downloads. |
| `city-contact` | Marikina City – Contact Us | https://www.marikina.gov.ph/contact-us | City hall and department contacts | HTML | ✅ | 2026-10-18 | Already used in the rebrand commit. |
| `city-news` | Marikina City – News | https://www.marikina.gov.ph/news | Official news releases | HTML | ❔ | | |
| `city-forms` | Marikina City – Download Forms | https://www.marikina.gov.ph/download-forms | Application forms | PDF | ❔ | | |
| `fdp-city` | Marikina Full Disclosure Portal | https://fdpp.marikina.gov.ph/full-disclosure | 2020–2026: Annual Budget, APP/SAPP, GAD AR, Bid Results, SRE, SEF, Cash Flow, Trust Fund, LDRRMF, Manpower, Indebtedness, Unliquidated CA, 20% NTA | PDF | ⚠️ | 2026-10-19 (seed) | Links render as `#` in static HTML because they're built by JS, so use the browser pane. 2025 SRE covers Q1–Q3 only; 2026 is partial. |
| `fdp-ordinances` | Marikina City Ordinance/Resolution | https://fdpp.marikina.gov.ph/city-ordinance | Ordinances (and possibly resolutions) | HTML/PDF | ❔ | | |
| `fdp-charter` | Citizen's Charter | https://fdpp.marikina.gov.ph/citizen-charter | Services, requirements, fees, processing times | PDF | ❔ | | Compare with the 2022 edition on `city-facts`. |
| `fdp-bids` | Bids and Awards | https://fdpp.marikina.gov.ph/bids-and-awards | Procurement notices and awards | HTML/PDF | ❔ | | |
| `city-bplo` | Business Permits & Licensing | https://bplo.marikina.gov.ph/ | Business permit process, online portal | HTML | ❔ | | Portal: https://bplo.marikina.gov.ph/client/index |
| `city-payment` | Online Payment | https://payment.marikina.gov.ph/ | Online payment of city fees and taxes | HTML | ❔ | | Link to it only. Never enter data. |
| `city-hrmo` | HRMO Careers | https://hrmo.marikina.gov.ph/careers/ | Plantilla job postings, possibly the office list | HTML | ❔ | | |
| `fb-pio` | Marikina City PIO (Facebook) | https://www.facebook.com/MarikinaCityPIO | Announcements, advisories | Social | ❔ | | Tier 1 for announcements only. Link to it rather than copying. |
| `x-pio` | Marikina PIO (X) | https://twitter.com/MarikinaPIO | Announcements | Social | ❔ | | |
| `fb-barangays` | 16 barangay Facebook pages | *(collect in Phase 1)* | Current barangay officials, hall contacts | Social | ❔ | | Record one URL per barangay in Phase 3. |

## National government

| ID | Tier | Source | URL | What it has | Format | Status | Notes |
|---|---|---|---|---|---|---|---|
| `psa-psgc` | 1 | PSA – Philippine Standard Geographic Code | https://psa.gov.ph/classification/psgc | Official codes and names, city class, income class, urban/rural per barangay | HTML/XLSX | ⚠️ | Returns 403 to WebFetch, so use the browser pane. Marikina code prefix is `137402`. |
| `psa-popcen-2024` | 1 | PSA – 2024 Census of Population | https://psa.gov.ph/population-and-housing | City and barangay population, as of 2024-07-01 | XLSX/PDF | ❔ | Secondary sources give the city total as 471,323, which hasn't been confirmed on PSA. |
| `psa-census-2020` | 1 | PSA – 2020 Census of Population and Housing | https://psa.gov.ph/population-and-housing | City and barangay population, households | XLSX/PDF | ❔ | |
| `psa-census-2015` | 1 | PSA – 2015 POPCEN | https://psa.gov.ph/population-and-housing | City and barangay population | XLSX/PDF | ❔ | |
| `psa-openstat` | 1 | PSA OpenSTAT | https://openstat.psa.gov.ph/ | Statistical tables (poverty, labor, etc.) | CSV/PX | ❔ | Check for city-level series. |
| `psa-sae` | 1 | PSA – Small Area Poverty Estimates | https://psa.gov.ph/statistics/poverty | City-level poverty incidence | XLSX | ❔ | |
| `comelec-2025` | 1 | COMELEC – 2025 NLE results | https://comelec.gov.ph/ | Certified winners: mayor, VM, councilors, House reps | HTML/PDF | ❔ | Use it to check the `city-our-city` names. |
| `comelec-bske-2023` | 1 | COMELEC – 2023 BSKE results | https://comelec.gov.ph/ | Punong Barangay, Kagawad, SK chair per barangay | HTML/PDF | ❔ | |
| `comelec-ra12326` | 1 | COMELEC advisory on RA 12326 | https://comelec.gov.ph/ | BSKE moved from 2026-11-02 to 2028-11-13; terms extended | HTML | ❔ | SC petition (Macalintal) is pending. As of the 10 Oct 2026 advisory, there's no TRO. |
| `law-ra8223` | 1 | RA 8223 (Charter of Marikina City) | https://lawphil.net/ / https://www.officialgazette.gov.ph/ | Cityhood | HTML | ❔ | LawPhil is a mirror. Prefer the Official Gazette. |
| `law-ra9364` | 1 | RA 9364 (two legislative districts) | https://www.officialgazette.gov.ph/ | District composition | HTML | ❔ | |
| `dilg-fdp` | 2 | DILG Full Disclosure Policy Portal | https://fdpp.dilg.gov.ph/ | LGU FDP compliance and documents | HTML/PDF | ❔ | |
| `dilg-sglg` | 2 | DILG – Seal of Good Local Governance | https://dilg.gov.ph/ | SGLG passers by year | PDF | ❔ | |
| `dilg-ncr` | 2 | DILG-NCR | https://ncr.dilg.gov.ph/ | Barangay officials directory, advisories | HTML | ❔ | |
| `blgf-sre` | 1 | BLGF – LGU fiscal data (SRE) | https://blgf.gov.ph/ | Income/expenditure by LGU per year | XLSX | ❔ | Cross-check against `fdp-city` SRE. |
| `coa-aar` | 1 | COA – Annual Audit Reports (LGUs, NCR) | https://www.coa.gov.ph/reports/annual-audit-reports/ | Marikina City AAR per year | PDF | ❔ | Link to the reports. Don't restate findings. |
| `dti-cmci` | 2 | DTI – Cities & Municipalities Competitiveness Index | https://cmci.dti.gov.ph/ | Rank and pillar scores by year | HTML | ❔ | Marikina is in the HUC category. |
| `philgeps` | 1 | PhilGEPS | https://notices.philgeps.gov.ph/ | Procurement notices and awards | HTML | ❔ | Cross-reference with `fdp-bids`. |
| `dpwh-projects` | 1 | DPWH – infrastructure projects / transparency | https://www.dpwh.gov.ph/ | National projects in Marikina | HTML | ❔ | Phase 10: find which DEO covers Marikina. |
| `doh-nhfr` | 2 | DOH – National Health Facility Registry | https://nhfr.doh.gov.ph/ | Health facilities, type, ownership | HTML | ❔ | |
| `deped-schools` | 2 | DepEd – school data / SDO Marikina | https://www.deped.gov.ph/ | Public schools, school IDs | XLSX | ❔ | Also check SDO Marikina's own site. |
| `ched-hei` | 2 | CHED – HEI directory | https://ched.gov.ph/ | Colleges and universities | HTML/XLSX | ❔ | |
| `pagasa` | 1 | PAGASA | https://www.pagasa.dost.gov.ph/ | Rainfall and flood bulletins | HTML | ❔ | |
| `noah` | 2 | UP NOAH hazard maps | https://noah.up.edu.ph/ | Flood/landslide hazard by area | Web map | ❔ | Run by UP, so it's academic. Cite as "UP NOAH". |
| `mgb-geohazard` | 1 | MGB Geohazard maps | https://mgb.gov.ph/ | Flood/landslide susceptibility | PDF/map | ❔ | |
| `phivolcs-hazardhunter` | 1 | PHIVOLCS / HazardHunterPH | https://hazardhunter.georisk.gov.ph/ | Fault proximity (West Valley Fault), liquefaction | Web | ❔ | |
| `data-gov-ph` | 2 | data.gov.ph | https://data.gov.ph/ | Assorted datasets | CSV/JSON | ❔ | |
| `foi` | — | eFOI Portal | https://www.foi.gov.ph/ | Request channel for unpublished data | — | ❔ | 👤 The maintainer submits requests. Drafts go in `foi-drafts.md`. |

## Secondary sources (Tier 3, leads only)

| ID | Source | URL | Use for |
|---|---|---|---|
| `wiki-barangays` | Wikipedia – List of barangays in Marikina | https://en.wikipedia.org/wiki/List_of_barangays_in_Marikina | Leads on creation history (Fortune, Tumana) |
| `wiki-2025-elections` | Wikipedia – 2025 Marikina local elections | https://en.wikipedia.org/wiki/2025_Marikina_local_elections | Leads to check against COMELEC |
| `philatlas` | PhilAtlas – Marikina | https://www.philatlas.com/luzon/ncr/marikina.html | Cross-checking PSA figures |
| `citypopulation` | citypopulation.de – Marikina | https://citypopulation.de/en/philippines/marikina/ | Cross-checking PSA figures, PSGC codes |
| `brgy-directory` | barangaydirectory.com | https://www.barangaydirectory.com/city/city-of-marikina | Leads only. 2024 per-barangay populations are listed but must be confirmed on PSA. |
| `rappler-2025` | Rappler – 2025 Marikina local race | https://ph.rappler.com/elections/2025/local-race/ncr-marikina-city | Leads to check against COMELEC |
| `hdx-boundaries` | HDX – Philippines admin boundaries | https://data.humdata.org/ | Barangay polygons if no official GeoJSON exists. Label them "approximate". |

## Raw file manifest

Record every file downloaded into `data-raw/` here, so others can fetch and check the same files.

| File | Source ID | Original URL | Retrieved | SHA-256 |
|---|---|---|---|---|

## Discrepancy log

Record conflicting values here. Note which value was used and why.

| # | Topic | Value A (source) | Value B (source) | Used | Reason | Date |
|---|---|---|---|---|---|---|
| 1 | City land area | ~2,150 ha (`city-our-city`) | 2,314.37 ha (`city-our-city`, citing City Engineering Office) | *TBD* | Check against the Ecological Profile | 2026-10-19 |
| 2 | Cityhood proclamation date | 1996-12-06 (`city-our-city`) | 1996-12-08 (`city-our-city`) | *TBD* | Check against the RA 8223 plebiscite record | 2026-10-19 |
| 3 | 2025 council seat/party split | NUP 10, Lakas 5 (`wiki-2025-elections`) | Different tally (Substack summary) | Don't publish party split | Not needed; names come from COMELEC | 2026-10-19 |
