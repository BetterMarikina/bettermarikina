# Sprint 04: Research for resident-facing features

**Goal:** List what residents need most, find where each piece of data lives, and scrape what can be scraped. **Nothing in this sprint goes on the site.** Raw files stay in `data-raw/` (gitignored); this doc is the inventory and the to-do list for the build sprints after it.

**Date:** 2026-10-21
**Status:** research done for topics 1-7; publishing not started.
**Companion docs:** [Data conventions](../data/README.md) · [Source registry](../data/SOURCES.md) · [FOI drafts](../data/foi-drafts.md) · [Sprint 03 report](sprint-03-report.md)

Same rules as Sprint 03: no Cloudflare or captcha bypass, Tier 3 sources are leads only, no staff names or personal contact details, nothing sent or submitted outside the repo.

---

## Priority order

| # | Topic | Why residents need it | Data status |
|---|---|---|---|
| 1 | Service requirements, fees, processing times | The main reason people visit: "what do I bring, how much, how long" | 🟡 Extracted from the 40 charters, needs human check |
| 2 | Flood and river status, evacuation centers | Marikina's biggest risk; the most likely "everyone uses it" feature | 🟡 Official thresholds and a live feed found; evacuation centers still missing |
| 3 | Hospitals and health facilities | "Where is the nearest hospital / health center" | 🟢 Official lists found (PhilHealth, DOH-NCR) |
| 4 | Barangay pages (hall, contacts, nearest services) | One page per barangay ties 2, 3 and 5 together | 🔴 Hall addresses still unknown |
| 5 | Garbage collection schedule | Weekly need for every household | 🔴 No official schedule published |
| 6 | Water, power and class-suspension advisories | Checked often, especially in typhoon season | 🟡 Water and power sources found; class suspensions only on Facebook |
| 7 | Social programs (senior, solo parent, PWD, jobs, scholarships) | Benefits people are entitled to but don't know about | 🟡 In the charters (topic 1) |
| 8 | Budget and projects | Transparency; lower day-to-day demand | Carried over from Sprint 03 blockers |

---

## 1. Service requirements, fees and processing times

**Source:** `fdp-charter`, the 40 per-office 2024 citizen's charters (BPLO 2026). Tier 1.
**Raw files:** `data-raw/charters/*.pdf`, text in `data-raw/charters/txt/`, extraction in `data-raw/charters/services-extracted.json` and `.csv`, script in `data-raw/charters/extract_charters.py`.

The charters have a text layer, so no OCR was needed. The script splits each charter at every "CHECKLIST OF REQUIREMENTS" heading and pulls the service title, office, classification, who may avail, the requirements block, peso amounts, fee words ("none", "based on assessment") and the TOTAL processing time. It skips the "person responsible" column, and drops titles that look like staff names.

**Result: 275 service blocks.**

| Field | Found | Missing |
|---|---|---|
| Title | 262 | 13 |
| Office / division | 186 | 89 |
| Who may avail | 234 | 41 |
| Fee (amount or "none"/"based on") | 261 | 14 |
| Total processing time | 115 | 160 |
| Peso amounts | 69 services | — |
| All fields found | 75 | — |

Offices with the most services: Treasury 26, CHO 24, Civil Registry 21, BPLO 17, CSWDO 14, OPSS 14, GAD 12, Personnel 11, GSO 10.

Known problems:

- **Total time** often sits on the line after "TOTAL" or in a wrapped column, so it's missed. Read it from the PDF page.
- **BPLO** splits each service into walk-in and online sub-blocks with tables between them; the automatic titles are unreliable. Do BPLO by hand (about 6 real services: new registration, renewal, retirement, certification, certified true copy, online).
- **Fees with several amounts** (e.g. Civil Registry: PHP 3,000.00 filing + PHP 500.00) list every amount found, without saying which is which. Check the step table.
- Some blocks are sub-cases of one service (Civil Registry "Marikina constituents / Non-Marikina residents" under marriage certificates). Merge these when reviewing.

**Next steps**

- [ ] Review and correct, in this order (most-searched first): Civil Registry (birth, marriage, death, CTCs, RA 9048/10172), Treasury (RPT, business tax, cedula), BPLO (by hand), CHO (health certificate, sanitary permit, burial permit), OSCA, CSWDO, Assessors, Building Official.
- [ ] For each reviewed service record: page number, requirements list, fee(s) with what they're for, total time, where to go. Drop the "person responsible" column.
- [ ] Cross-check fees against the Revenue Code (Ord. 085 s. 2015, cited by Treasury) where the charter says "based on".
- [ ] Only then move reviewed records into `services.json`.

---

## 2. Flood and river status, evacuation centers

### Official thresholds (new, Tier 1)

**Source:** PAGASA Pasig-Marikina-Tullahan Flood Forecasting and Warning System, https://pasig-marikina-tullahanffws.pagasa.dost.gov.ph/water/table.do. Snapshot at 2026-10-21 16:50 in `data-raw/drrm/pagasa-ffws-water-202610211650.json`.

Stations on or above the Marikina River (EL. m):

| Station | Alert | Alarm | Critical | Reading at 16:50 |
|---|---|---|---|---|
| Sto Niño (MMDA) | 15.00 | 16.00 | 17.00 | 12.63 |
| Sto Niño (PAGASA) | — | — | — | 12.16 |
| Tumana Bridge | 17.26 | 18.26 | 19.26 | 12.87 |
| Nangka | 16.50 | 17.10 | 17.70 | 15.76 |
| San Mateo-1 (upstream) | 18.00 | 19.00 | 20.00 | 14.13 |
| Montalban (upstream) | 22.40 | 23.00 | 23.60 | 22.14 |
| Rodriguez (upstream) | 28.80 | 29.80 | 30.70 | 27.38 |
| Burgos (upstream) | 27.40 | 27.90 | 28.40 | 27.23 |

`(*)` after a reading on PAGASA's page marks a value it flags (likely stale or not validated); keep the flag if this is ever shown.

Sto Niño's 15 / 16 m match the city's 1st and 2nd alarm as reported in the news. The 3rd alarm does not: news reports say 18 m, PAGASA's critical level is 17 m. Logged as discrepancy #15. The city's own alarm table is still unpublished.

### Live feed

The table page loads its data with a POST to `/water/table_list.do` (form field `ymdhm=YYYYMMDDHHmm`). It returns JSON for all 21 stations: `obsnm`, `wl`, `wl30m`, `wl1h`, `wl2h`, `alertwl`, `alarmwl`, `criticalwl`. Tested once, works. It is undocumented, so before building on it:

- [ ] Ask PAGASA (or check their terms) whether a public site may read it.
- [ ] If yes, read it server-side on a schedule (every 10 minutes at most) and cache; never from each visitor's browser.
- [ ] The same site has rainfall (`/rainfall/table.do`) and warning-post pages, not yet looked at.

### Evacuation centers

Still no named list. What exists:

- DSWD DROMIC reports give counts only: City of Marikina, 19 evacuation centers during Super Typhoon Uwan (Report #19, 2025-11-16). `data-raw/drrm/dromic-uwan-19.pdf`.
- News gives 33 (Daily Tribune, Nov 2025) and 36 (mayor via GMA). Named schools in news: Malanday ES, H. Bautista ES, Nangka ES, Bulelak Gym. Tier 3, leads only.
- An eFOI request for the same list exists (foi.gov.ph, "List of evacuation centers in Marikina City and Quezon province"); the portal is in maintenance (503), so its answer couldn't be read.

**Next steps**

- [ ] Re-open the existing eFOI request when the portal is back; if it was answered, use that.
- [ ] Otherwise send FOI-7 (now narrowed: evacuation centers with address and barangay served, plus the city's alarm levels).
- [ ] Most centers are public schools; `facilities.json` already has all 33 with DepEd IDs, so the list can be joined once it arrives.

---

## 3. Hospitals and health facilities

| Source | Tier | What it gave for Marikina | Raw file |
|---|---|---|---|
| PhilHealth accredited hospitals, as of 2026-09-30 | 1 | 10 hospitals | `data-raw/health/philhealth-HOSP_093026.pdf` (+ `.txt`) |
| PhilHealth accredited dialysis clinics, as of 2026-09-30 | 1 | about 8 | `philhealth-FDC_093026.pdf` |
| PhilHealth YAKAP (primary care) clinics, CY 2026 | 1 | about 20 lines | `philhealth-YAKAP.pdf` |
| DOH-NCR licensed primary care facilities (Google Sheet) | 1 | 17 (barangay health centers) | `marikina-primary-care.csv` |
| DOH-NCR licensed clinical laboratories | 1 | 31 | `marikina-clinical-labs.csv` |
| DOH-NCR licensed psychiatric care facilities | 1 | 3 | `marikina-psychiatric.csv` |
| DOH-NCR licensed ambulance providers | 1 | 1 (City Government of Marikina) | `marikina-ambulance.csv` |
| DOH-NCR facility map (Google My Maps, KML) | 1 | 4 hospitals, 15 birthing homes, 27 labs, 5 dental labs, with coordinates | `marikina-doh-map-facilities.csv` |

PhilHealth hospitals in Marikina: Amang Rodriguez Memorial Medical Center, Garcia General Hospital, Marikina St. Vincent General Hospital, Marikina Valley Medical Center, Noah Medical Center, P. Gonzales Memorial Hospital, SDS Medical Center, St. Anthony Medical Center of Marikina, St. Victoria Hospital, Villon-Tansinsin Hospital. The DOH map only has 4 of these (and Marikina Doctors Hospital, which is not on the PhilHealth list), so the map looks out of date.

The `marikina-*.csv` files keep only facility, address and ownership columns. The DOH sheets also have head of facility, owner, phone and email; those were left out.

**Next steps**

- [ ] Read each hospital's level, bed count and address from the PDF page by hand (the PDF's columns are offset in the text, so the extraction can't be trusted for these).
- [ ] Check Marikina Doctors Hospital's status (on the DOH map, not on PhilHealth).
- [ ] Join barangay health centers with the 16 already in `directory.json`.
- [ ] Still blocked, not bypassed: DOH HFSRB list page (scrape fails), NHFR, and the DOH-NCR hospital dashboard (Data Studio behind reCAPTCHA).

---

## 4. Barangay pages

Already have per barangay: PSGC, population, area, district, Punong Barangay, office landline. Missing: hall address and location, Kagawads and SK chair (Sprint 03 blockers, FOI-1).

**Next steps**

- [ ] Hall addresses: try the barangay hall entries on the DOH map and Google Maps as leads, then confirm with the barangay (FOI-1 or a call).
- [ ] Once topics 2 and 3 land, link each barangay to its evacuation centers, health center and nearest hospital.

---

## 5. Garbage collection

No official per-barangay schedule was found online.

- The city Ecological Profile (already in `data-raw/city/Ecological-Profile.pdf`) says collection covers all 16 barangays with thrice-weekly pickups. Confirm the page.
- Marikina PIO posts holiday schedule changes on Facebook (login wall; not read). Reddit threads describe per-area days but are Tier 3.

**Next step:** FOI-9 to CEMO for the collection days per barangay (drafted).

---

## 6. Water, power and class-suspension advisories

| Source | Status | Notes |
|---|---|---|
| Manila Water service advisories, https://www.manilawater.com/customers/service-advisories | ✅ | HTML table with start, end, **affected city**, location, activity, affected areas. Can be filtered to "Marikina". Marikina is in Manila Water's east zone. |
| Meralco maintenance schedule, https://company.meralco.com.ph/news-and-advisories/maintenance-schedule | ❔ | Found in search; per-city pages exist (e.g. Quezon City term 226). Marikina's page not checked yet. |
| Class suspensions | ⚠️ | Announced on Marikina PIO Facebook and X (login walls). DepEd/LGU pages not found. |

**Next step:** decide between linking out and showing a filtered list. Showing a list means fetching on a schedule, the same as the PAGASA feed.

---

## 7. Social programs

These are already in the charter extraction (topic 1), so they follow the same review:

- **OSCA:** senior citizen ID with booklet, replacement, medicine and grocery booklet, birthday subsidy.
- **CSWDO:** crisis assistance (medical, burial), solo parent services, adoption and foster care, VAWC case management, child development centers and feeding, youth programs.
- **GAD:** crisis intervention for survivors, livelihood and job readiness.
- **LRPESO:** employment facilitation, employer accreditation, migrant welfare.
- **PLMar:** college admission and enrollment.

Not found yet: a PWD office charter (PDO is the Parks Development Office), and the city scholarship program. Search the 2022 city charter (`data-raw/city/MARIKINA 2022 Citizens Charter.pdf`) for both.

---

## 8. Budget and projects

No change from Sprint 03: DPWH (FOI-6), COA, BLGF cross-checks are still blocked. See the [Sprint 03 report](sprint-03-report.md).

---

## Suggested build order (after review)

1. Service details with requirements, fees and times (topic 1), starting with Civil Registry and Treasury.
2. Hospitals and health centers list (topic 3).
3. River level widget on `/disaster-risk` from the PAGASA feed, once PAGASA says it's OK (topic 2). Evacuation centers when FOI-7 is answered.
4. Barangay pages joining 2, 3 and 4.
5. Advisories and garbage schedule when the data exists.

## How to regenerate

```bash
python -I data-raw/charters/extract_charters.py data-raw/charters/txt data-raw/charters/services-extracted.json data-raw/charters/services-extracted.csv
```

Download URLs and SHA-256 for every new raw file are in the [manifest](../data/SOURCES.md#raw-file-manifest).
