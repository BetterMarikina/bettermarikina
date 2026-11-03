// Crawls a running build from "/" through every internal link and fails if any link does not return 200.
// Usage: node scripts/check-links.mjs [baseUrl]   (default http://localhost:3000)
const base = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '');
const SKIP = /^\/(_next|assets)\/|\.(png|jpe?g|svg|ico|css|js|pdf|xml|txt|webmanifest|json)$/;

const status = new Map();
const linkedFrom = new Map();
const queue = ['/'];

while (queue.length > 0) {
  const path = queue.shift();
  if (status.has(path)) continue;
  const res = await fetch(base + path, { redirect: 'manual' });
  status.set(path, res.status);
  if (res.status !== 200 || !(res.headers.get('content-type') ?? '').includes('text/html')) continue;
  const html = await res.text();
  for (const match of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const link = match[1].replace(/\/$/, '') || '/';
    if (SKIP.test(link)) continue;
    if (!linkedFrom.has(link)) linkedFrom.set(link, path);
    if (!status.has(link)) queue.push(link);
  }
}

const broken = [...status].filter(([, code]) => code !== 200);
if (broken.length > 0) {
  console.error(`Broken internal links (${broken.length} of ${status.size} pages):`);
  for (const [path, code] of broken) console.error(`- ${code} ${path} (linked from ${linkedFrom.get(path)})`);
  process.exit(1);
}
console.log(`Link check passed: ${status.size} pages.`);
