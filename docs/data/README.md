# BetterMarikina Data Conventions

These rules cover how data gets onto BetterMarikina. Read them before adding or changing anything under `react-app/src/data/`.

See also: [Source registry](SOURCES.md) · [Sprint 01](../sprints/sprint-01-official-data.md)

## Source tiers

| Tier | What it is | Examples | Can publish? |
|---|---|---|---|
| **1** | The office that issues or owns the data | marikina.gov.ph, fdpp.marikina.gov.ph, PSA (population, PSGC), COMELEC (election results), COA (audit reports), BLGF (SRE) | Yes |
| **2** | Another government body republishing or compiling it | DILG FDP portal, DTI CMCI, data.gov.ph, DOH NHFR, DepEd school lists | Yes, but prefer Tier 1 when both exist |
| **3** | Non-government secondary | Wikipedia, PhilAtlas, citypopulation.de, barangaydirectory.com, news, OSM/HDX | Only as a lead, or labeled "secondary source" on the page |

If Tier 1 and Tier 2 disagree, use Tier 1 and log the conflict in the [discrepancy log](SOURCES.md#discrepancy-log).

## File layout

```
react-app/src/data/marikina/   # sourced JSON imported by the app (committed)
data-raw/                      # downloaded PDFs/XLSX, gitignored; hash recorded in SOURCES.md
docs/data/SOURCES.md           # registry of every source + discrepancy log
docs/data/foi-drafts.md        # FOI request drafts (maintainer submits)
```

The root `data/` folder belongs to the legacy static HTML site and still holds Solano data. Don't add Marikina data there.

## Dataset envelope

Every JSON file in `react-app/src/data/marikina/` uses this shape:

```json
{
  "meta": {
    "title": "Barangays of Marikina City",
    "sources": [
      {
        "id": "psa-psgc",
        "tier": 1,
        "url": "https://psa.gov.ph/classification/psgc/...",
        "retrievedAt": "2026-10-19",
        "covers": "PSGC codes, official names"
      }
    ],
    "asOf": "2026-10-19",
    "notes": "Officials as elected in the 2023 BSKE; terms extended by RA 12326."
  },
  "data": []
}
```

- `sources[].id` must match an ID in [SOURCES.md](SOURCES.md).
- `asOf` is when the data was true, which may be earlier than `retrievedAt`.
- When a field is unknown, use `null` and add a short explanation to `notes`. Don't use an empty string or a guess.
- Field-level sources are optional. Use `"_src": "source-id"` on a record only when the record mixes sources.

## Personal data

- Publish names and official positions of public officials.
- Publish **office** phone numbers, emails and addresses only.
- Don't publish personal mobile numbers, personal emails, home addresses, or photos the government didn't publish, even if a government page lists them.
- Don't include data about private individuals, such as beneficiary lists or complainants.

## Verification

1. Record the source in SOURCES.md **before** using it.
2. Read values from the source document itself, not from a summary of it.
3. Spot-check: after entering a table, re-read at least 3 random rows against the source.
4. Numbers keep the source's precision. Don't round, and use the source's units.
5. For legal text such as ordinances and audit findings, link to it and give the title. Don't paraphrase it into new claims.

## Update cadence

| Data | Refresh |
|---|---|
| Officials (city) | After each election, and when vacancies are announced |
| Officials (barangay) | After BSKE (next: 2028-11-13 per RA 12326, unless the SC rules otherwise) |
| Ordinances / resolutions | Monthly |
| FDP financial documents | Quarterly |
| Population | After each PSA census release |
| CMCI | Annually (DTI releases mid-year) |
| COA audit reports | Annually |
| Contacts / hotlines | Quarterly spot-check |
