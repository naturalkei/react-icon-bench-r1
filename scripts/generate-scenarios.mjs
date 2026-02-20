import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'src/components/scenarios');

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function ensure50(items, label) {
  if (items.length < 50) {
    throw new Error(`${label}: expected at least 50 items, got ${items.length}`);
  }
  return items.slice(0, 50);
}

function uniq(items) {
  return [...new Set(items)];
}

const lucideNames = ensure50(
  uniq(Array.from(read('node_modules/lucide-react/dist/lucide-react.d.ts').matchAll(/declare const (\w+):/g), (m) => m[1])),
  'lucide',
);

const heroiconNames = ensure50(
  fs
    .readdirSync(path.join(root, 'node_modules/@heroicons/react/24/outline'))
    .filter((f) => f.endsWith('.js') && f !== 'index.js')
    .map((f) => f.replace(/\.js$/, ''))
    .sort(),
  'heroicons',
);

const radixNames = ensure50(
  uniq(Array.from(read('node_modules/@radix-ui/react-icons/dist/index.d.ts').matchAll(/export \{ default as (\w+) \}/g), (m) => m[1])),
  'radix',
);

const phosphorNames = ensure50(
  uniq(
    Array.from(read('node_modules/@phosphor-icons/react/dist/index.d.ts').matchAll(/export \* from '\.\/csr\/(\w+)'/g), (m) => m[1]).filter(
      (name) => !['Icon', 'IconContext', 'IconBase', 'IconWeight'].includes(name),
    ),
  ),
  'phosphor',
);

const reactIconsNames = ensure50(
  uniq(Array.from(read('node_modules/react-icons/fa/index.d.ts').matchAll(/export declare const (\w+):/g), (m) => m[1])),
  'react-icons',
);

const iconifyFiles = ensure50(
  fs
    .readdirSync(path.join(root, 'node_modules/@iconify-icons/mdi'))
    .filter((f) => f.endsWith('.js') && f !== 'index.js')
    .map((f) => f.replace(/\.js$/, ''))
    .filter((name) => /^[a-z]/.test(name))
    .sort(),
  'iconify',
);

function writeScenario(name, source) {
  fs.writeFileSync(path.join(outDir, `${name}.tsx`), source, 'utf8');
}

writeScenario(
  'base',
  `'use client';\n\nexport function BaseScenario() {\n  return (\n    <div className="icon-grid">\n      {Array.from({ length: 50 }, (_, i) => (\n        <div key={i} className="icon-cell">\n          <span className="placeholder">item-{i + 1}</span>\n        </div>\n      ))}\n    </div>\n  );\n}\n`,
);

writeScenario(
  'lucide',
  `'use client';\n\nimport { ${lucideNames.join(', ')} } from 'lucide-react';\n\nconst icons = [${lucideNames.join(', ')}];\n\nexport function LucideScenario() {\n  return (\n    <div className="icon-grid">\n      {icons.map((Icon, idx) => (\n        <div key={idx} className="icon-cell"><Icon size={20} /></div>\n      ))}\n    </div>\n  );\n}\n`,
);

writeScenario(
  'heroicons',
  `'use client';\n\nimport { ${heroiconNames.join(', ')} } from '@heroicons/react/24/outline';\n\nconst icons = [${heroiconNames.join(', ')}];\n\nexport function HeroiconsScenario() {\n  return (\n    <div className="icon-grid">\n      {icons.map((Icon, idx) => (\n        <div key={idx} className="icon-cell"><Icon width={20} height={20} /></div>\n      ))}\n    </div>\n  );\n}\n`,
);

writeScenario(
  'radix',
  `'use client';\n\nimport { ${radixNames.join(', ')} } from '@radix-ui/react-icons';\n\nconst icons = [${radixNames.join(', ')}];\n\nexport function RadixScenario() {\n  return (\n    <div className="icon-grid">\n      {icons.map((Icon, idx) => (\n        <div key={idx} className="icon-cell"><Icon width={20} height={20} /></div>\n      ))}\n    </div>\n  );\n}\n`,
);

writeScenario(
  'phosphor',
  `'use client';\n\nimport { ${phosphorNames.join(', ')} } from '@phosphor-icons/react';\n\nconst icons = [${phosphorNames.join(', ')}];\n\nexport function PhosphorScenario() {\n  return (\n    <div className="icon-grid">\n      {icons.map((Icon, idx) => (\n        <div key={idx} className="icon-cell"><Icon size={20} weight="regular" /></div>\n      ))}\n    </div>\n  );\n}\n`,
);

const iconifyImports = iconifyFiles
  .map((file, idx) => `import icon${idx} from '@iconify-icons/mdi/${file}.js';`)
  .join('\n');

const iconifyList = iconifyFiles.map((_, idx) => `icon${idx}`).join(', ');

writeScenario(
  'iconify',
  `'use client';\n\nimport { Icon } from '@iconify/react';\n${iconifyImports}\n\nconst icons = [${iconifyList}];\n\nexport function IconifyScenario() {\n  return (\n    <div className="icon-grid">\n      {icons.map((iconData, idx) => (\n        <div key={idx} className="icon-cell"><Icon icon={iconData} width={20} height={20} /></div>\n      ))}\n    </div>\n  );\n}\n`,
);

writeScenario(
  'react-icons',
  `'use client';\n\nimport { ${reactIconsNames.join(', ')} } from 'react-icons/fa';\n\nconst icons = [${reactIconsNames.join(', ')}];\n\nexport function ReactIconsScenario() {\n  return (\n    <div className="icon-grid">\n      {icons.map((Icon, idx) => (\n        <div key={idx} className="icon-cell"><Icon size={20} /></div>\n      ))}\n    </div>\n  );\n}\n`,
);

console.log('Generated scenarios with 50 icons each.');
