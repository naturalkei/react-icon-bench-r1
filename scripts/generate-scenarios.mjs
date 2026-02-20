import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'src/components/scenarios');
const counts = [50, 100, 200];

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function ensureCount(items, label, count) {
  if (items.length < count) {
    throw new Error(`${label}: expected at least ${count} items, got ${items.length}`);
  }
  return items.slice(0, count);
}

function uniq(items) {
  return [...new Set(items)];
}

function writeScenario(name, source) {
  fs.writeFileSync(path.join(outDir, `${name}.tsx`), source, 'utf8');
}

function buildBaseScenario(count) {
  return `'use client';\n\nexport function BaseScenario${count}() {\n  return (\n    <div className="icon-grid">\n      {Array.from({ length: ${count} }, (_, i) => (\n        <div key={i} className="icon-cell">\n          <span className="placeholder">item-{i + 1}</span>\n        </div>\n      ))}\n    </div>\n  );\n}\n`;
}

function buildLucideAliasMap() {
  const map = new Map();
  const src = read('node_modules/lucide-react/dist/esm/lucide-react.js');
  const re = /export \{([^}]+)\} from '\.\/icons\/([^']+)\.js';/g;
  for (const match of src.matchAll(re)) {
    const exportsPart = match[1];
    const iconFile = match[2];
    const absPath = path.join(root, 'node_modules/lucide-react/dist/esm/icons', `${iconFile}.js`);
    for (const token of exportsPart.split(',')) {
      const clean = token.trim();
      const m = clean.match(/^default as (\w+)$/);
      if (m) map.set(m[1], absPath);
    }
  }
  return map;
}

const lucideAliasMap = buildLucideAliasMap();
const lucideAll = uniq(Array.from(read('node_modules/lucide-react/dist/lucide-react.d.ts').matchAll(/declare const (\w+):/g), (m) => m[1]));

const heroiconsAll = fs
  .readdirSync(path.join(root, 'node_modules/@heroicons/react/24/outline'))
  .filter((f) => f.endsWith('.js') && f !== 'index.js')
  .map((f) => f.replace(/\.js$/, ''))
  .sort();

const radixAll = uniq(Array.from(read('node_modules/@radix-ui/react-icons/dist/index.d.ts').matchAll(/export \{ default as (\w+) \}/g), (m) => m[1]));

const phosphorAll = uniq(
  Array.from(read('node_modules/@phosphor-icons/react/dist/index.d.ts').matchAll(/export \* from '\.\/csr\/(\w+)'/g), (m) => m[1]).filter(
    (name) => !['Icon', 'IconContext', 'IconBase', 'IconWeight'].includes(name),
  ),
);

const reactIconsAll = uniq(Array.from(read('node_modules/react-icons/fa/index.d.ts').matchAll(/export declare const (\w+):/g), (m) => m[1]));

const iconifyAll = fs
  .readdirSync(path.join(root, 'node_modules/@iconify-icons/mdi'))
  .filter((f) => f.endsWith('.js') && f !== 'index.js')
  .map((f) => f.replace(/\.js$/, ''))
  .filter((name) => /^[a-z]/.test(name))
  .sort();

const manifest = {
  generatedAt: new Date().toISOString(),
  counts,
  scenarios: {},
};

for (const count of counts) {
  const lucideNames = ensureCount(lucideAll, 'lucide', count);
  const heroiconNames = ensureCount(heroiconsAll, 'heroicons', count);
  const radixNames = ensureCount(radixAll, 'radix', count);
  const phosphorNames = ensureCount(phosphorAll, 'phosphor', count);
  const reactIconsNames = ensureCount(reactIconsAll, 'react-icons', count);
  const iconifyFiles = ensureCount(iconifyAll, 'iconify', count);

  writeScenario(`base-${count}`, buildBaseScenario(count));

  writeScenario(
    `lucide-${count}`,
    `'use client';\n\nimport { ${lucideNames.join(', ')} } from 'lucide-react';\n\nconst icons = [${lucideNames.join(', ')}];\n\nexport function LucideScenario${count}() {\n  return (\n    <div className="icon-grid">\n      {icons.map((Icon, idx) => (\n        <div key={idx} className="icon-cell"><Icon size={20} /></div>\n      ))}\n    </div>\n  );\n}\n`,
  );

  writeScenario(
    `heroicons-${count}`,
    `'use client';\n\nimport { ${heroiconNames.join(', ')} } from '@heroicons/react/24/outline';\n\nconst icons = [${heroiconNames.join(', ')}];\n\nexport function HeroiconsScenario${count}() {\n  return (\n    <div className="icon-grid">\n      {icons.map((Icon, idx) => (\n        <div key={idx} className="icon-cell"><Icon width={20} height={20} /></div>\n      ))}\n    </div>\n  );\n}\n`,
  );

  writeScenario(
    `radix-${count}`,
    `'use client';\n\nimport { ${radixNames.join(', ')} } from '@radix-ui/react-icons';\n\nconst icons = [${radixNames.join(', ')}];\n\nexport function RadixScenario${count}() {\n  return (\n    <div className="icon-grid">\n      {icons.map((Icon, idx) => (\n        <div key={idx} className="icon-cell"><Icon width={20} height={20} /></div>\n      ))}\n    </div>\n  );\n}\n`,
  );

  writeScenario(
    `phosphor-${count}`,
    `'use client';\n\nimport { ${phosphorNames.join(', ')} } from '@phosphor-icons/react';\n\nconst icons = [${phosphorNames.join(', ')}];\n\nexport function PhosphorScenario${count}() {\n  return (\n    <div className="icon-grid">\n      {icons.map((Icon, idx) => (\n        <div key={idx} className="icon-cell"><Icon size={20} weight="regular" /></div>\n      ))}\n    </div>\n  );\n}\n`,
  );

  const iconifyImports = iconifyFiles.map((file, idx) => `import icon${idx} from '@iconify-icons/mdi/${file}.js';`).join('\n');
  const iconifyList = iconifyFiles.map((_, idx) => `icon${idx}`).join(', ');

  writeScenario(
    `iconify-${count}`,
    `'use client';\n\nimport { Icon } from '@iconify/react';\n${iconifyImports}\n\nconst icons = [${iconifyList}];\n\nexport function IconifyScenario${count}() {\n  return (\n    <div className="icon-grid">\n      {icons.map((iconData, idx) => (\n        <div key={idx} className="icon-cell"><Icon icon={iconData} width={20} height={20} /></div>\n      ))}\n    </div>\n  );\n}\n`,
  );

  writeScenario(
    `react-icons-${count}`,
    `'use client';\n\nimport { ${reactIconsNames.join(', ')} } from 'react-icons/fa';\n\nconst icons = [${reactIconsNames.join(', ')}];\n\nexport function ReactIconsScenario${count}() {\n  return (\n    <div className="icon-grid">\n      {icons.map((Icon, idx) => (\n        <div key={idx} className="icon-cell"><Icon size={20} /></div>\n      ))}\n    </div>\n  );\n}\n`,
  );

  manifest.scenarios[String(count)] = {
    base: {
      iconCount: count,
      sourceModules: [],
    },
    lucide: {
      iconCount: count,
      sourceModules: uniq(lucideNames.map((name) => lucideAliasMap.get(name)).filter(Boolean)),
    },
    heroicons: {
      iconCount: count,
      sourceModules: heroiconNames.map((name) => path.join(root, 'node_modules/@heroicons/react/24/outline', `${name}.js`)),
    },
    radix: {
      iconCount: count,
      sourceModules: [path.join(root, 'node_modules/@radix-ui/react-icons/dist/react-icons.esm.js')],
    },
    phosphor: {
      iconCount: count,
      sourceModules: phosphorNames.map((name) => path.join(root, 'node_modules/@phosphor-icons/react/dist/csr', `${name}.es.js`)),
    },
    iconify: {
      iconCount: count,
      sourceModules: iconifyFiles.map((name) => path.join(root, 'node_modules/@iconify-icons/mdi', `${name}.js`)),
    },
    'react-icons': {
      iconCount: count,
      sourceModules: [path.join(root, 'node_modules/react-icons/fa/index.mjs')],
    },
  };
}

fs.writeFileSync(path.join(root, 'benchmark-scenario-manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
console.log('Generated scenarios with 50/100/200 icons each.');
