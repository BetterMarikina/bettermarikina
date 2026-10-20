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

- [x] `coa-aar` (coa.gov.ph) — Marikina Annual Audit Reports — ❌ still down (Cloudflare 522 origin timeout)
- [x] `blgf-sre` (blgf.gov.ph) — SRE / LGU fiscal data — ⚠️ homepage loads; no Marikina SRE page found
- [x] `doh-nhfr` (nhfr.doh.gov.ph) — health facilities — ❌ still blocked
- [x] `ched-hei` (ched.gov.ph) — HEI directory — ❌ still blocked
- [x] `dpwh-projects` (dpwh.gov.ph) — projects, district engineering office — ❌ pages do not load; search excerpts confirm the Metro Manila 1st DEO
- [x] `comelec-2025`, `comelec-bske-2023`, `comelec-ra12326` (comelec.gov.ph) — ⚠️ official 2025 results site loads but local results are not readable; RA 12326 ✅ from SC and news
- [x] `psa-openstat` (openstat.psa.gov.ph) and `data-gov-ph` — both load (⚠️), no Marikina tables seen
- [x] `psa-psgc`, `psa-popcen-2024`, `psa-sae` (psa.gov.ph) — one attempt only; if blocked, leave for the maintainer — **PSGC and POPCEN now ✅** (the barangay table is at /classification/psgc/barangays/1380700000); SAE not retried
- [x] `mgb-geohazard`, `noah`, `phivolcs-hazardhunter`, `deped-schools`, `dilg-sglg`, `dilg-ncr`, `philgeps`, `foi` — deped-schools ✅ (nid.deped.gov.ph); dilg-ncr ❌ (proxy tunnel error); foi ⚠️ (503 maintenance); mgb, noah, hazardhunter, dilg-sglg and philgeps not retried (see blockers)
- [x] `fb-barangays`, `fdp-bids` and other ⚠️/❔ sources (note if a login wall blocks them) — not retried: Facebook pages sit behind a login wall and were not attempted

## Phase 1: Verify elected officials (priority a)

**Output:** corrections to `officials.json` and `barangays.json`

- [ ] Councilors (16) checked against COMELEC or another Tier 1/2 source
- [ ] Ex-officio members (Liga ng mga Barangay president, SK Federation president)
- [ ] Barangay Kagawads (7 each) and SK Chairpersons for all 16 barangays
- [ ] Punong Barangay names checked
- [x] Discrepancy log updated for any conflict — no conflicts found in names; #14 added for river alarm levels

## Phase 2: RA 12326 and the Supreme Court challenge (priority b)

- [x] Confirm the text and date of RA 12326 and the BSKE date (2028-11-13)
- [x] Current status of the Supreme Court challenge, with an as-of date — as of 2026-10-19 two petitions pending, no TRO
- [x] Update the barangay meta notes and `comelec-ra12326` in the registry

## Phase 3: DPWH projects (priority c)

**Output:** `react-app/src/data/marikina/dpwh-projects.json`

- [x] District engineering office covering Marikina, confirmed — Metro Manila 1st DEO, from DPWH procurement notices seen in search excerpts
- [ ] Projects located in Marikina (name, location, cost, contractor, status, years)
- [ ] Replace the DPWH `ComingSoon` in `react-app/src/app/budget/page.tsx`

## Phase 4: Disaster risk (priority d)

**Output:** `react-app/src/data/marikina/drrm.json`

- [ ] Official Marikina River alarm thresholds and where to see live readings
- [ ] Evacuation centers
- [ ] Hazard levels per barangay (flood, landslide, fault), with the map source cited
- [x] A DRRM section on a page — `/disaster-risk`

## Phase 5: Schools and health facilities (priority e)

**Output:** `react-app/src/data/marikina/facilities.json`

- [x] Public schools (DepEd) — 33 schools, `nid.deped.gov.ph`
- [ ] Higher education (CHED)
- [ ] Health facilities (DOH NHFR)
- [x] A facilities page or section — `/schools`

## Phase 6: Citizen's Charters (priority f)

**Output:** extended `react-app/src/data/services.json`

- [x] Per-office charters downloaded from `fdpp.marikina.gov.ph/citizen-charter` and hashed in the registry — 40 PDFs
- [x] Services index extended: office, charter edition, PDF link and external service titles (`charterIndex` in services.json; 25 of 40 offices have a clean title list)
- [x] `services.json` staged with `git -c core.autocrlf=false add`

## Phase 7: Wire into the site

- [x] Grep `react-app/src` for `ComingSoon`; each remaining use is gone or has a blocker below — remaining uses: budget page (2) and disaster-risk page (2), all with blockers
- [x] New data shown with source lines and "as of" dates
- [x] `npm run lint` and `npm run build` pass; changed pages checked in the browser — `/schools`, `/disaster-risk` and `/services` were checked in the browser pane; `/barangays` and `/government` only through the build

## Phase 8: Close-out

- [x] [SOURCES.md](../data/SOURCES.md) statuses and last-checked dates complete
- [x] New FOI drafts (if any) in `docs/data/foi-drafts.md` — none needed; FOI-1, 2, 5, 6 and 7 still cover the open gaps
- [x] `docs/sprints/sprint-03-report.md` written
- [ ] Push branch, open PR to `main`, CI green (do not merge)

---

## Definition of done

Every checklist item is ticked or has a written blocker, the sprint-03 report exists, CI is green, and the PR is open with a summary of what was published, what was verified and what is still blocked.

## Blockers & carry-over

<!-- Format: - [phase] item — reason — what's needed (👤 if maintainer action) -->

- [0] `mgb-geohazard`, `noah`, `phivolcs-hazardhunter`, `dilg-sglg`, `philgeps`, `psa-sae`, `fb-barangays` were not retried: the hazard maps are web maps with no table to read, and the others needed specific publication URLs or a Facebook login. Left for a later sprint.
- [0, 3] COA (522), DOH NHFR, CHED and DPWH remain unreachable for Firecrawl. These were not bypassed. Retry later; FOI-6 (DPWH) is still the fallback.
- [1] Councilors are cross-checked only against Rappler's copy of the COMELEC Media Server results (Tier 3); the official COMELEC results site loads but its local results are behind a script-driven menu that could not be read. Names on the ballot are nicknames. 👤 The maintainer can open https://2025electionresults.comelec.gov.ph/ in a normal browser and confirm the Marikina councilors.
- [1] Ex-officio members (Liga ng mga Barangay and SK Federation presidents), Kagawads (7 per barangay), SK chairs and the Punong Barangay check: no official source could be read (DILG sites fail with a proxy error; COMELEC BSKE 2023 results not found). Still null. 👤 FOI-1, FOI-2.
- [3] DPWH projects: no project list could be read; budget page keeps its DPWH ComingSoon with updated text.
- [4] River alarm thresholds, evacuation centers and hazard level per barangay: no official source found (news disagrees, see discrepancy #14). Still null. 👤 FOI-7.
- [5] Health facilities (NHFR blocked), CHED higher-education list (blocked), private schools and the barangay of each public school are not in `facilities.json`. Marikina Polytechnic College is not verified.
- [6] Fees, requirements and processing times from the charters are not transcribed: the PDF tables do not extract reliably. 15 of 40 offices have no clean external service list. The 2022 charter rows in services.json are unchanged and still the only fee data. A reviewer can transcribe the highest-use offices from the PDFs in `data-raw/charters/` (hashes in SOURCES.md).
- [7] The budget page still shows the Sprint 01 SRE ComingSoon here; Sprint 02 (PR #2) replaces it, so expect a small merge conflict in `react-app/src/app/budget/page.tsx`.
