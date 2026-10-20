# Sprint 03 report: Firecrawl retry and Sprint 01 gaps

**Branch:** `claude/zealous-wescoff-cd09d3` · **Date:** 2026-10-19 · **Status:** partly done. The plan is in [sprint-03-official-data.md](sprint-03-official-data.md); every unticked item has a blocker line there.

## What was published

| Change | Source | Tier |
|---|---|---|
| PSGC codes, urban/rural flag and 2024 POPCEN for all 16 barangays confirmed; city income class **1st** and 2024 total **471,323** confirmed | PSA PSGC page (now reachable) | 1 |
| `/schools`: the 33 public schools of the DepEd Marikina division with school IDs; PLMar | DepEd National Inventory Dashboard, city charter | 2, 1 |
| `/disaster-risk`: PAGASA basin bulletin link, Rescue 161 services, hazard-map links | PAGASA, 2024 DRRMO charter, NOAH, HazardHunterPH | 1, 2 |
| `/services`: charter index for the 40 per-office 2024 charters (office, edition, PDF link, service titles) | `fdpp.marikina.gov.ph/citizen-charter` | 1 |
| RA 12326 and Supreme Court status as of 2026-10-19 in the barangay notes | SC docket PDFs, Inquirer, Rappler, VERA Files | 1-3 |

## What was verified

- **Barangay data (PSA).** The 16 barangay counts sum to exactly 471,323. The PSGC codes and 2024 counts match the earlier citypopulation.de values, so nothing changed; the labels moved from "secondary" to PSA.
- **Councilors.** The 16 councilors on the city's contact page are the top 8 vote-getters in each district in the COMELEC Media Server results as reproduced by Rappler (100% of precincts). Mayor, Vice Mayor and both representatives match too. This is **not** a check against COMELEC's certified results (see blockers).
- **RA 12326.** Signed 2026-09-24; the next BSKE is 2028-11-13. Two Supreme Court petitions are pending (G.R. No. E-08557, filed 2026-09-28; a youth-groups petition, filed 2026-10-05). No TRO has been issued and COMELEC treats the law as in effect.

## Source retries (Firecrawl, `maxAge: 0`)

| Source | Result |
|---|---|
| psa.gov.ph PSGC | ✅ now loads; data read |
| openstat.psa.gov.ph, data.gov.ph, blgf.gov.ph, comelec.gov.ph | ⚠️ load, but no Marikina tables found from the home pages |
| 2025electionresults.comelec.gov.ph | ⚠️ loads, local results not reachable without driving a script-based menu |
| nid.deped.gov.ph | ✅ new source for schools |
| pagasa.dost.gov.ph flood page | ✅ |
| coa.gov.ph | ❌ Cloudflare 522 (origin down) |
| nhfr.doh.gov.ph, ched.gov.ph, dpwh.gov.ph | ❌ all engines fail |
| DILG sites | ❌ proxy tunnel error |
| foi.gov.ph | ⚠️ 503 maintenance |

Nothing was bypassed. Details and dates are in [SOURCES.md](../data/SOURCES.md).

## Still blocked

1. Ex-officio council members, 7 Kagawads and the SK Chair per barangay (no official source readable). 👤 FOI-1, FOI-2.
2. Official COMELEC check of the councilors. 👤 Open the COMELEC 2025 results site in a normal browser.
3. DPWH project list (site unreachable; the Metro Manila 1st DEO covers Marikina per DPWH notices). 👤 FOI-6.
4. River alarm thresholds, evacuation centers and hazard levels per barangay: no official source; news reports disagree (discrepancy #14). 👤 FOI-7.
5. Health facilities and CHED higher-education list (sources blocked).
6. Charter fees, requirements and processing times: PDF tables do not extract reliably, so only titles are indexed.
7. COA audit reports, BLGF SRE (Phase 6 cross-checks) and SGLG history.

## For the reviewer

- `react-app/src/app/budget/page.tsx` still has the Sprint 01 SRE block here; Sprint 02 (PR #2) changes it, so expect a small conflict there.
- `services.json` is CRLF and was staged with `core.autocrlf=false`.
- Raw charters are in `data-raw/charters/` (gitignored); their SHA-256 values are in SOURCES.md.
