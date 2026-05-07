import { BetaAnalyticsDataClient } from '@google-analytics/data';

const PROPERTY_ID = process.env.GA4_PROPERTY_ID;
const credentials = JSON.parse(process.env.GA4_SERVICE_ACCOUNT_KEY);

const ga = new BetaAnalyticsDataClient({ credentials });
const property = `properties/${PROPERTY_ID}`;
const dateRanges = [{ startDate: '30daysAgo', endDate: 'yesterday' }];

const pagesReport = () => ga.runReport({
  property,
  dateRanges,
  dimensions: [{ name: 'pagePath' }],
  metrics: [
    { name: 'sessions' },
    { name: 'screenPageViews' },
    { name: 'engagementRate' },
    { name: 'averageSessionDuration' },
  ],
  orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  limit: 20,
}).then(([r]) => r);

const eventsReport = () => ga.runReport({
  property,
  dateRanges,
  dimensions: [{ name: 'eventName' }],
  metrics: [{ name: 'eventCount' }],
  orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
  limit: 30,
}).then(([r]) => r);

const sourcesReport = () => ga.runReport({
  property,
  dateRanges,
  dimensions: [
    { name: 'sessionDefaultChannelGroup' },
    { name: 'sessionSource' },
  ],
  metrics: [{ name: 'sessions' }, { name: 'engagementRate' }],
  orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  limit: 15,
}).then(([r]) => r);

function formatTable(report) {
  const headers = [
    ...report.dimensionHeaders.map((h) => h.name),
    ...report.metricHeaders.map((h) => h.name),
  ];
  const rows = (report.rows || []).map((r) => [
    ...r.dimensionValues.map((d) => d.value),
    ...r.metricValues.map((m) => Number(m.value).toFixed(m.value.includes('.') ? 3 : 0)),
  ]);
  const head = `| ${headers.join(' | ')} |`;
  const sep = `|${headers.map(() => '---').join('|')}|`;
  const body = rows.map((r) => `| ${r.join(' | ')} |`).join('\n');
  return [head, sep, body].join('\n');
}

const today = new Date().toISOString().slice(0, 10);
const [pages, events, sources] = await Promise.all([
  pagesReport(),
  eventsReport(),
  sourcesReport(),
]);

process.stdout.write([
  `# GA4 data — ${today}`,
  '',
  '**Window:** last 30 days',
  '',
  '## Top pages',
  formatTable(pages),
  '',
  '## Events',
  formatTable(events),
  '',
  '## Traffic sources',
  formatTable(sources),
  '',
].join('\n'));
