import Link from 'next/link';

export default function Home() {
  return (
    <main className="page-wrap">
      <h1>React Icon Bench R1</h1>
      <p>50/100/200 icon import benchmark scenarios in Next.js 16.</p>
      <ul className="link-list">
        <li><Link href="/bench/50">50 icons</Link></li>
        <li><Link href="/bench/100">100 icons</Link></li>
        <li><Link href="/bench/200">200 icons</Link></li>
      </ul>
      <p>
        Run <code>pnpm bench</code> to build and update benchmark results in README.
      </p>
    </main>
  );
}
