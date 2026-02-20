import Link from 'next/link';

const links = [
  { href: '/bench/base', label: 'Base (no icons)' },
  { href: '/bench/lucide', label: 'Lucide' },
  { href: '/bench/heroicons', label: 'Heroicons' },
  { href: '/bench/radix', label: 'Radix Icons' },
  { href: '/bench/phosphor', label: 'Phosphor' },
  { href: '/bench/iconify', label: 'Iconify' },
  { href: '/bench/react-icons', label: 'react-icons' },
];

export default function BenchIndexPage() {
  return (
    <main className="page-wrap">
      <h1>Benchmark Routes</h1>
      <ul className="link-list">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
