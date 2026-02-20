import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = process.cwd();
const routes = ['base', 'lucide', 'heroicons', 'radix', 'phosphor', 'iconify', 'react-icons'];

function gzipSize(filePath) {
  const buf = fs.readFileSync(filePath);
  return zlib.gzipSync(buf).length;
}

function routeChunkFiles(route) {
  const htmlPath = path.join(root, '.next/server/app/bench', `${route}.html`);
  if (!fs.existsSync(htmlPath)) return [];
  const html = fs.readFileSync(htmlPath, 'utf8');
  const matches = Array.from(html.matchAll(/\/_next\/static\/chunks\/([^"']+\.js)/g), (m) => m[1]);
  const unique = [...new Set(matches)];
  return unique
    .map((file) => path.join(root, '.next/static/chunks', file))
    .filter((fullPath) => fs.existsSync(fullPath));
}

function kb(bytes) {
  return (bytes / 1024).toFixed(2);
}

console.log('Generating scenarios...');
execSync('node scripts/generate-scenarios.mjs', { stdio: 'inherit' });

console.log('Building Next.js app...');
execSync('pnpm next build', { stdio: 'inherit' });

const raw = {};
for (const route of routes) {
  const files = routeChunkFiles(route);
  const size = files.reduce((sum, f) => sum + gzipSize(f), 0);
  raw[route] = { files: files.map((f) => path.relative(root, f)), gzipBytes: size };
}

const baseline = raw.base.gzipBytes;
const rows = routes.filter((r) => r !== 'base').map((route) => {
  const bytes = raw[route].gzipBytes;
  return {
    route,
    pageGzipKB: kb(bytes),
    deltaKB: kb(bytes - baseline),
  };
});

const generatedAt = new Date().toISOString();

const table = [
  '| Library | Route chunk gzip (KB) | Delta vs base (KB) |',
  '|---|---:|---:|',
  ...rows.map((r) => `| ${r.route} | ${r.pageGzipKB} | ${r.deltaKB} |`),
].join('\n');

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
  '- One route per library with 50 static icon imports in a Client Component',
  '- Baseline route renders 50 non-icon placeholders',
  '- Metric = gzip size of JS chunks referenced by each prerendered route HTML',
  '',
  table,
  '',
  'Raw files by route:',
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
const replacement = `${start}\n\n${table}\n\nLast updated: ${generatedAt}\n\n${end}`;

let nextReadme;
if (readme.includes(start) && readme.includes(end)) {
  nextReadme = readme.replace(new RegExp(`${start}[\\s\\S]*${end}`), replacement);
} else {
  nextReadme = `${readme}\n\n## Latest Results\n\n${replacement}\n`;
}

fs.writeFileSync(readmePath, nextReadme, 'utf8');
console.log('Wrote BENCHMARK_RESULTS.md and updated README.md');
