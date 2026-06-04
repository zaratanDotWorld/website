import { google } from 'googleapis';

const SITE = process.env.GSC_SITE_URL ?? 'sc-domain:zaratan.world';
const DAYS = Number(process.env.GSC_DAYS ?? 28);

const oauth2 = new google.auth.OAuth2(
  process.env.GSC_CLIENT_ID,
  process.env.GSC_CLIENT_SECRET,
);
oauth2.setCredentials({ refresh_token: process.env.GSC_REFRESH_TOKEN });

const webmasters = google.webmasters({ version: 'v3', auth: oauth2 });

const iso = (d) => d.toISOString().slice(0, 10);
const endDate = iso(new Date(Date.now() - 86400000));
const startDate = iso(new Date(Date.now() - (DAYS + 1) * 86400000));

const query = (dimensions, rowLimit = 50) => webmasters.searchanalytics.query({
  siteUrl: SITE,
  requestBody: { startDate, endDate, dimensions, rowLimit },
}).then((r) => r.data.rows ?? []);

const [totals, queries, pages, countries, devices, dates] = await Promise.all([
  query([], 1),
  query(['query'], 50),
  query(['page'], 50),
  query(['country'], 20),
  query(['device']),
  query(['date'], DAYS + 1),
]);

const pct = (n) => `${(n * 100).toFixed(2)}%`;
const fix = (n, d = 1) => n.toFixed(d);

const row = (cells) => `| ${cells.join(' | ')} |`;
const table = (headers, aligns, rows) => [
  row(headers),
  row(aligns),
  ...rows.map(row),
].join('\n');

console.log(`# GSC raw data\n`);
console.log(`Site: \`${SITE}\``);
console.log(`Period: ${startDate} → ${endDate} (${DAYS} days)\n`);

if (totals[0]) {
  const t = totals[0];
  console.log(`## Totals\n`);
  console.log(`- Clicks: ${t.clicks}`);
  console.log(`- Impressions: ${t.impressions}`);
  console.log(`- CTR: ${pct(t.ctr)}`);
  console.log(`- Avg position: ${fix(t.position)}\n`);
}

const metricRows = (rows) => rows.map((r) => [
  r.keys[0],
  r.clicks,
  r.impressions,
  pct(r.ctr),
  fix(r.position),
]);

console.log(`## Top queries\n`);
console.log(table(
  ['Query', 'Clicks', 'Impressions', 'CTR', 'Position'],
  ['---', '---:', '---:', '---:', '---:'],
  metricRows(queries),
));

console.log(`\n## Top pages\n`);
console.log(table(
  ['Page', 'Clicks', 'Impressions', 'CTR', 'Position'],
  ['---', '---:', '---:', '---:', '---:'],
  metricRows(pages),
));

console.log(`\n## By country\n`);
console.log(table(
  ['Country', 'Clicks', 'Impressions', 'CTR', 'Position'],
  ['---', '---:', '---:', '---:', '---:'],
  metricRows(countries),
));

console.log(`\n## By device\n`);
console.log(table(
  ['Device', 'Clicks', 'Impressions', 'CTR', 'Position'],
  ['---', '---:', '---:', '---:', '---:'],
  metricRows(devices),
));

console.log(`\n## Daily\n`);
console.log(table(
  ['Date', 'Clicks', 'Impressions', 'CTR', 'Position'],
  ['---', '---:', '---:', '---:', '---:'],
  metricRows(dates),
));
