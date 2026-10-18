# Sprint 01: Official Data Foundation

**Goal:** Gather official data on Marikina City and all 16 barangays, record where every piece came from, and replace the `ComingSoon` placeholders on BetterMarikina with sourced data.

**Started:** 2026-10-19
**Branch:** `sprint-01/official-data`
**Companion docs:** [Data conventions](../data/README.md) · [Source registry](../data/SOURCES.md)

---

## How to work this sprint

1. Do the phases in order. Phase 0 and Phase 1 block everything else. After that, Phases 2–12 are independent, but each one ends with a commit.
2. Tick a box (`- [x]`) only when its output exists in the repo **and** has a source recorded in the registry.
3. If an item can't be finished, for example because the source is down, the data isn't published, or a human is needed, leave it unticked and add a line under **Blockers & carry-over** at the bottom. Then move on.
4. Items marked 👤 need the maintainer (@terddyy). Examples are FOI requests, emailing city offices, and anything sent or published outside the repo. Prepare drafts for these, but don't send anything.
5. Commit after each phase with a conventional commit, e.g. `feat(data): add barangay profiles from PSA and city portal`. Don't push or open a PR. The maintainer reviews the branch at the end.

### Ground rules (from [data conventions](../data/README.md))

- **Official first.** A published value must come from a Tier 1 or Tier 2 source. Tier 3 sources such as Wikipedia, PhilAtlas, citypopulation.de and news can be used as leads. They can only appear on the site when labeled as secondary.
- **Every dataset has `meta`**: source name, URL, retrieved date, as-of date, and tier.
- **Conflicts are logged, not hidden.** Add an entry to the discrepancy log in [SOURCES.md](../data/SOURCES.md#discrepancy-log) and use the most recent Tier 1 value.
- **No personal data.** Publish office phone numbers, emails and addresses only. Don't publish personal mobile numbers, home addresses or private social media accounts, even if a government page lists them.
- **Raw downloads** such as PDFs and XLSX files go in `data-raw/`, which is gitignored. Record each file's SHA-256 in the registry so it can be fetched again and checked.

### Access notes

- `psa.gov.ph` returns **403** to WebFetch. Use the built-in browser pane for PSA pages.
- File links on `fdpp.marikina.gov.ph/full-disclosure` show up as `#` in static HTML because they're rendered by JavaScript. Open the page in the browser pane and read the real hrefs from the DOM.
- Official portals: `www.marikina.gov.ph`, `fdpp.marikina.gov.ph`, `bplo.marikina.gov.ph`, `payment.marikina.gov.ph`, `hrmo.marikina.gov.ph`.

---

## Phase 0: Setup

- [x] Create branch `sprint-01/official-data` from `main` (holds the sprint docs commit)
- [x] Add `data-raw/` to `.gitignore`
- [x] Create `react-app/src/data/marikina/` as the home for all sourced JSON
- [x] Add TypeScript types for each dataset to `react-app/src/types/index.ts`, including a shared `DatasetMeta` type (shape defined in [data conventions](../data/README.md#dataset-envelope))
- [x] Confirm `cd react-app && npm run build` passes before any data work starts (baseline)

## Phase 1: Source discovery & registry

**Output:** a complete [SOURCES.md](../data/SOURCES.md), with every source's reachability checked.

- [ ] Open every source in the registry and set its status to ✅ reachable, ⚠️ partial, or ❌ down/blocked
- [x] Download the city's own reference PDFs from `marikina.gov.ph/facts-and-figures`: **Ecological Profile**, **2023 Facts and Figures**, **2022 Citizen's Charter**, **Roadmap – District One**, **Roadmap – District Two**, and the BPLO statistical reports. Save them to `data-raw/city/` and record their hashes.
- [x] Get the real file URLs for the Full Disclosure Portal (2020–2026) and record the URL pattern in the registry
- [ ] Check data.gov.ph and openstat.psa.gov.ph for Marikina-level tables and record what exists
- [ ] Find the official Facebook pages of the City PIO, Sangguniang Panlungsod, CDRRMO/Rescue 161, and each of the 16 barangays, and record them as Tier 1 *announcement* sources
- [x] Note any source that needs an FOI request. 👤 Draft those requests in `docs/data/foi-drafts.md`, but don't submit them.

## Phase 2: City profile

**Output:** `react-app/src/data/marikina/city-profile.json`

- [ ] Official name, PSGC code, region (NCR), income class, and classification (highly urbanized city)
- [ ] Legal basis: RA 8223 (cityhood, 1996), RA 9364 (two congressional districts, 2006), PD 824 (Metro Manila, 1975). Record the source document for each.
- [x] Land area (settled on 2,314.37 ha, discrepancy #1). The city's own page gives two different figures, ~2,150 ha and 2,314.37 ha. Settle which is current and log the discrepancy.
- [ ] Population series: 2010, 2015, 2020 and 2024 censuses (PSA). The 2024 POPCEN total **471,323** comes from a secondary source and must be confirmed on PSA.
- [x] Households, population density and growth rate (PSA)
- [x] Sourced history timeline (Jesuit mission 1630, parish 1687, Kapitan Moy and shoemaking 1887, Rizal 1901, Metro Manila 1975, cityhood 1996/1997). The proclamation date conflict (Dec 6 vs Dec 8, 1996) goes in the discrepancy log.
- [ ] City seal, hymn and flag. Include them only if officially published, and with attribution.
- [x] Replace `ComingSoon` "History coming soon" on the home page (`react-app/src/app/page.tsx`)

## Phase 3: Barangays (all 16)

**Output:** `react-app/src/data/marikina/barangays.json`, with one record per barangay

Each barangay needs a **checklist row**. Tick it only when every field below is filled or explicitly marked `null` with a reason.

Fields: PSGC code · district · population (2015 / 2020 / 2024) · land area · urban/rural · Punong Barangay · 7 Kagawad · SK Chairperson · barangay hall address · official phone/email · official FB page · flood hazard level (Phase 11) · source refs

| # | Barangay | District | Done |
|---|---|---|---|
| 1 | Barangka | I | [ ] |
| 2 | Calumpang (Kalumpang) | I | [ ] |
| 3 | Industrial Valley Complex (IVC) | I | [ ] |
| 4 | Jesus de la Peña | I | [ ] |
| 5 | Malanday | I | [ ] |
| 6 | San Roque | I | [ ] |
| 7 | Santa Elena (Poblacion) | I | [ ] |
| 8 | Santo Niño | I | [ ] |
| 9 | Tañong | I | [ ] |
| 10 | Concepcion Uno | II | [ ] |
| 11 | Concepcion Dos | II | [ ] |
| 12 | Fortune | II | [ ] |
| 13 | Marikina Heights | II | [ ] |
| 14 | Nangka | II | [ ] |
| 15 | Parang | II | [ ] |
| 16 | Tumana | II | [ ] |

District assignment is from `marikina.gov.ph/our-city`. Confirm it against RA 9364 or COMELEC.

- [ ] PSGC codes and official spellings from the PSA PSGC (Marikina code prefix `137402`)
- [ ] Per-barangay population, from PSA census tables for 2015, 2020 and 2024
- [ ] Barangay officials (elected in the **October 2023 BSKE**). **RA 12326** (signed 2026-09-24) moved the next BSKE from 2026-11-02 to **2028-11-13** and extended terms, so 2023 officials stay in office. A Supreme Court challenge (Macalintal) is pending, so recheck its status before publishing and record the as-of date. Sources: COMELEC 2023 BSKE results, DILG-NCR, the city's barangay listings, and barangay FB pages (for current incumbents and vacancies).
- [x] Note the creation history of Fortune and Tumana, which were split from Parang and Concepcion Uno. Find the founding ordinance or law for each.
- [ ] Barangay boundaries GeoJSON. Prefer the city or NAMRIA. If the only option is an HDX/OSM boundary, label it **Tier 3, approximate**.
- [x] Build a barangays page or section. Add a `/barangays` route in the React app and link it from Government.

## Phase 4: City officials & government structure

**Output:** `react-app/src/data/marikina/officials.json`

Seed list from `marikina.gov.ph/our-city`, to be checked against COMELEC 2025 certified results:

- Mayor: Marjorie Ann "Maan" A. Teodoro · Vice Mayor: Del R. De Guzman (term 2025-06-30 → 2028-06-30)
- House Reps: District 1, Marcelino R. Teodoro; District 2, Romero Federico Quimbo
- Councilors, District 1 (8): Romina Kate N. De Guzman, Samuel S. Ferriol, Carl Eli F. Afica, Rommel S. Acuña, Manuel E. Sarmiento, Serafin Y. Bernardino, Cloyd S. Casimiro, Jojo B. Banzon
- Councilors, District 2 (8): Donn Carlo B. Favis, Angelito R. Nuñez, Loreto F. Tolentino Jr., Ronnie S. Acuña, Levy dL. de Guzman, Marife Dayao, Renato B. Magtubo, Hilario Punzalan

Tasks:

- [ ] Check each name and spelling against COMELEC 2025 certified results
- [ ] Add the ex-officio council members: the Liga ng mga Barangay president and the SK Federation president (18 members in total)
- [ ] Sangguniang Panlungsod standing committees and their chairs
- [ ] City department heads and offices (administrator, treasurer, assessor, budget, accounting, planning, engineering, CSWDO, CHO, CDRRMO, BPLO, civil registrar, PESO, etc.). Get these from the Citizen's Charter and the HRMO.
- [ ] Official photos, only if published by the city, with attribution. Otherwise use initials avatars.
- [x] Replace `ComingSoon` in `react-app/src/app/government/page.tsx` (both blocks) and in the officials block on the home page

## Phase 5: Legislation

**Output:** `react-app/src/data/marikina/ordinances.json` and `resolutions.json`

- [x] Scrape the list at `fdpp.marikina.gov.ph/city-ordinance`: number, title, date approved, and PDF link if present
- [ ] Check for a separate Sangguniang Panlungsod portal or FB page that has resolutions, and record what you find
- [x] Categorize items by topic (finance, health, environment, traffic, etc.) using keywords only. Don't summarize legal text.
- [x] Record the coverage window (earliest to latest item) in `meta.notes`
- [x] Replace `ComingSoon` in `legislative/ordinance-framework` and `legislative/resolution-framework` (resolutions page shows the single resolution the portal lists)
- [x] (deprecated, not deleted: the legacy static site still loads them; see `data/DEPRECATED.md`) Delete the legacy Solano `data/ordinances.json` and `data/resolutions.json` from the static site, or mark them deprecated. Check whether the static site still serves them first.

## Phase 6: Finance & transparency

**Output:** `react-app/src/data/marikina/finance.json` and `procurement.json`

- [ ] Annual budget, 2020–2026 (FDP)
- [ ] Statement of Receipts and Expenditures (SRE): FDP quarterly, cross-checked against **BLGF** published SRE (income sources, IRA/NTA share, local revenue)
- [ ] COA Annual Audit Reports for Marikina City, latest 3 years: audit opinion and key findings count. Link to them rather than restating findings.
- [ ] 20% NTA development fund, SEF, LDRRMF and GAD utilization. For the latest year, record a summary plus a link to the source.
- [ ] Statement of indebtedness, latest available
- [ ] Annual Procurement Plan and bid results (FDP), cross-referenced with PhilGEPS
- [ ] DILG Full Disclosure Policy compliance status and SGLG awards history
- [ ] Replace the financial-reports `ComingSoon` in `react-app/src/app/budget/page.tsx`

## Phase 7: Statistics & indices

**Output:** `react-app/src/data/marikina/statistics.json`

- [x] Population and households trend (from Phase 2)
- [x] DTI CMCI: Marikina's overall rank and score by pillar (Economic Dynamism, Government Efficiency, Infrastructure, Resiliency, Innovation) for all available years. Replace the Solano-shaped `data/competitive-index.json`.
- [ ] Business statistics from the BPLO reports: registered businesses by type, the footwear industry series (1991–2025), and employee counts
- [ ] PSA small-area poverty estimates, if published for Marikina
- [x] Rebuild the statistics page with charts, using the existing `chart.js` / `react-chartjs-2` dependencies. No new dependencies.

## Phase 8: Services (Citizen's Charter)

**Output:** `react-app/src/data/services.json` rewritten for Marikina

- [ ] Download the latest Citizen's Charter from `fdpp.marikina.gov.ph/citizen-charter`. The 2022 edition is on the Facts & Figures page; check whether a newer one exists.
- [ ] For each service, record the office, requirements, fees, processing time and steps, as stated in the charter. Note the charter edition for each.
- [x] Remove every remaining Solano-specific service (fees, offices and descriptions that mention Solano)
- [x] Map services to the existing category IDs in `react-app/src/data/categoriesContent.ts`
- [x] Link to online services where they exist (BPLO business portal, online payment)
- [ ] ⚠️ `services.json` is stored with CRLF line endings. Stage it with `git -c core.autocrlf=false add`.

## Phase 9: Contacts & hotlines

**Output:** `react-app/src/data/marikina/directory.json`

- [x] City hall trunk lines and department contacts (from `marikina.gov.ph/contact-us`)
- [x] Emergency: Rescue 161, CDRRMO, BFP Marikina, PNP Marikina, traffic office
- [ ] Hospitals and health facilities with official contact numbers: Amang Rodriguez Memorial Medical Center (DOH), the city's hospitals and health centers, and private hospitals listed in the **DOH NHFR**
- [x] Barangay hall contacts (cross-link Phase 3; 14 of 16 office landlines, Fortune and Tumana list none)
- [x] Replace the hospital-hotline `ComingSoon` in `react-app/src/app/contact/page.tsx`

## Phase 10: Infrastructure & DPWH projects

**Output:** `react-app/src/data/marikina/dpwh-projects.json`

- [ ] Find which DPWH district engineering office covers Marikina, and record it
- [ ] Collect DPWH projects located in Marikina (name, location/barangay, cost, contractor, status, years) from the DPWH transparency portal and flood-control listings
- [ ] Collect city-funded infrastructure from FDP bid results (Phase 6)
- [ ] Replace the DPWH `ComingSoon` in `react-app/src/app/budget/page.tsx`
- [x] (deprecated, see `data/DEPRECATED.md`) Delete or deprecate the legacy Solano `data/dpwh-projects.json`

## Phase 11: Disaster risk & environment

**Output:** `react-app/src/data/marikina/drrm.json`

- [ ] Marikina River alarm levels: the official water-level thresholds (1st/2nd/3rd alarm, forced evacuation) and where to see live readings
- [ ] Flood, landslide and fault hazard per barangay, from MGB, Project NOAH/UP NOAH and PHIVOLCS (West Valley Fault). Use hazard levels only and cite the map source.
- [ ] Evacuation centers per barangay (CDRRMO or city sources)
- [ ] LDRRM plan and LDRRMF utilization (Phase 6 cross-link)
- [ ] Solid waste and environment programs, only if officially published

## Phase 12: Education & health facilities

**Output:** `react-app/src/data/marikina/facilities.json`

- [ ] Public schools from the DepEd Schools Division Office of Marikina (school ID, name, level, barangay)
- [ ] Higher education: Pamantasan ng Lungsod ng Marikina, Marikina Polytechnic College, and others. Cross-check against the CHED HEI list.
- [ ] Health facilities from the DOH NHFR (name, type, ownership, barangay)
- [ ] Public markets, libraries and sports facilities, only from city sources

## Phase 13: Publish to site

- [x] (2 left on the budget page, both with blockers below) Grep `react-app/src` for `ComingSoon`. Every remaining use must either be gone or have a blocker listed below.
- [x] Each page shows its source line with links, plus "as of" dates from `meta`
- [x] News section: link to the City PIO channels instead of copying their content. Leave `ComingSoon` in place only if no feed is used.
- [ ] Remove Solano leftovers: grep the repo for `Solano`, `Nueva Vizcaya` and `Dacayo` (ignore LICENSE attribution and `upstream` references)
- [x] `cd react-app && npm run build` and `npm run lint` pass
- [x] Check every changed page in the browser preview (desktop and mobile widths) and confirm there are no console errors

## Phase 14: Close-out

- [ ] Every registry entry has a status, a last-checked date and an update cadence
- [x] The discrepancy log is complete
- [x] Write `docs/sprints/sprint-01-report.md` covering what was published, what's blocked, the FOI drafts awaiting the maintainer, and recommended Sprint 02 items
- [ ] Final commit. Report the branch name and commit list to the maintainer.

---

## Definition of done

- All 16 barangay rows are ticked, or have documented blockers
- Every JSON file in `react-app/src/data/marikina/` has a valid `meta` block, and every value traces to a registry entry
- No `ComingSoon` remains without a listed blocker
- No Solano data remains in user-facing pages
- The build and lint pass, and the pages have been checked in the browser

## Blockers & carry-over

<!-- Format: - [phase] item — reason — what's needed (👤 if maintainer action) -->

- [1] Phase 1 items left open: sources still ❔ (`comelec-ra12326`, `dilg-sglg`, `fb-barangays`); data.gov.ph/openstat.psa.gov.ph not searched for Marikina tables (openstat 403); official Facebook pages for SP, CDRRMO and the 16 barangays not collected (only PIO and Rescue 161 links came from the city contact page); District 1/2 Roadmaps are image-only PDFs and were not transcribed; masterlists of business establishments not downloaded — needs a person to browse Facebook / OCR (FOI-8 drafted).
- [1, 2, 3] psa.gov.ph is behind a Cloudflare bot check even in the browser pane. It was not bypassed. Not confirmed on PSA: 2024 POPCEN per-barangay values, PSGC codes, income class, urban/rural flags — 👤 maintainer can open psa.gov.ph/classification/psgc/barangays/137402000 in a normal browser and send the table.
- [2] Identity items left open: income class (null); original texts of PD 824 (1975) and Act No. 137 (1901); city seal, hymn and flag not collected.
- [3] Barangay rows all unticked: Kagawad, SK Chairperson, barangay hall address, official FB page, flood hazard level and urban/rural are null; Punong Barangay and office phone are from the city contact page (footer 2023) and not checked against COMELEC; boundaries GeoJSON not done — 👤 FOI-1 drafted.
- [4] Councilor names are not checked against COMELEC certified results (the COMELEC site gave no table). The city's own our-city page still shows the previous council (discrepancy #4). Ex-officio members (Liga, SK Federation), committees and department heads are not published on pages we could read (the 2023 Facts and Figures names are out of date) — 👤 FOI-2, FOI-5 drafted.
- [5] No separate Sangguniang Panlungsod portal or resolution list found; the FDP lists 149 ordinances and 1 resolution with no approval dates — 👤 FOI-4 drafted. The legacy Solano data/*.json is only marked deprecated because the legacy static pages still load it; retiring the legacy static site is the maintainer's call.
- [6] Whole phase blocked: FDP budget, SRE, indebtedness, SEF, LDRRMF, NTA, GAD, APP and bid-result PDFs are image scans with no text layer, and no OCR was available. They are downloaded and hashed in data-raw/fdp/ (22 files). COA audit reports (coa.gov.ph 403), BLGF SRE (403), PhilGEPS cross-check, SGLG history and the finance.json/procurement.json files were not done — needs OCR or spreadsheets (👤 FOI-3 drafted). The budget page keeps a ComingSoon with this explanation.
- [7] Statistics: footwear series 1991-2010 omitted (chart labels in the extracted text cannot be matched to years), business by barangay, employee counts, ownership type, the 2026 Q2 report and PSA small-area poverty estimates not done (PSA blocked). The legacy data/competitive-index.json is deprecated.
- [8] Services: only 12 services read directly from the 2022 Citizen's Charter are in services.json (other services are carry-over); the newer per-office charters at fdpp.marikina.gov.ph/citizen-charter were not downloaded or compared; the service category pages (categoriesContent.ts) and service detail pages (serviceDetailsContent.ts) are generic template text, not charter-based, and were left untouched — needs a content pass.
- [9] No private hospitals or DOH NHFR facilities (nhfr.doh.gov.ph 403); the hotline page lists only the City Health Office, Amang Rodriguez Hospital line and 16 barangay health centers from the city page.
- [10] Whole phase blocked: DPWH site returns an empty stub to the tools used. A search result suggests the Metro Manila 1st District Engineering Office (Rosario, Pasig) covers Marikina (not verified); no projects collected; city-funded infrastructure from FDP bid results blocked with Phase 6 — 👤 FOI-6 drafted. The budget page keeps a ComingSoon.
- [11] Whole phase not done: Marikina River alarm thresholds (only news reports, conflicting 15/16/17/18 m figures were seen, not published), per-barangay hazard levels (MGB/NOAH/PHIVOLCS blocked or web-map only), evacuation centers, solid-waste programs — 👤 FOI-7 drafted.
- [12] Whole phase not done: DepEd school list, CHED HEI list (403), DOH NHFR (403), city public markets/libraries/sports facilities. School phone numbers are on the city contact page but were not turned into a dataset.
- [13] Solano leftovers remain only in the legacy static site at the repo root (index.html, assets/js, package.json, docs/*, etc.) and in attribution text in the React app (FAQ, footer, react-app/README.md). Deciding whether to delete the legacy static site is for the maintainer. The RA 12326 / BSKE date and pending Supreme Court challenge were not rechecked (comelec-ra12326 still ❔).
- [14] Registry: last-checked dates and statuses are set, but a per-source update cadence column was not added (cadences are in docs/data/README.md); three entries are still ❔.
