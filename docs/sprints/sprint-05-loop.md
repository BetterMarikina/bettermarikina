# Sprint 05 loop: build what Sprint 04 found

You are running in a loop. **Each pass does exactly one unticked item below, ships it to production, ticks it, and stops.** This file is the plan and the progress record. Keep it short; don't paste findings here beyond one line per item.

Background is in [sprint-04-research.md](sprint-04-research.md). Read only the section for the item you're on.

## Every pass

1. `git switch main && git pull`. Run `gh run list --branch main --limit 1`. If the last run failed, fixing it is this pass's item.
2. Take the first unticked, unblocked item. Do only that.
3. Verify: in `react-app/`, `npm run lint` and `npm run build` must pass. If you changed a page, start the dev server (preview `bettermarikina-dev` from `.claude/launch.json`), open the page, and check it renders with no console errors.
4. Commit straight to `main` with a conventional message (`feat(health): ...`, `fix(drrm): ...`). No AI attribution or co-author lines. Push. Vercel deploys `main` to production.
5. Tick the item here with the commit hash, in the same commit or a follow-up `docs(sprint-05): ...` commit.
6. If you can't finish an item, don't push half of it. Add `BLOCKED: <reason>` under the item and move on next pass.
7. When every item is ticked or blocked, write the report section at the bottom, push, and end the loop.

## Rules

- **Data:** every published value must be checked against the source page (charter PDF or text, PhilHealth PDF, PAGASA). If you can't confirm a value, publish `null` with a note. Never guess. Record new sources and raw files in [SOURCES.md](../data/SOURCES.md).
- **Privacy:** no staff names, personal phone numbers or emails, even when the source has them. Office landlines and office emails are fine.
- **Code:** match the surrounding code. No `any`; use type guards like `api/weather/route.ts`. No inline styles; use the existing CSS classes. No new npm dependencies.
- `react-app/src/data/services.json` is CRLF. Stage it with `git -c core.autocrlf=false add`.
- Raw files are in `data-raw/` (gitignored, already on this machine). Charter text: `data-raw/charters/txt/<office>.txt`. Draft extraction: `data-raw/charters/services-extracted.json` (use it to find a service, then confirm in the text or PDF, which you can read page by page).
- Save tokens: grep for line numbers and read only those ranges. Don't read whole charters or whole data files. `rtk` isn't installed; use plain commands. For Next.js 14 APIs you're unsure of, check the docs with Context7 instead of guessing.

## Items

### Setup
- [x] **S1.** Merge PR #5 (`gh pr merge 5 --repo BetterMarikina/bettermarikina --merge --delete-branch`), then switch to `main` and pull. (313781b)

### Services: requirements, fees, processing time (Sprint 04 §1)
For each service: requirements list, fee(s) with what each is for, total processing time, office and window, who may avail. Add it to `services.json` `services` (same shape as the existing 12, so search picks it up). First check how `/services/[category]` and search use those records, so new ones actually show.
- [x] **V1.** Civil Registry: birth (on-time, late), marriage license, death (on-time, late), certified true copies, RA 9048 / RA 10172 petitions. (7ec51de)
- [x] **V2.** Treasury: real property tax, RPT clearance, business tax, transfer tax, community tax certificate (cedula), professional tax. (1c3a6f3)
- [x] **V3.** BPLO by hand (the extraction is unreliable here): new registration, renewal, retirement, certification, certified true copy. Skip if the existing records already match the 2026 charter; just fix differences. (e1df5ce)
- [x] **V4.** CHO: health certificate, sanitary permit, burial/cremation/exhumation permits, anti-rabies vaccination, primary care and lab services. (3b2dedf)
- [x] **V5.** Social services: OSCA (senior ID, booklet, birthday subsidy), CSWDO (crisis assistance, solo parent), LRPESO (employment facilitation). (83524f4)
- [x] **V6.** Assessors and Building Official: tax declaration services, building permit. (ac8db04)
- [x] **V7.** Full detail pages (`serviceDetailsContent.ts`) for the 10 most requested: birth registration, marriage license, death registration, civil registry certified copies, real property tax, cedula, business renewal, health certificate, sanitary permit, senior citizen ID. Make sure the homepage "Popular" links still resolve. (890c87e)

### Health facilities (Sprint 04 §3)
- [x] **H1.** Data: fill `healthFacilities` in `facilities.json` and update `FacilitiesData` in `types/index.ts`. Hospitals: the 10 PhilHealth-accredited ones (`data-raw/health/philhealth-HOSP_093026.pdf`; read name, level, address from the PDF pages, since the text columns are offset). Also add barangay health centers (`data-raw/health/marikina-primary-care.csv`) and dialysis clinics (PhilHealth FDC PDF). Fields: name, type, level (hospitals), ownership, address, barangay if the address says, source id. Optional: lat/lon from `marikina-doh-map-facilities.csv` where the name matches. (ed50416)
- [x] **H2.** Page: a health facilities page (hospitals first, then health centers, then dialysis), with `SourceNote` like the schools page. Link it from the footer, the contact page's medical section and `sitemap.ts`. (44d81cc)

### Flood and river (Sprint 04 §2)
- [x] **F1.** Thresholds: fill `riverAlarmLevels` in `drrm.json` with the PAGASA station levels (Sto. Niño MMDA, Tumana Bridge, Nangka, San Mateo-1, Montalban), labeled as **PAGASA station levels, not the city's alarm levels**. Mention discrepancy #15 in the meta notes. Update `DrrmData`. Show them as a table on `/disaster-risk`. (f96e2a3)
- [x] **F2.** Live river level: add `app/api/river/route.ts`, following the `api/weather/route.ts` pattern (timeout, type guards, typed response in `types/index.ts`). (a199af8)
  - Upstream: POST `https://pasig-marikina-tullahanffws.pagasa.dost.gov.ph/water/table_list.do`, form body `ymdhm=YYYYMMDDHHmm` in Asia/Manila time, rounded down to 10 minutes. If the latest slot returns nothing, try up to 3 earlier slots.
  - Caching: Next's fetch cache does not cache POST, so wrap the upstream call in `unstable_cache` with `revalidate: 600`. The server calls PAGASA at most once every 10 minutes no matter how many visitors there are.
  - Return only the Marikina stations from F1. Each one needs its level as a number, a `flagged` boolean when PAGASA marks the value with `(*)`, its thresholds, the reading time, and `wl1h` for the trend.
  - Widget on `/disaster-risk`: current level, status (normal / alert / alarm / critical), the reading time, a "Source: PAGASA" link, and a fallback to the PAGASA link when the API fails. Never show a flagged reading without saying so.
- [x] **F3.** Advisories: add links on `/disaster-risk` to Manila Water service advisories and the Meralco maintenance schedule (no scraping), plus Rescue 161, already in the data. (422f541)

### Barangays (Sprint 04 §4), stretch
- [x] **B1.** On `/barangays`, show each barangay's health center (from H1) and link to the health facilities page. Leave hall address as "not yet published". (c558eb0)

### Sprint 03 leftovers
- [ ] **L1.** Officials: check councilors (16), ex-officio members, Punong Barangay names against COMELEC 2025/2023 BSKE or another Tier 1/2 source. Record the as-of date. Kagawads and SK chairs only if a Tier 1/2 list exists; otherwise BLOCKED.
  BLOCKED (2026-11-02): no COMELEC certified results for Marikina councilors, ex-officio members or the 2023 BSKE are published online (search found only proclamation news and Rappler's unofficial transparency-server tally, which already matches the Tier 1 city contact page). Needs a COMELEC Marikina certified copy (FOI) or the SP's own roster.
- [x] **L2.** DPWH: record the district engineering office covering Marikina and fill Marikina projects from the BetterGov.PH Budget API (2027 NEP vs HB 10858; label as budgeted, not spent). Replace the DPWH `ComingSoon` in `budget/page.tsx`. (1caddf8)
- [ ] **L3.** DRRM: evacuation centers and per-barangay hazard levels (flood, landslide, fault) with the map source cited, on `/disaster-risk`.
  BLOCKED (2026-11-02): no current official list. Search found only Tier 3 or dated leads: ProjectLIGTAS (third-party), an Inquirer list (2012), a 2004 City Disaster Coordinating Council PDF (33 centers) and news counts (33 in Nov 2025). Per-barangay hazard levels exist only as web maps (NOAH, HazardHunterPH), already linked. Needs FOI-7 answered (centers with address and barangay served).
- [x] **L4.** Higher education from CHED (institutions in Marikina), on the education section. (ff6bbb3)
- [x] **L5.** Housekeeping: tick Sprint 01/03 boxes whose output already exists in the repo (cite the file), leave the rest unticked. (b54dd6d)

### Wrap-up
- [ ] **W1.** Update SOURCES.md (`Status` and `Last checked` for every source used), the README status line, and write the report below.

## Report

Loop ran 2026-11-02. 20 items: 18 shipped, 2 blocked. Every pass passed `npm run lint` and `npm run build`; pages were checked over HTTP against `next start` (the browser tool was not connected, so client-side console errors were not checked).

**Shipped**

- Services (V1-V7): 30 new records from the 2024 charters (BPLO 2026) and 7 existing ones updated, 42 in total, each with a charter page ref. Civil Registry `7ec51de`, Treasury `1c3a6f3`, BPLO `e1df5ce`, CHO `3b2dedf`, OSCA/CSWDO/PESO `83524f4`, Assessor/Building Official `ac8db04`. Category cards now show fees and times instead of "See Citizen's Charter". Ten detail pages rewritten or added from the charters, with office numbers from `directory.json` `890c87e`; the old birth/marriage/death pages had wrong facts (for example, death registration "within 48 hours").
- Health (H1-H2): 10 PhilHealth hospitals, 17 DOH-licensed health centers and 8 dialysis clinics in `facilities.json` `ed50416`; `/health-facilities` page linked from the footer, contact page and sitemap `44d81cc`.
- Flood (F1-F3): PAGASA station levels on `/disaster-risk`, labeled as not the city's alarm levels `f96e2a3`; live levels via `/api/river` and a widget `a199af8`; Manila Water and Meralco advisory links `422f541`.
- Barangays (B1): health center per barangay on `/barangays` `c558eb0`. Tañong has none on the DOH list.
- Sprint 03 leftovers: FY2027 DPWH lines naming Marikina City, NEP vs House Bill 10858, on `/budget` with the API's disclaimers verbatim (L2) `1caddf8`; four colleges from the UniFAST/CHED list (L4) `ff6bbb3`; 13 Sprint 01/03 boxes ticked where the output exists (L5) `b54dd6d`.
- Setup: PR #5 merged `313781b`.

**Blocked**

- L1 officials: no COMELEC certified results for councilors, ex-officio members or the 2023 BSKE online. Councilors stay sourced from the city contact page (Tier 1). Needs FOI-1 / FOI-2.
- L3 evacuation centers and per-barangay hazard levels: only Tier 3 or dated lists exist. Needs FOI-7.

**Needs a human**

- FOI-7 (evacuation centers and hazard by barangay, CDRRMO) and FOI-1 / FOI-2 (barangay officials, certified election results). FOI-9 (garbage schedule) was not in this sprint and is still unsent.
- PAGASA's okay on the FFWS feed. `/api/river` calls it at most every 10 minutes server-side and links back, but the endpoint is undocumented. The route also bundles GlobalSign's intermediate certificate because PAGASA's server leaves it out of the chain (`src/lib/pagasa-ca.ts`, expires 2029-06-23); remove it if PAGASA fixes the chain.
- Hospital details: hospital and dialysis phone numbers and emails were not published (some are mobiles or personal-looking addresses). Garcia General Hospital's address names both Marikina Heights and Concepcion. Marikina Doctors Hospital is on the DOH map but not on PhilHealth's list, so it was left out.
- Fees to check on the PDF page: CHO burial permit (public vs private columns read from a garbled table, p. 277) and the dental card's range (dentures PHP 500.00 not shown). Civil Registry on-time marriage registration was skipped because its fee labels are garbled.

**Debt noticed, not fixed**

- `react-app/src/app/sitemap-page/page.tsx:82` links to `/service-details/civil-registrar`, which does not exist.
- Service facts live in three places (`services.json`, `categoriesContent.ts`, `serviceDetailsContent.ts`), so a fee change means three edits.
- `react-app/src/app/budget/page.tsx` is over 200 lines; the schools and barangays pages still use inline styles from before this sprint.
