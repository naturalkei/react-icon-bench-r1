import Link from 'next/link';

const links = [
  { href: '/bench/100/base', label: 'Base (no icons)' },
  { href: '/bench/100/lucide', label: 'Lucide' },
  { href: '/bench/100/heroicons', label: 'Heroicons' },
  { href: '/bench/100/radix', label: 'Radix Icons' },
  { href: '/bench/100/phosphor', label: 'Phosphor' },
  { href: '/bench/100/iconify', label: 'Iconify' },
  { href: '/bench/100/react-icons', label: 'react-icons' },
];

export default function Bench100IndexPage() {
  return (
    <main className="page-wrap">
      <h1>100 Icons Scenario</h1>
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
