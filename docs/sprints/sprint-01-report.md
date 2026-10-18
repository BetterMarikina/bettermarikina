# Sprint 01 report: Official Data Foundation

**Branch:** `sprint-01/official-data` · **Date:** 2026-10-19 · **Status:** partly done. 39 of 86 checklist items are ticked. Phases 6, 10, 11 and 12 were not delivered, and several others are partial. Every gap has a line under "Blockers & carry-over" in [the sprint doc](sprint-01-official-data.md).

## What was published

All data is in `react-app/src/data/marikina/` with a `meta` block. Source IDs match [SOURCES.md](../data/SOURCES.md).

| File | What it holds | Sources |
|---|---|---|
| `city-profile.json` | Land area (2,314.37 ha), population 2010 to 2024, 2020 households, density, growth, legal basis (RA 8223, RA 9364, PD 824), history timeline | City Facts and Figures, Ecological Profile, lawphil RAs, PSA snippet (2024 total) |
| `barangays.json` | 16 barangays: district, 2020 population (Tier 1), 2010/2015/2024 population (secondary), land area, Punong Barangay, office phone, creation law for Fortune (RA 9431) and Tumana (RA 9432) | City documents, city contact page, lawphil, citypopulation.de (labeled secondary) |
| `officials.json` | Mayor, Vice Mayor, 2 representatives, 16 councilors (2025 to 2028) | City contact page; Wikipedia as cross-check |
| `ordinances.json`, `resolutions.json` | 149 ordinances (series 2000 to 2026, with gaps) and 1 resolution as listed on the Full Disclosure Portal, with PDF links and keyword topics | `fdp-ordinances` |
| `directory.json` | City hall, hotlines, health office and health centers, engineering, facilities, education offices, barangay halls | City contact page |
| `statistics.json` | Population, DTI CMCI 2015 to 2024 (rank and pillar scores), BPLO business by nature 2021 to 2025, footwear manufacturers 2011 to 2025 | BPLO reports, DTI CMCI portal |
| `../services.json` | 12 services read from the 2022 Citizen's Charter (office, requirements, fee basis, processing time, charter page) | 2022 Citizen's Charter |

Pages changed: home (history, leaders, news links), `/government`, new `/barangays`, `/legislative/ordinance-framework` (searchable list), `/legislative/resolution-framework`, `/statistics` (four charts using the existing chart.js), `/contact` (medical lines), `/news` (links to the city's channels). Each data page shows a source line with "as of" and expandable notes. Build and lint pass (lint shows only the warnings that were already there). No console errors on the checked pages, and no horizontal overflow at 375px.

## Things the maintainer should know

1. **The sprint's seed councilor list was out of date.** The city's own "Our City" page still shows the previous council. The city's contact page lists the current 16 councilors (Ces Reyes, Pat Sicat, Ginny Pioquinto, Jaren Feliciano, Ziffred Ancheta and others), and Wikipedia's 2025 results match it. We published the contact-page list. It has **not** been checked against COMELEC. See discrepancy #4.
2. **Land area is 2,314.37 ha.** The city's two documents say it is the official figure after the 2012/2013 BLM cadastral surveys, and the barangay areas sum to it.
3. **Cityhood:** RA 8223 was approved on 1996-11-06 (law text). The city's pages give both Dec 6 and Dec 8, 1996 for becoming a city, and COMELEC's plebiscite record was not found. The site shows the approval date and notes the conflict.
4. **psa.gov.ph is behind a Cloudflare bot check, even in the browser pane.** We did not bypass it. The 2024 total (471,323) is from a search snippet of the PSA page. Per-barangay 2010, 2015 and 2024 numbers and PSGC codes are labeled secondary (citypopulation.de). Their sums equal the official city totals and the 2020 column matches the city document.
5. **Most FDP finance PDFs are image scans with no text layer** and no OCR was available. They are downloaded and hashed but not transcribed, so Phase 6 is not delivered and the budget page keeps its ComingSoon with an honest explanation.
6. **Not published on purpose:** Marikina River alarm thresholds (only conflicting news reports), party split, personal mobile numbers (Fortune, Parang, Marikina Hotel), staff names printed in the charter.
7. **An error was caught and fixed during the work.** An early draft of `statistics.json` had a footwear series and employee counts that could not be read reliably from the PDFs. They were removed before commit; only values read from single-line chart labels (2011 to 2025) are kept.

## FOI drafts waiting for the maintainer

All are in [foi-drafts.md](../data/foi-drafts.md) and **none were sent**:

1. FOI-1 DILG-NCR: current barangay officials and vacancies
2. FOI-2 COMELEC Marikina: certified 2025 results
3. FOI-3 City Budget/Treasurer/CPDO: searchable copies of the FDP documents
4. FOI-4 City Council Secretary: index of ordinances and resolutions with dates, committees
5. FOI-5 HRMO: current department heads
6. FOI-6 DPWH Metro Manila 1st DEO: projects in Marikina
7. FOI-7 Marikina CDRRMO: evacuation centers and alarm levels
8. FOI-8 City Planning Office: text copies of the District I and II Roadmaps

## Other maintainer decisions

- The legacy static site at the repo root still loads Solano JSON from `data/`. The files are marked deprecated in `data/DEPRECATED.md`, not deleted. Decide whether to retire the static site.
- Recheck RA 12326 and the pending Supreme Court challenge before treating 2023 barangay officials as current. That was not rechecked in this sprint.

## Recommended Sprint 02

1. **OCR or spreadsheets for FDP finance documents** (Phase 6): the budget, SRE, indebtedness, SEF, LDRRMF and NTA reports, then COA and BLGF cross-checks.
2. **Confirm PSA numbers** by a person opening the PSA pages in a normal browser: PSGC codes, urban/rural, 2015 and 2024 barangay populations, income class.
3. **COMELEC and DILG checks** of councilors, Kagawads and SK Chairs, plus the ex-officio members and committees.
4. **Rewrite service category and service detail pages** from the Citizen's Charters (per-office PDFs on the FDP) so that they match `services.json`.
5. **DRRM and facilities** (Phases 11 and 12): river alarm levels from the city, hazard levels per barangay, evacuation centers, DepEd, CHED and DOH lists.
6. **DPWH projects** (Phase 10) once access or an FOI reply is available.
7. Decide whether to retire the legacy static site.
