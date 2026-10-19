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
| `fdp-charter` | Citizen's Charter | https://fdpp.marikina.gov.ph/citizen-charter | Services, requirements, fees, processing times | PDF | ✅ | 2026-10-19 | Sprint 03: all 40 per-office charters (edition 2024; BPLO 2026) downloaded with a readable text layer; hashes in the manifest. Index of service titles published in services.json (`charterIndex`); fees and times not transcribed. |
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
| `psa-psgc` | 1 | PSA – Philippine Standard Geographic Code | https://psa.gov.ph/classification/psgc | Official codes and names, city class, income class, urban/rural per barangay | HTML/XLSX | ✅ | Retried with Firecrawl 2026-10-19: reachable now (no bot check). Barangay table at https://psa.gov.ph/classification/psgc/barangays/1380700000 (10-digit code 1380700000, correspondence code 137402000): 16 barangays, PSGC codes, urban/rural, 2024 POPCEN; City of Marikina income class 1st. Barangay detail pages are /classification/psgc/brgydetail/13807000NN. The table is paginated (10 per page), so barangays 11-16 were read from their detail pages. Sums to 471,323. |
| `psa-popcen-2024` | 1 | PSA – 2024 Census of Population | https://psa.gov.ph/population-and-housing | City and barangay population, as of 2024-07-01 | XLSX/PDF | ✅ | 2026-10-19: city total 471,323 and all 16 barangay counts read from the PSA PSGC pages (see psa-psgc); the barangay values sum to the city total and equal the earlier citypopulation.de values. |
| `psa-census-2020` | 1 | PSA – 2020 Census of Population and Housing | https://psa.gov.ph/population-and-housing | City and barangay population, households | XLSX/PDF | ⚠️ | psa.gov.ph blocked. 2020 city and barangay counts taken from the city 2023 Facts and Figures (PSA 2020 census as printed), which agree with citypopulation.de. |
| `psa-census-2015` | 1 | PSA – 2015 POPCEN | https://psa.gov.ph/population-and-housing | City and barangay population | XLSX/PDF | ⚠️ | Blocked. 2015 and 2010 city total from city 2023 Facts and Figures; barangay values are Tier 3 only. |
| `psa-openstat` | 1 | PSA OpenSTAT | https://openstat.psa.gov.ph/ | Statistical tables (poverty, labor, etc.) | CSV/PX | ⚠️ | Retried 2026-10-19: home page loads (200). No Marikina barangay tables looked for beyond the home page. |
| `psa-sae` | 1 | PSA – Small Area Poverty Estimates | https://psa.gov.ph/statistics/poverty | City-level poverty incidence | XLSX | ❌ | Not retried this sprint (needs a specific publication URL). OpenSTAT and the PSGC pages do load now. |
| `comelec-2025` | 1 | COMELEC – 2025 NLE results | https://comelec.gov.ph/ | Certified winners: mayor, VM, councilors, House reps | HTML/PDF | ⚠️ | Retried 2026-10-19: comelec.gov.ph homepage loads but has no results table. The official results site https://2025electionresults.comelec.gov.ph/ loads and shows national totals, but local (city) results sit behind a script-driven menu that could not be driven; results.comelec.gov.ph does not resolve. Councilors were cross-checked against Rappler, which reproduces the COMELEC Media Server (Tier 3). |
| `comelec-bske-2023` | 1 | COMELEC – 2023 BSKE results | https://comelec.gov.ph/ | Punong Barangay, Kagawad, SK chair per barangay | HTML/PDF | ⚠️ | Retried 2026-10-19: no per-barangay 2023 BSKE results page reachable. Kagawads and SK chairs not published. |
| `comelec-ra12326` | 1 | COMELEC advisory on RA 12326 | https://comelec.gov.ph/ | BSKE moved from 2026-11-02 to 2028-11-13; terms extended | HTML | ✅ | 2026-10-19: RA 12326 signed 2026-09-24 moves the BSKE to 2028-11-13 (five-year terms). Two Supreme Court petitions are pending (G.R. No. E-08557, Macalintal, filed 2026-09-28; youth groups, filed 2026-10-05). No TRO; COMELEC says the law is in effect (Rappler fact check). Sources: sc.judiciary.gov.ph docket PDFs, Inquirer, Rappler, VERA Files, Philstar. Recheck before any BSKE release. |
| `law-ra8223` | 1 | RA 8223 (Charter of Marikina City) | https://lawphil.net/ / https://www.officialgazette.gov.ph/ | Cityhood | HTML | ✅ | Read on lawphil.net (mirror; Official Gazette returns 403). Approved 1996-11-06. |
| `law-ra9364` | 1 | RA 9364 (two legislative districts) | https://www.officialgazette.gov.ph/ | District composition | HTML | ✅ | Read on lawphil.net. Approved 2006-12-15. Names 14 barangays (no Fortune/Tumana yet). |
| `dilg-fdp` | 2 | DILG Full Disclosure Policy Portal | https://fdpp.dilg.gov.ph/ | LGU FDP compliance and documents | HTML/PDF | ⚠️ | Reachable; not used. |
| `dilg-sglg` | 2 | DILG – Seal of Good Local Governance | https://dilg.gov.ph/ | SGLG passers by year | PDF | ❔ | Not checked. |
| `dilg-ncr` | 2 | DILG-NCR | https://ncr.dilg.gov.ph/ | Barangay officials directory, advisories | HTML | ❌ | Retried 2026-10-19: DILG sites (dilg.gov.ph, beta.dilg.gov.ph) fail with a proxy tunnel error; barangay officials directory not read. |
| `blgf-sre` | 1 | BLGF – LGU fiscal data (SRE) | https://blgf.gov.ph/ | Income/expenditure by LGU per year | XLSX | ⚠️ | Retried 2026-10-19: homepage loads (200) but no Marikina SRE data page was found from it; not read further. |
| `coa-aar` | 1 | COA – Annual Audit Reports (LGUs, NCR) | https://www.coa.gov.ph/reports/annual-audit-reports/ | Marikina City AAR per year | PDF | ❌ | Retried 2026-10-19: Cloudflare error 522 (origin timed out). Site down rather than bot-blocked. Retry later. |
| `dti-cmci` | 2 | DTI – Cities & Municipalities Competitiveness Index | https://cmci.dti.gov.ph/ | Rank and pillar scores by year | HTML | ✅ | HUC rankings per year are static HTML tables: https://cmci.dti.gov.ph/rankings-data.php?unit=Highly+Urbanized+Cities&year=YYYY (2015-2024). |
| `philgeps` | 1 | PhilGEPS | https://notices.philgeps.gov.ph/ | Procurement notices and awards | HTML | ⚠️ | Reachable; not used. |
| `dpwh-projects` | 1 | DPWH – infrastructure projects / transparency | https://www.dpwh.gov.ph/ | National projects in Marikina | HTML | ❌ | Retried 2026-10-19: homepage, news and procurement pages fail to scrape (connection closed / engines failed). Search excerpts of DPWH procurement notices list Marikina City projects under the Metro Manila 1st DEO (confirms coverage), but no project list could be read, so none is published. |
| `doh-nhfr` | 2 | DOH – National Health Facility Registry | https://nhfr.doh.gov.ph/ | Health facilities, type, ownership | HTML | ❌ | Retried 2026-10-19: all Firecrawl engines failed. Not bypassed. |
| `deped-schools` | 2 | DepEd – school data / SDO Marikina | https://www.deped.gov.ph/ | Public schools, school IDs | XLSX | ✅ | 2026-10-19: DepEd National Inventory Dashboard https://nid.deped.gov.ph/public-dashboard/region/NCR/division/Marikina%20City lists the 33 public schools with school IDs. Used in facilities.json. |
| `ched-hei` | 2 | CHED – HEI directory | https://ched.gov.ph/ | Colleges and universities | HTML/XLSX | ❌ | Retried 2026-10-19: all Firecrawl engines failed. Not bypassed. |
| `pagasa` | 1 | PAGASA | https://www.pagasa.dost.gov.ph/ | Rainfall and flood bulletins | HTML | ✅ | 2026-10-19: flood bulletin page for the Pasig-Marikina-Laguna de Bay River Basin reads fine and is linked from /disaster-risk. It has no alarm thresholds. |
| `noah` | 2 | UP NOAH hazard maps | https://noah.up.edu.ph/ | Flood/landslide hazard by area | Web map | ⚠️ | Reachable; web map, not used. |
| `mgb-geohazard` | 1 | MGB Geohazard maps | https://mgb.gov.ph/ | Flood/landslide susceptibility | PDF/map | ❌ | 403. |
| `phivolcs-hazardhunter` | 1 | PHIVOLCS / HazardHunterPH | https://hazardhunter.georisk.gov.ph/ | Fault proximity (West Valley Fault), liquefaction | Web | ⚠️ | Reachable; web map, not used. |
| `data-gov-ph` | 2 | data.gov.ph | https://data.gov.ph/ | Assorted datasets | CSV/JSON | ⚠️ | Retried 2026-10-19: loads (200), 175 datasets, 17 organizations. No Marikina-level dataset seen on the home page. |
| `foi` | — | eFOI Portal | https://www.foi.gov.ph/ | Request channel for unpublished data | — | ⚠️ | 2026-10-19: eFOI portal returns 503 maintenance; interim channel foi.gov.ph/standard-requests. Drafts are in foi-drafts.md for the maintainer. |

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

| data-raw/charters/accounting.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/accounting.pdf | 2026-10-19 | `b50e976be549841e591d5289a5833c145d2bfcd80ae2f644f625b27c969ec7bd` |
| data-raw/charters/assessors.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/assessors.pdf | 2026-10-19 | `8138cf9afaa735b494438328eec9d2b0591ffae8fe5337384bfc52ad5ccdc47c` |
| data-raw/charters/bfp.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/bfp.pdf | 2026-10-19 | `6600b4240df51042809305bbc83d9be6987edf758b589d30af6394dc802769e1` |
| data-raw/charters/bplo.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/bplo.pdf | 2026-10-19 | `31fa82493115a5c367447859375e058198f14360df227e31ebe64b8f3fe50a4b` |
| data-raw/charters/budget.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/budget.pdf | 2026-10-19 | `06ef2ae10e0606cd079991043538c8a7e1f9bb3fc2b72689ff1792279d81e021` |
| data-raw/charters/building official.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/building%20official.pdf | 2026-10-19 | `0da1f9ba2d93e1dcbcc57d789581abf54452ad4651b357d888a3f7dc25269070` |
| data-raw/charters/cho.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/cho.pdf | 2026-10-19 | `d78e0eb967bce228c7b9be4300cbc413ec818cae26b6f12891ee9043dac03e67` |
| data-raw/charters/city jail f.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/city%20jail%20f.pdf | 2026-10-19 | `78f75d118d5d991e2eba87f889397663a59b384ecc59e9acfe9b1f60139dd077` |
| data-raw/charters/city jail m.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/city%20jail%20m.pdf | 2026-10-19 | `abcbca74c14266a27361452e840762bdbf449f2a3923a1196797114511ea2e1e` |
| data-raw/charters/city-legal.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/city%20legal.pdf | 2026-10-19 | `457262d5fcd998102f5c803f88e269b4ac8cc5009df0de8bfbced179803587a0` |
| data-raw/charters/civil registry.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/civil%20registry.pdf | 2026-10-19 | `40a35b296491f2bfc3fcd2476a0f9c8816378906c23f5c3b624f01b2dfe07188` |
| data-raw/charters/cro.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/cro.pdf | 2026-10-19 | `8f8662acdb4ae50022d156bf7af51d895ac227957a40f11813c456f28bbd7549` |
| data-raw/charters/cswdo.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/cswdo.pdf | 2026-10-19 | `703d42c60c363ae388dccf26c4648c70292154f9691dc922dcde2423713d009e` |
| data-raw/charters/drrmo.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/drrmo.pdf | 2026-10-19 | `4cc0cc4d2e628712353c40669261ee5fd20d78e8a63707046e8742daa3b85c66` |
| data-raw/charters/gad.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/gad.pdf | 2026-10-19 | `8f04935d71bde83ec598607d55369c7a3879935445967b882a712d1d73aab46e` |
| data-raw/charters/gso.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/gso.pdf | 2026-10-19 | `ae8e95016012cac4df02c7088dee03adc37859cb8a138fe497887d94f76c884a` |
| data-raw/charters/iaso.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/iaso.pdf | 2026-10-19 | `0d7b33bdb2924c24a367a374de57828103f235b37ba6231653e0778dbf295c6c` |
| data-raw/charters/library.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/library.pdf | 2026-10-19 | `613b5135ae7ebcea0be0364585b80c556e0e04ed46a855605e1fefb5a6eadd65` |
| data-raw/charters/lrpeso.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/lrpeso.pdf | 2026-10-19 | `719730a02d66e6f8bcfa271f83a6474898428582b0e6723ecee6d75df051eb56` |
| data-raw/charters/market.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/market.pdf | 2026-10-19 | `674e1abe3e2ced1609139f239d74a0cb6489fc15e8df130f5bc8b172565038ec` |
| data-raw/charters/mayors office.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/mayors%20office.pdf | 2026-10-19 | `c4bafcfb831e8e67eeefe7ff4a099ce00d13c2f92ac84a4cac34a012a9cdd390` |
| data-raw/charters/mis.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/mis.pdf | 2026-10-19 | `02c245064721480ff5b496053df749de3c45404eab322d9fc38f586bd882f01b` |
| data-raw/charters/msc.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/msc.pdf | 2026-10-19 | `be10635c28cce0145a29eecf5e7dabee8e75100aea4693e4f9e13b2c8bb30376` |
| data-raw/charters/mso.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/mso.pdf | 2026-10-19 | `b4aadbe8fc8487ae11ceac7a4410f5cc2a912a8de39f8fb51a856974ec0fc32a` |
| data-raw/charters/office secretary.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/office%20secretary.pdf | 2026-10-19 | `33993f1d67cd65b0bb20890914e32eb52aed93c2ebc811ba1e9936dfa70d8ba0` |
| data-raw/charters/opss.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/opss.pdf | 2026-10-19 | `3c63ba0f8f42b9d4774b457c133f5f9a81d8967cb4d69526faf1a7acbea5eb01` |
| data-raw/charters/osca.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/osca.pdf | 2026-10-19 | `bfd100a0e259bf93311dfabbb8931df480c82b1963d0868739d4c5dfb9b373dd` |
| data-raw/charters/pdo.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/pdo.pdf | 2026-10-19 | `32da0131bcbe6f1980e84f3e0bf1824c72e6d3ff20ea3e3f46bff560fc9c7671` |
| data-raw/charters/personnel.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/personnel.pdf | 2026-10-19 | `5390eb47cc810712334d6c80f971bd9818db47ee26ad4ee28c6ceeaaf214a33f` |
| data-raw/charters/pio.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/pio.pdf | 2026-10-19 | `4fd2e4dd4f0682fe09761ca5e8cd1cf858d0cf70f6f35d6f332662e0a5b643aa` |
| data-raw/charters/planning.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/planning.pdf | 2026-10-19 | `6276f53f2bb12127cf3623d161be2dd3741349e096b4af99c406c1f4a0a41c17` |
| data-raw/charters/plmar.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/plmar.pdf | 2026-10-19 | `c72596a7b1135b3c464dbaf477d3ddcfa1cdad8b00414408093cd87a95e11204` |
| data-raw/charters/police.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/police.pdf | 2026-10-19 | `77db7a0099c0e7ec6f5cecc32c44bbe6dbf8896c1815bb4114f797ccdff39ea3` |
| data-raw/charters/rpa.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/rpa.pdf | 2026-10-19 | `390185820958463395d36f1b3b633002cd0d3012c369615a6b847c9471b84528` |
| data-raw/charters/srmg.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/srmg.pdf | 2026-10-19 | `a48accd993dfb22805ac7d53ddde03d53e6ec10dd9637ca861f4259603fb1b8b` |
| data-raw/charters/tourism.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/tourism.pdf | 2026-10-19 | `4c05183cd3035585172c34fb5eff468375ccd1b429d08704d5dc01a617bcadd0` |
| data-raw/charters/trade.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/trade.pdf | 2026-10-19 | `680ecdb93190d7041d5a08fc5d490e4c3787c24b66621de2dab2705ea215a27f` |
| data-raw/charters/treasury.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/treasury.pdf | 2026-10-19 | `6dfbfe57656d489442f55b205985c7cbb6535f1bf632eec805fdd2fc4106b8c9` |
| data-raw/charters/vet.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/vet.pdf | 2026-10-19 | `38adc79851e9090bfb9437d0284226197835d7470071e577b92f497d7583d20a` |
| data-raw/charters/vice mayor.pdf | `fdp-charter` | https://fdpp.marikina.gov.ph/file/citizens%20charter/vice%20mayor.pdf | 2026-10-19 | `fac4ab5107bd8ea600c612184dab09463ad23f73d9ab725a17237d737e160867` |

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
| 9 | Marikina River alarm thresholds | 1st alarm 15 m, 2nd 16 m, 3rd 18 m (GMA News, Inquirer, Manila Standard excerpts) | forced evacuation at 16 m (social post); other reports say 17 m | none published | No government page with the thresholds was found; all values are Tier 3 and disagree. | 2026-10-19 |
