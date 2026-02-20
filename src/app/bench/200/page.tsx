import Link from 'next/link';

const links = [
  { href: '/bench/200/base', label: 'Base (no icons)' },
  { href: '/bench/200/lucide', label: 'Lucide' },
  { href: '/bench/200/heroicons', label: 'Heroicons' },
  { href: '/bench/200/radix', label: 'Radix Icons' },
  { href: '/bench/200/phosphor', label: 'Phosphor' },
  { href: '/bench/200/iconify', label: 'Iconify' },
  { href: '/bench/200/react-icons', label: 'react-icons' },
];

export default function Bench200IndexPage() {
  return (
    <main className="page-wrap">
      <h1>200 Icons Scenario</h1>
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
