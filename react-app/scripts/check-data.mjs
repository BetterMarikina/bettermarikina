// Checks every JSON dataset under src/data against the data rules in docs/data.
// Plain Node, no dependencies. Exits 1 and lists every problem if any rule fails.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const DATA_DIR = fileURLToPath(new URL('../src/data/', import.meta.url));
const MOBILE = /(?:\+63|\b0)9\d{2}[\s-]?\d{3}[\s-]?\d{4}\b/;
// Mobile numbers that are official public hotlines, not personal numbers. Each needs an official source.
const ALLOWED_MOBILES = new Set([
  // Marikina City Rescue 161 hotline cellphones, city contact-us page (directory.json, source city-contact).
  '0917-584-2168',
  '0928-559-3341',
  '0998-997-0115',
  '0998-579-6435',
]);
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const today = new Date().toISOString().slice(0, 10);

const problems = [];
const report = (file, msg) => problems.push(`${file}: ${msg}`);

function listJson(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return listJson(path);
    return name.endsWith('.json') ? [path] : [];
  });
}

function walk(value, path, visit) {
  visit(value, path);
  if (Array.isArray(value)) value.forEach((v, i) => walk(v, `${path}[${i}]`, visit));
  else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) walk(v, path ? `${path}.${k}` : k, visit);
  }
}

function checkSources(file, meta) {
  if (!meta || typeof meta.title !== 'string') report(file, 'meta.title missing');
  if (!Array.isArray(meta?.sources) || meta.sources.length === 0) {
    report(file, 'meta.sources missing or empty');
    return new Set();
  }
  const ids = new Set();
  for (const s of meta.sources) {
    const where = `source "${s.id}"`;
    if (!s.id) report(file, 'a source has no id');
    else if (ids.has(s.id)) report(file, `${where} is listed twice`);
    ids.add(s.id);
    if (![1, 2, 3].includes(s.tier)) report(file, `${where} tier must be 1, 2 or 3 (got ${s.tier})`);
    if (typeof s.url !== 'string' || !/^https?:\/\//.test(s.url)) report(file, `${where} url is not http(s)`);
    if (!DATE.test(s.retrievedAt ?? '')) report(file, `${where} retrievedAt must be YYYY-MM-DD`);
    else if (s.retrievedAt > today) report(file, `${where} retrievedAt ${s.retrievedAt} is in the future`);
    if (!s.covers) report(file, `${where} has no "covers" note`);
  }
  return ids;
}

function checkRecords(file, json, sourceIds) {
  walk(json, '', (value, path) => {
    if (typeof value === 'string' && MOBILE.test(value) && !ALLOWED_MOBILES.has(value.trim())) {
      report(file, `${path} looks like a mobile number (personal-data rule)`);
    }
    if (path.startsWith('meta')) return;
    const key = path.split('.').pop();
    if (key === 'source' && typeof value === 'string' && !sourceIds.has(value)) {
      report(file, `${path} points to unknown source "${value}"`);
    }
  });
}

function checkBarangays(file, json) {
  const rows = json.data;
  if (!Array.isArray(rows) || rows.length !== 16) {
    report(file, `expected 16 barangays, found ${rows?.length}`);
    return;
  }
  const ids = new Set(rows.map((b) => b.id));
  if (ids.size !== rows.length) report(file, 'barangay ids are not unique');
  for (const b of rows) {
    if (!/^\d{9}$/.test(b.psgc ?? '')) report(file, `${b.id}: psgc must be 9 digits`);
    checkCouncil(file, b);
  }
}

// Rules for a barangay's council once it is filled in (from a council post or the FOI-1 reply).
function checkCouncil(file, b) {
  const kagawad = b.officials?.kagawad;
  if (kagawad == null) return;
  // The Local Government Code fixes 7 kagawads. Vacancies are not modeled yet: when the FOI-1 reply
  // shows one, add a vacancy field and relax this rule instead of publishing a short list.
  if (!Array.isArray(kagawad) || kagawad.length !== 7) report(file, `${b.id}: kagawad must list exactly 7 names`);
  else if (kagawad.some((n) => typeof n !== 'string' || n.trim() === '')) report(file, `${b.id}: kagawad has a blank name`);
  else if (new Set(kagawad.map((n) => n.trim().toLowerCase())).size !== 7) report(file, `${b.id}: kagawad has a duplicate name`);
}

let fileCount = 0;
for (const path of listJson(DATA_DIR)) {
  const file = relative(DATA_DIR, path).replaceAll('\\', '/');
  fileCount += 1;
  let json;
  try {
    json = JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    report(file, `invalid JSON: ${err.message}`);
    continue;
  }
  const sourceIds = checkSources(file, json.meta);
  checkRecords(file, json, sourceIds);
  if (file === 'marikina/barangays.json') checkBarangays(file, json);
}

if (problems.length > 0) {
  console.error(`Data check failed (${problems.length}):\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log(`Data check passed: ${fileCount} datasets.`);
