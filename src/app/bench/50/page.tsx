import Link from 'next/link';

const links = [
  { href: '/bench/50/base', label: 'Base (no icons)' },
  { href: '/bench/50/lucide', label: 'Lucide' },
  { href: '/bench/50/heroicons', label: 'Heroicons' },
  { href: '/bench/50/radix', label: 'Radix Icons' },
  { href: '/bench/50/phosphor', label: 'Phosphor' },
  { href: '/bench/50/iconify', label: 'Iconify' },
  { href: '/bench/50/react-icons', label: 'react-icons' },
];

export default function Bench50IndexPage() {
  return (
    <main className="page-wrap">
      <h1>50 Icons Scenario</h1>
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
