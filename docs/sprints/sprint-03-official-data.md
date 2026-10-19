# Sprint 03: Retry Blocked Sources with Firecrawl, Fill Sprint 01 Gaps

**Goal:** Retry every source that Sprint 01 marked ❌ or ⚠️ using the Firecrawl connector, then fill the remaining Sprint 01 data gaps in priority order.

**Started:** 2026-10-19
**Branch:** `claude/zealous-wescoff-cd09d3`
**Companion docs:** [Data conventions](../data/README.md) · [Source registry](../data/SOURCES.md) · [Sprint 01](sprint-01-official-data.md) · [Sprint 01 report](sprint-01-report.md)

---

## How to work this sprint

1. Phase 0 (source retry) comes first because it decides what the later phases can do. Phases 1–6 follow in priority order; each ends with a commit.
2. Tick a box only when its output exists in the repo **and** has a source recorded in the registry. Otherwise leave it unticked and add a line under **Blockers & carry-over**.
3. Use `firecrawl_scrape` with `maxAge: 0` (`formats: ["markdown"]` or `["links"]`, `parsers: ["pdf"]` for PDFs) and `firecrawl_search` to find documents.
4. **Do not bypass Cloudflare or any bot check.** If `psa.gov.ph` is still blocked, leave it for the maintainer.
5. OCR'd numbers must reconcile against row and column totals before publishing. If a value can't be read reliably, publish `null` with a note. Never guess.
6. Tier 3 sources are leads only. No personal phone numbers, emails, addresses or staff names.
7. Nothing is sent, submitted or published outside the repo. New FOI requests are drafted in `docs/data/foi-drafts.md`.
8. No new npm dependencies. Run `npm run lint` and `npm run build` in `react-app/` before each data commit.
9. `react-app/src/data/services.json` is stored with CRLF. Stage it with `git -c core.autocrlf=false add`.

---

## Phase 0: Retry blocked sources

For each source, record the new status and a last-checked date in [SOURCES.md](../data/SOURCES.md).

- [ ] `coa-aar` (coa.gov.ph) — Marikina Annual Audit Reports
- [ ] `blgf-sre` (blgf.gov.ph) — SRE / LGU fiscal data
- [ ] `doh-nhfr` (nhfr.doh.gov.ph) — health facilities
- [ ] `ched-hei` (ched.gov.ph) — HEI directory
- [ ] `dpwh-projects` (dpwh.gov.ph) — projects, district engineering office
- [ ] `comelec-2025`, `comelec-bske-2023`, `comelec-ra12326` (comelec.gov.ph)
- [ ] `psa-openstat` (openstat.psa.gov.ph) and `data-gov-ph`
- [ ] `psa-psgc`, `psa-popcen-2024`, `psa-sae` (psa.gov.ph) — one attempt only; if blocked, leave for the maintainer
- [ ] `mgb-geohazard`, `noah`, `phivolcs-hazardhunter`, `deped-schools`, `dilg-sglg`, `dilg-ncr`, `philgeps`, `foi`
- [ ] `fb-barangays`, `fdp-bids` and other ⚠️/❔ sources (note if a login wall blocks them)

## Phase 1: Verify elected officials (priority a)

**Output:** corrections to `officials.json` and `barangays.json`

- [ ] Councilors (16) checked against COMELEC or another Tier 1/2 source
- [ ] Ex-officio members (Liga ng mga Barangay president, SK Federation president)
- [ ] Barangay Kagawads (7 each) and SK Chairpersons for all 16 barangays
- [ ] Punong Barangay names checked
- [ ] Discrepancy log updated for any conflict

## Phase 2: RA 12326 and the Supreme Court challenge (priority b)

- [ ] Confirm the text and date of RA 12326 and the BSKE date (2028-11-13)
- [ ] Current status of the Supreme Court challenge, with an as-of date
- [ ] Update the barangay meta notes and `comelec-ra12326` in the registry

## Phase 3: DPWH projects (priority c)

**Output:** `react-app/src/data/marikina/dpwh-projects.json`

- [ ] District engineering office covering Marikina, confirmed
- [ ] Projects located in Marikina (name, location, cost, contractor, status, years)
- [ ] Replace the DPWH `ComingSoon` in `react-app/src/app/budget/page.tsx`

## Phase 4: Disaster risk (priority d)

**Output:** `react-app/src/data/marikina/drrm.json`

- [ ] Official Marikina River alarm thresholds and where to see live readings
- [ ] Evacuation centers
- [ ] Hazard levels per barangay (flood, landslide, fault), with the map source cited
- [ ] A DRRM section on a page

## Phase 5: Schools and health facilities (priority e)

**Output:** `react-app/src/data/marikina/facilities.json`

- [ ] Public schools (DepEd)
- [ ] Higher education (CHED)
- [ ] Health facilities (DOH NHFR)
- [ ] A facilities page or section

## Phase 6: Citizen's Charters (priority f)

**Output:** extended `react-app/src/data/services.json`

- [ ] Per-office charters downloaded from `fdpp.marikina.gov.ph/citizen-charter` and hashed in the registry
- [ ] Services extended: office, requirements, fees, processing time, charter edition
- [ ] `services.json` staged with `git -c core.autocrlf=false add`

## Phase 7: Wire into the site

- [ ] Grep `react-app/src` for `ComingSoon`; each remaining use is gone or has a blocker below
- [ ] New data shown with source lines and "as of" dates
- [ ] `npm run lint` and `npm run build` pass; changed pages checked in the browser

## Phase 8: Close-out

- [ ] [SOURCES.md](../data/SOURCES.md) statuses and last-checked dates complete
- [ ] New FOI drafts (if any) in `docs/data/foi-drafts.md`
- [ ] `docs/sprints/sprint-03-report.md` written
- [ ] Push branch, open PR to `main`, CI green (do not merge)

---

## Definition of done

Every checklist item is ticked or has a written blocker, the sprint-03 report exists, CI is green, and the PR is open with a summary of what was published, what was verified and what is still blocked.

## Blockers & carry-over

<!-- Format: - [phase] item — reason — what's needed (👤 if maintainer action) -->
