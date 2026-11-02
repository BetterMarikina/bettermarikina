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
- [ ] **V5.** Social services: OSCA (senior ID, booklet, birthday subsidy), CSWDO (crisis assistance, solo parent), LRPESO (employment facilitation).
- [ ] **V6.** Assessors and Building Official: tax declaration services, building permit.
- [ ] **V7.** Full detail pages (`serviceDetailsContent.ts`) for the 10 most requested: birth registration, marriage license, death registration, civil registry certified copies, real property tax, cedula, business renewal, health certificate, sanitary permit, senior citizen ID. Make sure the homepage "Popular" links still resolve.

### Health facilities (Sprint 04 §3)
- [ ] **H1.** Data: fill `healthFacilities` in `facilities.json` and update `FacilitiesData` in `types/index.ts`. Hospitals: the 10 PhilHealth-accredited ones (`data-raw/health/philhealth-HOSP_093026.pdf`; read name, level, address from the PDF pages, since the text columns are offset). Also add barangay health centers (`data-raw/health/marikina-primary-care.csv`) and dialysis clinics (PhilHealth FDC PDF). Fields: name, type, level (hospitals), ownership, address, barangay if the address says, source id. Optional: lat/lon from `marikina-doh-map-facilities.csv` where the name matches.
- [ ] **H2.** Page: a health facilities page (hospitals first, then health centers, then dialysis), with `SourceNote` like the schools page. Link it from the footer, the contact page's medical section and `sitemap.ts`.

### Flood and river (Sprint 04 §2)
- [ ] **F1.** Thresholds: fill `riverAlarmLevels` in `drrm.json` with the PAGASA station levels (Sto. Niño MMDA, Tumana Bridge, Nangka, San Mateo-1, Montalban), labeled as **PAGASA station levels, not the city's alarm levels**. Mention discrepancy #15 in the meta notes. Update `DrrmData`. Show them as a table on `/disaster-risk`.
- [ ] **F2.** Live river level: add `app/api/river/route.ts`, following the `api/weather/route.ts` pattern (timeout, type guards, typed response in `types/index.ts`).
  - Upstream: POST `https://pasig-marikina-tullahanffws.pagasa.dost.gov.ph/water/table_list.do`, form body `ymdhm=YYYYMMDDHHmm` in Asia/Manila time, rounded down to 10 minutes. If the latest slot returns nothing, try up to 3 earlier slots.
  - Caching: Next's fetch cache does not cache POST, so wrap the upstream call in `unstable_cache` with `revalidate: 600`. The server calls PAGASA at most once every 10 minutes no matter how many visitors there are.
  - Return only the Marikina stations from F1. Each one needs its level as a number, a `flagged` boolean when PAGASA marks the value with `(*)`, its thresholds, the reading time, and `wl1h` for the trend.
  - Widget on `/disaster-risk`: current level, status (normal / alert / alarm / critical), the reading time, a "Source: PAGASA" link, and a fallback to the PAGASA link when the API fails. Never show a flagged reading without saying so.
- [ ] **F3.** Advisories: add links on `/disaster-risk` to Manila Water service advisories and the Meralco maintenance schedule (no scraping), plus Rescue 161, already in the data.

### Barangays (Sprint 04 §4), stretch
- [ ] **B1.** On `/barangays`, show each barangay's health center (from H1) and link to the health facilities page. Leave hall address as "not yet published".

### Sprint 03 leftovers
- [ ] **L1.** Officials: check councilors (16), ex-officio members, Punong Barangay names against COMELEC 2025/2023 BSKE or another Tier 1/2 source. Record the as-of date. Kagawads and SK chairs only if a Tier 1/2 list exists; otherwise BLOCKED.
- [ ] **L2.** DPWH: record the district engineering office covering Marikina and fill Marikina projects from the BetterGov.PH Budget API (2027 NEP vs HB 10858; label as budgeted, not spent). Replace the DPWH `ComingSoon` in `budget/page.tsx`.
- [ ] **L3.** DRRM: evacuation centers and per-barangay hazard levels (flood, landslide, fault) with the map source cited, on `/disaster-risk`.
- [ ] **L4.** Higher education from CHED (institutions in Marikina), on the education section.
- [ ] **L5.** Housekeeping: tick Sprint 01/03 boxes whose output already exists in the repo (cite the file), leave the rest unticked.

### Wrap-up
- [ ] **W1.** Update SOURCES.md (`Status` and `Last checked` for every source used), the README status line, and write the report below.

## Report

*(Fill in at W1: what shipped with commit hashes, what's blocked and why, and what needs a human: FOI-7 and FOI-9, PAGASA's okay on the feed, and the hospital details that couldn't be confirmed.)*
