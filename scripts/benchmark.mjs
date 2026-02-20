import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = process.cwd();
const counts = [50, 100, 200];
const libraries = ['lucide', 'heroicons', 'radix', 'phosphor', 'iconify', 'react-icons'];
const colors = {
  lucide: '#1f77b4',
  heroicons: '#ff7f0e',
  radix: '#2ca02c',
  phosphor: '#d62728',
  iconify: '#9467bd',
  'react-icons': '#8c564b',
};

function gzipSizeBytes(buf) {
  return zlib.gzipSync(buf).length;
}

function routeChunkFiles(routePath) {
  const htmlPath = path.join(root, '.next/server/app/bench', `${routePath}.html`);
  if (!fs.existsSync(htmlPath)) return [];
  const html = fs.readFileSync(htmlPath, 'utf8');
  const matches = Array.from(html.matchAll(/\/_next\/static\/chunks\/([^"']+\.js)/g), (m) => m[1]);
  const unique = [...new Set(matches)];
  return unique
    .map((file) => path.join(root, '.next/static/chunks', file))
    .filter((fullPath) => fs.existsSync(fullPath));
}

function sourceMetrics(sourceModules) {
  const unique = [...new Set(sourceModules)];
  const existing = unique.filter((p) => fs.existsSync(p));
  const missing = unique.filter((p) => !fs.existsSync(p));
  const rawBytes = existing.reduce((sum, p) => sum + fs.statSync(p).size, 0);
  const combined = Buffer.concat(existing.map((p) => fs.readFileSync(p)));
  const gzipBytes = combined.length > 0 ? gzipSizeBytes(combined) : 0;
  return {
    moduleCount: existing.length,
    missingModules: missing,
    rawBytes,
    gzipBytes,
  };
}

function kb(bytes) {
  return (bytes / 1024).toFixed(2);
}

function ratio(numerator, denominator) {
  if (!denominator) return 'n/a';
  return (numerator / denominator).toFixed(2);
}

function perIconBytes(bytes, iconCount) {
  if (!iconCount) return 'n/a';
  return (bytes / iconCount).toFixed(1);
}

function escapeXml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function buildScatterPlotSvg(count, points) {
  const width = 720;
  const height = 720;
  const margin = { top: 70, right: 60, bottom: 90, left: 100 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const plotSize = Math.min(innerWidth, innerHeight);
  const plotLeft = margin.left + (innerWidth - plotSize) / 2;
  const plotTop = margin.top + (innerHeight - plotSize) / 2;

  // Keep both axes on the same scale so the 1:1 line is visually accurate.
  const unifiedMax = Math.max(1, ...points.flatMap((p) => [p.sourceGzipKB, p.deltaKB])) * 1.1;
  const maxX = unifiedMax;
  const maxY = unifiedMax;
  const tickCount = 5;

  const x = (value) => plotLeft + (value / maxX) * plotSize;
  const y = (value) => plotTop + plotSize - (value / maxY) * plotSize;

  const xTicks = Array.from({ length: tickCount + 1 }, (_, i) => (maxX * i) / tickCount);
  const yTicks = Array.from({ length: tickCount + 1 }, (_, i) => (maxY * i) / tickCount);

  const gridX = xTicks
    .map((tick) => `<line x1="${x(tick).toFixed(2)}" y1="${plotTop}" x2="${x(tick).toFixed(2)}" y2="${plotTop + plotSize}" stroke="#e5e7eb" stroke-width="1"/>`)
    .join('');
  const gridY = yTicks
    .map((tick) => `<line x1="${plotLeft}" y1="${y(tick).toFixed(2)}" x2="${plotLeft + plotSize}" y2="${y(tick).toFixed(2)}" stroke="#e5e7eb" stroke-width="1"/>`)
    .join('');

  const tickLabelsX = xTicks
    .map((tick) => `<text x="${x(tick).toFixed(2)}" y="${height - 28}" text-anchor="middle" font-size="12" fill="#374151">${tick.toFixed(1)}</text>`)
    .join('');
  const tickLabelsY = yTicks
    .map((tick) => `<text x="${plotLeft - 10}" y="${(y(tick) + 4).toFixed(2)}" text-anchor="end" font-size="12" fill="#374151">${tick.toFixed(1)}</text>`)
    .join('');

  const pointMarks = points
    .map((p) => {
      const cx = x(p.sourceGzipKB).toFixed(2);
      const cy = y(p.deltaKB).toFixed(2);
      const label = escapeXml(`${p.lib} (${p.sourceGzipKB.toFixed(2)}, ${p.deltaKB.toFixed(2)})`);
      const color = colors[p.lib] || '#111827';
      return [
        `<circle cx="${cx}" cy="${cy}" r="7" fill="${color}" opacity="0.9"/>`,
        `<text x="${(Number(cx) + 10).toFixed(2)}" y="${(Number(cy) - 10).toFixed(2)}" font-size="12" fill="#111827">${label}</text>`,
      ].join('');
    })
    .join('');

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Scatter plot for ${count} icons">`,
    `<rect x="0" y="0" width="${width}" height="${height}" fill="#ffffff"/>`,
    `<text x="${width / 2}" y="28" text-anchor="middle" font-size="18" fill="#111827">Scatter Plot (${count} icons): Bundle Delta vs Source Gzip</text>`,
    gridX,
    gridY,
    `<line x1="${plotLeft}" y1="${plotTop + plotSize}" x2="${plotLeft + plotSize}" y2="${plotTop + plotSize}" stroke="#111827" stroke-width="1.5"/>`,
    `<line x1="${plotLeft}" y1="${plotTop}" x2="${plotLeft}" y2="${plotTop + plotSize}" stroke="#111827" stroke-width="1.5"/>`,
    `<line x1="${x(0).toFixed(2)}" y1="${y(0).toFixed(2)}" x2="${x(unifiedMax).toFixed(2)}" y2="${y(unifiedMax).toFixed(2)}" stroke="#6b7280" stroke-width="2" stroke-dasharray="7 6"/>`,
    `<text x="${(x(unifiedMax) - 8).toFixed(2)}" y="${(y(unifiedMax) + 18).toFixed(2)}" text-anchor="end" font-size="12" fill="#4b5563">Ideal 1:1 Ratio</text>`,
    tickLabelsX,
    tickLabelsY,
    `<text x="${plotLeft + plotSize / 2}" y="${height - 20}" text-anchor="middle" font-size="13" fill="#111827">Source Gzip (KB)</text>`,
    `<text x="24" y="${plotTop + plotSize / 2}" text-anchor="middle" font-size="13" fill="#111827" transform="rotate(-90 24 ${plotTop + plotSize / 2})">Bundle Delta vs Base (KB)</text>`,
    pointMarks,
    '</svg>',
  ].join('');
}

console.log('Generating scenarios...');
execSync('node scripts/generate-scenarios.mjs', { stdio: 'inherit' });

const manifestPath = path.join(root, 'benchmark-scenario-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

console.log('Building Next.js app...');
execSync('pnpm next build', { stdio: 'inherit' });

const raw = {};
for (const count of counts) {
  raw[count] = {};
  const allTargets = ['base', ...libraries];
  for (const lib of allTargets) {
    const routePath = `${count}/${lib}`;
    const files = routeChunkFiles(routePath);
    const bundleGzipBytes = files.reduce((sum, f) => sum + gzipSizeBytes(fs.readFileSync(f)), 0);
    const scenarioManifest = manifest.scenarios?.[String(count)]?.[lib] ?? { iconCount: count, sourceModules: [] };
    const source = sourceMetrics(scenarioManifest.sourceModules || []);
    raw[count][lib] = {
      route: `/bench/${routePath}`,
      iconCount: scenarioManifest.iconCount || count,
      files: files.map((f) => path.relative(root, f)),
      bundleGzipBytes,
      source,
    };
  }
}

const generatedAt = new Date().toISOString();
const tableSections = [];
const tableSectionsWithPlots = [];
const plotsDir = path.join(root, 'benchmark-plots');
fs.mkdirSync(plotsDir, { recursive: true });

for (const count of counts) {
  const baseline = raw[count].base.bundleGzipBytes;
  const rows = libraries.map((lib) => {
    const item = raw[count][lib];
    const delta = item.bundleGzipBytes - baseline;
    return `| ${lib} | ${item.source.moduleCount} | ${kb(item.source.rawBytes)} | ${kb(item.source.gzipBytes)} | ${kb(delta)} | ${perIconBytes(delta, item.iconCount)} | ${ratio(delta, item.source.gzipBytes)}x |`;
  });
  const points = libraries.map((lib) => {
    const item = raw[count][lib];
    const delta = item.bundleGzipBytes - baseline;
    return {
      lib,
      sourceGzipKB: item.source.gzipBytes / 1024,
      deltaKB: delta / 1024,
    };
  });
  const plotRelPath = `benchmark-plots/scatter-${count}.svg`;
  fs.writeFileSync(path.join(root, plotRelPath), buildScatterPlotSvg(count, points), 'utf8');

  const tableBlock = [
    `### ${count} Icons`,
    '',
    '| Library | Source modules | Source raw (KB) | Source gzip (KB) | Bundle delta vs base (KB) | Delta/icon (B) | Delta/Source(gzip) |',
    '|---|---:|---:|---:|---:|---:|---:|',
    ...rows,
  ].join('\n');
  tableSections.push(tableBlock);
  tableSectionsWithPlots.push([
    tableBlock,
    '',
    `![Scatter plot for ${count} icons (x: Source Gzip KB, y: Bundle Delta KB)](${plotRelPath})`,
  ].join('\n'));
}

const combinedTables = tableSections.join('\n\n');
const combinedTablesWithPlots = tableSectionsWithPlots.join('\n\n');

const resultsDoc = [
  '# Benchmark Results',
  '',
  `Generated at: ${generatedAt}`,
  '',
  'Environment:',
  '- Next.js 16.1.6',
  '- React 19.2.3',
  '- Node.js ' + process.version,
  '- Bundler: Turbopack (next build default in this setup)',
  '',
  'Method:',
  '- Per count (50/100/200), one route per library with static icon imports in a Client Component',
  '- Baseline route renders same count of non-icon placeholders',
  '- Bundle metric = gzip size of JS chunks referenced by each prerendered route HTML',
  '- Source metric = total raw/gzip size of icon source modules selected by each scenario',
  '',
  combinedTablesWithPlots,
  '',
  'Raw files by count and route:',
  '```json',
  JSON.stringify(raw, null, 2),
  '```',
  '',
].join('\n');

fs.writeFileSync(path.join(root, 'BENCHMARK_RESULTS.md'), resultsDoc, 'utf8');

const readmePath = path.join(root, 'README.md');
const readme = fs.readFileSync(readmePath, 'utf8');
const start = '<!-- BENCHMARK_RESULTS_START -->';
const end = '<!-- BENCHMARK_RESULTS_END -->';
const replacement = `${start}\n\n${combinedTables}\n\nLast updated: ${generatedAt}\n\n${end}`;

let nextReadme;
if (readme.includes(start) && readme.includes(end)) {
  nextReadme = readme.replace(new RegExp(`${start}[\\s\\S]*${end}`), replacement);
} else {
  nextReadme = `${readme}\n\n## Latest Results\n\n${replacement}\n`;
}

fs.writeFileSync(readmePath, nextReadme, 'utf8');
console.log('Wrote BENCHMARK_RESULTS.md and updated README.md');
