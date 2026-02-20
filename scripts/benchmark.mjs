import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = process.cwd();
const counts = [50, 100, 200];
const libraries = ['lucide', 'heroicons', 'radix', 'phosphor', 'iconify', 'react-icons'];

function gzipSize(filePath) {
  const buf = fs.readFileSync(filePath);
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

function kb(bytes) {
  return (bytes / 1024).toFixed(2);
}

console.log('Generating scenarios...');
execSync('node scripts/generate-scenarios.mjs', { stdio: 'inherit' });

console.log('Building Next.js app...');
execSync('pnpm next build', { stdio: 'inherit' });

const raw = {};
for (const count of counts) {
  raw[count] = {};
  const allTargets = ['base', ...libraries];
  for (const lib of allTargets) {
    const routePath = `${count}/${lib}`;
    const files = routeChunkFiles(routePath);
    const size = files.reduce((sum, f) => sum + gzipSize(f), 0);
    raw[count][lib] = {
      route: `/bench/${routePath}`,
      files: files.map((f) => path.relative(root, f)),
      gzipBytes: size,
    };
  }
}

const generatedAt = new Date().toISOString();
const tableSections = [];

for (const count of counts) {
  const baseline = raw[count].base.gzipBytes;
  const rows = libraries.map((lib) => {
    const bytes = raw[count][lib].gzipBytes;
    return `| ${lib} | ${kb(bytes)} | ${kb(bytes - baseline)} |`;
  });
  tableSections.push([
    `### ${count} Icons`,
    '',
    '| Library | Route chunk gzip (KB) | Delta vs base (KB) |',
    '|---|---:|---:|',
    ...rows,
  ].join('\n'));
}

const combinedTables = tableSections.join('\n\n');

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
  '- Metric = gzip size of JS chunks referenced by each prerendered route HTML',
  '',
  combinedTables,
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
