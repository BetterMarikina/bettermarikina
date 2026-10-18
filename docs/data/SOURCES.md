# Source Registry

This is every source BetterMarikina uses or plans to use. Conventions and tiers are in [README.md](README.md).

**Status:** ✅ reachable and has the data · ⚠️ partial or awkward to access · ❌ down or blocked · ❔ not yet checked

Entries marked "2026-10-19 (seed)" were checked while the sprint was being planned. Everything else gets checked in Sprint 01, Phase 1.

## City government (Tier 1)

| ID | Source | URL | What it has | Format | Status | Last checked | Notes |
|---|---|---|---|---|---|---|---|
| `city-our-city` | Marikina City – Our City | https://www.marikina.gov.ph/our-city | History, city officials (mayor, VM, reps, 16 councilors), barangays by district | HTML | ⚠️ | 2026-10-19 | History, barangays and districts are current. Its councilor list is OUT OF DATE (previous council); see discrepancy log #4. Also shows Barangka as 80.11 and 180.11 ha. |
| `city-facts` | Marikina City – Facts and Figures | https://www.marikina.gov.ph/facts-and-figures | Ecological Profile, 2023 Facts & Figures, 2022 Citizen's Charter, District 1/2 Roadmaps, BPLO statistical reports (footwear 1991–2025, businesses 2021–2026 Q2) | PDF/XLSX | ✅ | 2026-10-19 | 11 PDFs downloaded (see manifest). District 1/2 Roadmaps are image-only PDFs: not transcribed. Direct URLs are https://www.marikina.gov.ph/facts/<file>.pdf. Newer editions: only Ecological Profile (undated) and 2023 Facts and Figures are posted. |
| `city-contact` | Marikina City – Contact Us | https://www.marikina.gov.ph/contact-us | City hall and department contacts | HTML | ✅ | 2026-10-19 | Current Vice Mayor and 16 councilors, Punong Barangay per barangay, office landlines, hotlines. Footer says 2023, so spot-check quarterly. |
| `city-news` | Marikina City – News | https://www.marikina.gov.ph/news | Official news releases | HTML | ⚠️ | 2026-10-19 | Reachable. Not used; Phase 13 links to the PIO channels instead. |
| `city-forms` | Marikina City – Download Forms | https://www.marikina.gov.ph/download-forms | Application forms | PDF | ⚠️ | 2026-10-19 | Reachable. Not used in Sprint 01. |
| `fdp-city` | Marikina Full Disclosure Portal | https://fdpp.marikina.gov.ph/full-disclosure | 2020–2026: Annual Budget, APP/SAPP, GAD AR, Bid Results, SRE, SEF, Cash Flow, Trust Fund, LDRRMF, Manpower, Indebtedness, Unliquidated CA, 20% NTA | PDF | ⚠️ | 2026-10-19 | File URLs ARE in the static HTML as data-url attributes: https://fdpp.marikina.gov.ph/file/full_disclosure/<YEAR>_<Document name>.pdf for 2020-2026 (91 files). Most PDFs are image scans with no text layer and could not be read here (no OCR available). See blockers. |
| `fdp-ordinances` | Marikina City Ordinance/Resolution | https://fdpp.marikina.gov.ph/city-ordinance | Ordinances (and possibly resolutions) | HTML/PDF | ✅ | 2026-10-19 | Static HTML lists 150 ordinance PDFs (2000-2026) with number and title; one item is a resolution. File URL pattern: https://fdpp.marikina.gov.ph/file/ordinance/<ORDINANCE NO. xxx, SERIES OF yyyy>.pdf. No dates on the listing. |
| `fdp-charter` | Citizen's Charter | https://fdpp.marikina.gov.ph/citizen-charter | Services, requirements, fees, processing times | PDF | ⚠️ | 2026-10-19 | Page lists ~40 per-office charter PDFs at https://fdpp.marikina.gov.ph/file/citizens charter/<office>.pdf. Not downloaded or compared with the 2022 edition (carry-over). |
| `fdp-bids` | Bids and Awards | https://fdpp.marikina.gov.ph/bids-and-awards | Procurement notices and awards | HTML/PDF | ⚠️ | 2026-10-19 | Reachable, very little content in static HTML. Bid results are under fdp-city (<YEAR>_Bid Result.pdf), image scans. |
| `city-bplo` | Business Permits & Licensing | https://bplo.marikina.gov.ph/ | Business permit process, online portal | HTML | ⚠️ | 2026-10-19 | Reachable. Linked from services; no data taken. |
| `city-payment` | Online Payment | https://payment.marikina.gov.ph/ | Online payment of city fees and taxes | HTML | ⚠️ | 2026-10-19 | Reachable. Link only; no data entered. |
| `city-hrmo` | HRMO Careers | https://hrmo.marikina.gov.ph/careers/ | Plantilla job postings, possibly the office list | HTML | ⚠️ | 2026-10-19 | Reachable. Not used (department heads left as a blocker). |
| `fb-pio` | Marikina City PIO (Facebook) | https://www.facebook.com/MarikinaCityPIO | Announcements, advisories | Social | ⚠️ | 2026-10-19 | Returns a login wall to curl. Linked only; not read. |
| `x-pio` | Marikina PIO (X) | https://twitter.com/MarikinaPIO | Announcements | Social | ⚠️ | 2026-10-19 | Returns a login wall to curl. Linked only; not read. |
| `fb-barangays` | 16 barangay Facebook pages | *(collect in Phase 1)* | Current barangay officials, hall contacts | Social | ❔ |  | Not collected (blocker). |

## National government

| ID | Tier | Source | URL | What it has | Format | Status | Notes |
|---|---|---|---|---|---|---|---|
| `psa-psgc` | 1 | PSA – Philippine Standard Geographic Code | https://psa.gov.ph/classification/psgc | Official codes and names, city class, income class, urban/rural per barangay | HTML/XLSX | ❌ | Cloudflare "Just a moment" bot check even in the browser pane; not bypassed. 403 to curl/WebFetch. Only a search-result snippet of the PSA page was seen (shows Marikina 2024 POPCEN 471,323 and 16 barangays as of 31 July 2025). |
| `psa-popcen-2024` | 1 | PSA – 2024 Census of Population | https://psa.gov.ph/population-and-housing | City and barangay population, as of 2024-07-01 | XLSX/PDF | ❌ | Blocked as above. City total 471,323 from the PSA page snippet; per-barangay 2024 values are Tier 3 (citypopulation.de). Proclamation 973 s.2025 (lawphil) has no annex text. |
| `psa-census-2020` | 1 | PSA – 2020 Census of Population and Housing | https://psa.gov.ph/population-and-housing | City and barangay population, households | XLSX/PDF | ⚠️ | psa.gov.ph blocked. 2020 city and barangay counts taken from the city 2023 Facts and Figures (PSA 2020 census as printed), which agree with citypopulation.de. |
| `psa-census-2015` | 1 | PSA – 2015 POPCEN | https://psa.gov.ph/population-and-housing | City and barangay population | XLSX/PDF | ⚠️ | Blocked. 2015 and 2010 city total from city 2023 Facts and Figures; barangay values are Tier 3 only. |
| `psa-openstat` | 1 | PSA OpenSTAT | https://openstat.psa.gov.ph/ | Statistical tables (poverty, labor, etc.) | CSV/PX | ❌ | 403. |
| `psa-sae` | 1 | PSA – Small Area Poverty Estimates | https://psa.gov.ph/statistics/poverty | City-level poverty incidence | XLSX | ❌ | Blocked. |
| `comelec-2025` | 1 | COMELEC – 2025 NLE results | https://comelec.gov.ph/ | Certified winners: mayor, VM, councilors, House reps | HTML/PDF | ⚠️ | comelec.gov.ph reachable but no results table found; not used. Council names rest on the city contact page + Wikipedia cross-check. |
| `comelec-bske-2023` | 1 | COMELEC – 2023 BSKE results | https://comelec.gov.ph/ | Punong Barangay, Kagawad, SK chair per barangay | HTML/PDF | ⚠️ | No results table found. Punong Barangay names from the city contact page. |
| `comelec-ra12326` | 1 | COMELEC advisory on RA 12326 | https://comelec.gov.ph/ | BSKE moved from 2026-11-02 to 2028-11-13; terms extended | HTML | ❔ | Not read here. RA 12326 BSKE date (2028-11-13) is taken from the sprint brief. Recheck the SC petition before publishing. |
| `law-ra8223` | 1 | RA 8223 (Charter of Marikina City) | https://lawphil.net/ / https://www.officialgazette.gov.ph/ | Cityhood | HTML | ✅ | Read on lawphil.net (mirror; Official Gazette returns 403). Approved 1996-11-06. |
| `law-ra9364` | 1 | RA 9364 (two legislative districts) | https://www.officialgazette.gov.ph/ | District composition | HTML | ✅ | Read on lawphil.net. Approved 2006-12-15. Names 14 barangays (no Fortune/Tumana yet). |
| `dilg-fdp` | 2 | DILG Full Disclosure Policy Portal | https://fdpp.dilg.gov.ph/ | LGU FDP compliance and documents | HTML/PDF | ⚠️ | Reachable; not used. |
| `dilg-sglg` | 2 | DILG – Seal of Good Local Governance | https://dilg.gov.ph/ | SGLG passers by year | PDF | ❔ | Not checked. |
| `dilg-ncr` | 2 | DILG-NCR | https://ncr.dilg.gov.ph/ | Barangay officials directory, advisories | HTML | ⚠️ | Reachable; no barangay directory found. |
| `blgf-sre` | 1 | BLGF – LGU fiscal data (SRE) | https://blgf.gov.ph/ | Income/expenditure by LGU per year | XLSX | ❌ | 403. |
| `coa-aar` | 1 | COA – Annual Audit Reports (LGUs, NCR) | https://www.coa.gov.ph/reports/annual-audit-reports/ | Marikina City AAR per year | PDF | ❌ | 403. |
| `dti-cmci` | 2 | DTI – Cities & Municipalities Competitiveness Index | https://cmci.dti.gov.ph/ | Rank and pillar scores by year | HTML | ✅ | HUC rankings per year are static HTML tables: https://cmci.dti.gov.ph/rankings-data.php?unit=Highly+Urbanized+Cities&year=YYYY (2015-2024). |
| `philgeps` | 1 | PhilGEPS | https://notices.philgeps.gov.ph/ | Procurement notices and awards | HTML | ⚠️ | Reachable; not used. |
| `dpwh-projects` | 1 | DPWH – infrastructure projects / transparency | https://www.dpwh.gov.ph/ | National projects in Marikina | HTML | ❌ | Site returns a 212-byte stub to curl; not read. Search snippets point to the Metro Manila 1st DEO (Rosario, Pasig) as covering Marikina (DO 073 s.1988), unverified. |
| `doh-nhfr` | 2 | DOH – National Health Facility Registry | https://nhfr.doh.gov.ph/ | Health facilities, type, ownership | HTML | ❌ | 403. |
| `deped-schools` | 2 | DepEd – school data / SDO Marikina | https://www.deped.gov.ph/ | Public schools, school IDs | XLSX | ⚠️ | Reachable homepage only; no school list found. |
| `ched-hei` | 2 | CHED – HEI directory | https://ched.gov.ph/ | Colleges and universities | HTML/XLSX | ❌ | 403. |
| `pagasa` | 1 | PAGASA | https://www.pagasa.dost.gov.ph/ | Rainfall and flood bulletins | HTML | ⚠️ | Reachable; not used. |
| `noah` | 2 | UP NOAH hazard maps | https://noah.up.edu.ph/ | Flood/landslide hazard by area | Web map | ⚠️ | Reachable; web map, not used. |
| `mgb-geohazard` | 1 | MGB Geohazard maps | https://mgb.gov.ph/ | Flood/landslide susceptibility | PDF/map | ❌ | 403. |
| `phivolcs-hazardhunter` | 1 | PHIVOLCS / HazardHunterPH | https://hazardhunter.georisk.gov.ph/ | Fault proximity (West Valley Fault), liquefaction | Web | ⚠️ | Reachable; web map, not used. |
| `data-gov-ph` | 2 | data.gov.ph | https://data.gov.ph/ | Assorted datasets | CSV/JSON | ⚠️ | Reachable; no Marikina-level dataset found in this sprint. |
| `foi` | — | eFOI Portal | https://www.foi.gov.ph/ | Request channel for unpublished data | — | ❌ | 403 to curl. Drafts are in foi-drafts.md for the maintainer. |

| `city-ecoprofile` | 1 | Marikina Ecological Profile (CPDO) | https://www.marikina.gov.ph/facts/Ecological-Profile.pdf | Land area, density, history, barangay areas | PDF | ✅ | Undated, uses 2020 census. Part of `city-facts`. |
| `law-ra9431` | 1 | RA 9431 (Barangay Fortune) | https://lawphil.net/statutes/repacts/ra2007/ra_9431_2007.html | Creation of Fortune from Parang, approved 2007-04-10 | HTML | ✅ | Lawphil mirror. |
| `law-ra9432` | 1 | RA 9432 (Barangay Tumana) | https://lawphil.net/statutes/repacts/ra2007/ra_9432_2007.html | Creation of Tumana from Concepcion Uno, approved 2007-04-10 | HTML | ✅ | Lawphil mirror. |
| `city-charter-2022` | 1 | Marikina 2022 Citizen's Charter | https://www.marikina.gov.ph/facts/MARIKINA%202022%20Citizens%20Charter.pdf | Services, fees, requirements | PDF | ✅ | Part of `city-facts`; text layer readable. |

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
| data-raw/city/2023 Facts and Figures.pdf | `city-facts` | https://www.marikina.gov.ph/facts/2023%20Facts%20and%20Figures.pdf | 2026-10-19 | `4428d57afd43819907488a1d0bf9eef3293b271c7aa474d5db41bd776fc00f2e` |
| data-raw/city/District 1.pdf | `city-facts` | https://www.marikina.gov.ph/facts/District%201.pdf | 2026-10-19 | `9abfca0463a49740ff059107d32366699062d6c4d1dd7c6a0de96f325061d812` |
| data-raw/city/District 2.pdf | `city-facts` | https://www.marikina.gov.ph/facts/District%202.pdf | 2026-10-19 | `a823cd53345514854863493ef0189b521f4faaed62b8d5f546eea03a9759ed83` |
| data-raw/city/Ecological-Profile.pdf | `city-facts` | https://www.marikina.gov.ph/facts/Ecological-Profile.pdf | 2026-10-19 | `0e74e78354a8c6bc2f25311898e538e9cd1a51b16294ee5b22c56f6c2f45ac63` |
| data-raw/city/MARIKINA 2022 Citizens Charter.pdf | `city-facts` | https://www.marikina.gov.ph/facts/MARIKINA%202022%20Citizens%20Charter.pdf | 2026-10-19 | `21e4d8611345bab81d3b8c26a98aaf0de0fe7268a4cd504102d7ce032f41223e` |
| data-raw/city/Statistical Report Registered - Footwear (1991-2025).pdf | `city-facts` | https://www.marikina.gov.ph/facts/Statistical%20Report%20Registered%20-%20Footwear%20(1991-2025).pdf | 2026-10-19 | `6d349f390beda6fce5bde79e02cbf7b89df12a6deb14df76a20a7d3f1276f2a6` |
| data-raw/city/Statistical Report Registered Business - 2021-2025.pdf | `city-facts` | https://www.marikina.gov.ph/facts/Statistical%20Report%20Registered%20Business%20-%202021-2025.pdf | 2026-10-19 | `5764211505951e21befd64b776e160c3a7d09043f673b91f648106d268cc371a` |
| data-raw/city/Statistical Report Registered Business - Ownership Type 2021-2025.pdf | `city-facts` | https://www.marikina.gov.ph/facts/Statistical%20Report%20Registered%20Business%20-%20Ownership%20Type%202021-2025.pdf | 2026-10-19 | `4f94d8b1a86e073f0ebcebedd9ef8f35807b805df4d43fbeeb0ec64858ec75f3` |
| data-raw/city/Statistical Report Registered Business by Nature 2025.pdf | `city-facts` | https://www.marikina.gov.ph/facts/Statistical%20Report%20Registered%20Business%20by%20Nature%202025.pdf | 2026-10-19 | `f2a3377d77f7dd159174f46631f5be56a304052fd30ca5179c3ea39a39d33779` |
| data-raw/city/Statistical Report Registered Business by Nature 2026 - 2nd Qtr.pdf | `city-facts` | https://www.marikina.gov.ph/facts/Statistical%20Report%20Registered%20Business%20by%20Nature%202026%20-%202nd%20Qtr.pdf | 2026-10-19 | `f2c47b9ca8dc477d2f0b4840a5958714cab2e8fe055cd5fb142c0b4347e054ff` |
| data-raw/city/Statistical Report by Nature 2025 (No. of Employees).pdf | `city-facts` | https://www.marikina.gov.ph/facts/Statistical%20Report%20by%20Nature%202025%20(No.%20of%20Employees).pdf | 2026-10-19 | `91e110676af1eafaa8fee5a4290a80a7cda3981c7f4ae64a19eea43ed4638678` |
| data-raw/city/Statistical Report Registered Business by Nature 2024.pdf | `city-facts` | https://www.marikina.gov.ph/facts/Statistical%20Report%20Registered%20Business%20by%20Nature%202024.pdf | 2026-10-19 | `4d02c0a68f73a140a1818c8ba69afa9508ddf478bd4b5097647fa9f5701ad11d` |
| data-raw/city/Statistical Report Registered Business by Nature 2023.pdf | `city-facts` | https://www.marikina.gov.ph/facts/Statistical%20Report%20Registered%20Business%20by%20Nature%202023.pdf | 2026-10-19 | `38cdf031041f4a4706d5ae71fbdc85529ed7f005ac0663438fcd0ba14f94ad63` |
| data-raw/city/Statistical Report Registered Business by Nature 2022.pdf | `city-facts` | https://www.marikina.gov.ph/facts/Statistical%20Report%20Registered%20Business%20by%20Nature%202022.pdf | 2026-10-19 | `101d07231f5f0299cee31f1b0bc27da807142ac4a6c4dfce22586c37bae75d4a` |
| data-raw/city/Statistical Report Registered Business by Nature 2021.pdf | `city-facts` | https://www.marikina.gov.ph/facts/Statistical%20Report%20Registered%20Business%20by%20Nature%202021.pdf | 2026-10-19 | `7932c6a5cb254a2f8f769e800ac24440fee12b45af9874fde47b729a7a59afb5` |
| data-raw/fdp/2020_Annual Budget.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2020_Annual%20Budget.pdf | 2026-10-19 | `21a09bcec76794c8616c59078dd97e0ba5f4ae1719f6d83fe7c3884797677476` |
| data-raw/fdp/2020_Statement of Receipts and Expenditures.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2020_Statement%20of%20Receipts%20and%20Expenditures.pdf | 2026-10-19 | `248308c4a9fa7a05a7e59ee407da7e2bc6da97d148b1c5137d634d0780e135a8` |
| data-raw/fdp/2021_Annual Budget.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2021_Annual%20Budget.pdf | 2026-10-19 | `90604c290841475907a2707381f8b1ee59a551a7317d993352379bdd287ec90d` |
| data-raw/fdp/2021_Statement of Receipts and Expenditures.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2021_Statement%20of%20Receipts%20and%20Expenditures.pdf | 2026-10-19 | `1a84dfeb68b79b7fc65c55ee6abe3e715fc0d2732d5b0a45857086845fe3d914` |
| data-raw/fdp/2022_Annual Budget.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2022_Annual%20Budget.pdf | 2026-10-19 | `e53f03c4f345abf1893f39a0ae4622d006696fc975ff8c4e82d1cf73a786a15f` |
| data-raw/fdp/2022_Statement of Receipts and Expenditures.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2022_Statement%20of%20Receipts%20and%20Expenditures.pdf | 2026-10-19 | `c52c999eb01c97bd8415a04ce5022978186a47def6cbdd10f977e200bfadb8ac` |
| data-raw/fdp/2023_Annual Budget.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2023_Annual%20Budget.pdf | 2026-10-19 | `026cc55068766cae7230a6a987e42166e97b87fc048331d24b060ef33eb14f3f` |
| data-raw/fdp/2023_Statement of Receipts and Expenditures.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2023_Statement%20of%20Receipts%20and%20Expenditures.pdf | 2026-10-19 | `7a967b2212b15201ec7b21e75d6e91800beac31460a60aa4c6d3837ed3a110ba` |
| data-raw/fdp/2024_Annual Budget.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2024_Annual%20Budget.pdf | 2026-10-19 | `1c233a013a26fea69791e898cd6c0874afd6ae8e40f76ce4c235bb02af5b6bc7` |
| data-raw/fdp/2024_Statement of Receipts and Expenditures.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2024_Statement%20of%20Receipts%20and%20Expenditures.pdf | 2026-10-19 | `f3cba4e4fc2513b59d1f781e0d4013743fc8201713bcb372deca360a865c0135` |
| data-raw/fdp/2025_Annual Budget.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2025_Annual%20Budget.pdf | 2026-10-19 | `524f34ebc3c31ade379f24026077cbed3756aba401cdad4548f675b5a1470d3a` |
| data-raw/fdp/2025_Annual GAD Accomplishment Report.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2025_Annual%20GAD%20Accomplishment%20Report.pdf | 2026-10-19 | `5a7c3f3f1af987971909d70f655612e56bc2d4665e2999371f4859c7eb968e66` |
| data-raw/fdp/2025_Annual Procurement Plan.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2025_Annual%20Procurement%20Plan.pdf | 2026-10-19 | `6867c113b47e92c52acfa68a9dff3977c1873b852e53a468147b0c8d142e06bd` |
| data-raw/fdp/2025_Bid Result.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2025_Bid%20Result.pdf | 2026-10-19 | `0d87fb04ed6bf7c363695b323846340bea3396e4691fe0c2ecffc665a10aae90` |
| data-raw/fdp/2025_Component of NTA Utilization.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2025_Component%20of%20NTA%20Utilization.pdf | 2026-10-19 | `48f7a4e99db6a900c78550d4f0c8ec48a2bdaafe876e062e4bb7957103fb6120` |
| data-raw/fdp/2025_LDRRMF Utilization.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2025_LDRRMF%20Utilization.pdf | 2026-10-19 | `58f9ba426e6fc8d9db510f38066fbb1a55e70c319aff109355feaf5f906ad645` |
| data-raw/fdp/2025_SEF Utilization.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2025_SEF%20Utilization.pdf | 2026-10-19 | `c076f04c97ec05d294791fa9f7dce13b2aa3ff7549ebd2b67aa2c67a456e039b` |
| data-raw/fdp/2025_Statement Of Indebtedness.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2025_Statement%20Of%20Indebtedness.pdf | 2026-10-19 | `08c14531490b64e80f06175f17d051fdc21fba0cb4328a703d479f396c774a0c` |
| data-raw/fdp/2025_Statement of Receipts and Expenditures.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2025_Statement%20of%20Receipts%20and%20Expenditures.pdf | 2026-10-19 | `1dfd808de47a3483726b41656fbcc0b4031ed49e47eb1fdfc27a0f161a6892e8` |
| data-raw/fdp/2026_Annual Budget.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2026_Annual%20Budget.pdf | 2026-10-19 | `8899b940ebd20558954feed6070aa14bc720f3d63731b176e117fc68cdbdd31c` |
| data-raw/fdp/2026_Statement Of Indebtedness.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2026_Statement%20Of%20Indebtedness.pdf | 2026-10-19 | `b46c7874baeef743a5a18688ebedde81080795c73ff48ef5dbd4c462a0de7a08` |
| data-raw/fdp/2026_Statement of Receipts and Expenditures.pdf | `fdp-city` | https://fdpp.marikina.gov.ph/file/full_disclosure/2026_Statement%20of%20Receipts%20and%20Expenditures.pdf | 2026-10-19 | `8fc4dc3d9d65dbc7945c9dd8bfbb2ddf3ecab89a106ca11c2b5eb90ab29a880f` |

## Discrepancy log

Record conflicting values here. Note which value was used and why.

| # | Topic | Value A (source) | Value B (source) | Used | Reason | Date |
|---|---|---|---|---|---|---|
| 1 | City land area | ~2,150 ha (`city-our-city` text; BLM-certified earlier) | 2,314.37 ha (`city-facts`, `city-ecoprofile`: Bureau of Lands cadastral surveys 2012 and Q3 2013, "now the official land area adopted by the City Government") | **2,314.37 ha** | Both city documents state it is the official figure; barangay areas sum to it. Our-city text is outdated. | 2026-10-19 |
| 2 | Cityhood date | 1996-12-06 (`city-our-city`: "became a city when RA 8223 was signed...and ratified") | 1996-12-08 (`city-ecoprofile`, `city-facts`, `city-our-city` elsewhere) | RA 8223 **approved 1996-11-06** (`law-ra8223`); plebiscite date left unresolved | Signing date is Nov 6 per the law text; the plebiscite date (Dec 6 or 8) is not confirmed by COMELEC. Site shows approval date and notes the city's two dates. | 2026-10-19 |
| 3 | 2025 council seat/party split | NUP 10, Lakas 5 (`wiki-2025-elections`) | Different tally (Substack summary) | Don't publish party split | Not needed; names come from COMELEC | 2026-10-19 |
| 4 | City Council membership | Samuel Ferriol, Carl Eli Afica, Rommel Acuña, Manuel Sarmiento, Serafin Bernardino, Cloyd Casimiro, Jojo Banzon, Romina Kate De Guzman (D1); Donn Carlo Favis, Angelito Nuñez, Loreto Tolentino Jr., Ronnie Acuña, Levy de Guzman, Marife Dayao, Renato Magtubo, Hilario Punzalan (D2) — `city-our-city` (and the sprint seed list) | Celeste Reyes, Pat Sicat, Samuel Ferriol, Cloyd Casimiro, Jojo Banzon, Ginny Pioquinto, Carl Eli Afica, Romina Kate De Guzman (D1); Jaren Feliciano, Angelito Nuñez, Ziffred Ancheta, Ronnie Acuña, Marife Dayao, Loreto Tolentino Jr., Renato Magtubo, Hilario Punzalan (D2) — `city-contact`; same names in `wiki-2025-elections` | `city-contact` list | The our-city list matches the previous council (Sarmiento, Bernardino, Favis, Levy de Guzman etc.). The contact page matches Wikipedia's 2025 results (citing GMA/ABS-CBN). Not checked against COMELEC. | 2026-10-19 |
| 5 | Barangka land area | 80.11 ha (`city-facts`, `city-ecoprofile`; District I sums to 937.52) | 180.11 ha (`city-our-city` table) | 80.11 ha | Only 80.11 makes District I sum to 937.52 ha and the city to 2,314.37 ha. | 2026-10-19 |
| 6 | Fortune land area | 200.93 ha (`city-facts` land-area table) | about 219.18 ha (`law-ra9431`, 2007 technical description) | 200.93 ha | City figure is the current survey-based table; the law's figure is a 2007 more-or-less description. | 2026-10-19 |
| 7 | District II membership | Concepcion Uno/Dos, Nangka, Parang, Marikina Heights (5) — `law-ra9364` (2006) | those five + Fortune and Tumana (7) — `city-our-city` | 7 barangays | Fortune and Tumana were created by RA 9431/9432 in April 2007 from Parang and Concepcion Uno, after RA 9364. | 2026-10-19 |
| 8 | Population 2020 total | 456,059 total / 452,961 household population (`city-facts`) | 456,059 (`city-ecoprofile`) | both, labeled | The 452,961 figure is household population (excludes institutional population). | 2026-10-19 |
