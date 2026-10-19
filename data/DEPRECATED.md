# Deprecated: legacy Solano data

Every JSON file in this folder is Better Solano data (Solano, Nueva Vizcaya) from the legacy static HTML site. **It is not Marikina data and must not be shown on BetterMarikina.**

The React app (`react-app/`) does not read these files. Sourced Marikina data lives in `react-app/src/data/marikina/` (see `docs/data/README.md`).

The legacy static pages (`index.html`, `government/`, `legislative/`, `budget/` and so on) and `assets/js/*.js` still load these files, so they were not deleted in Sprint 01. Retiring the legacy static site is a maintainer decision (see "Blockers & carry-over" in `docs/sprints/sprint-01-official-data.md`).

| File | Replaced by |
|---|---|
| `ordinances.json`, `resolutions.json` | `react-app/src/data/marikina/ordinances.json`, `resolutions.json` |
| `officials.json` | `react-app/src/data/marikina/officials.json` |
| `competitive-index.json` | `react-app/src/data/marikina/statistics.json` (`cmci`) |
| `dpwh-projects.json` | none yet (Phase 10 blocked) |
| `services.json` | `react-app/src/data/services.json` |
