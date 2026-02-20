import Link from 'next/link';

export default function BenchIndexPage() {
  return (
    <main className="page-wrap">
      <h1>Benchmark Scenarios</h1>
      <ul className="link-list">
        <li><Link href="/bench/50">50 icons</Link></li>
        <li><Link href="/bench/100">100 icons</Link></li>
        <li><Link href="/bench/200">200 icons</Link></li>
      </ul>
    </main>
  );
}
