# react-icon-bench-r1

This is the official benchmark repository for the Medium article: [The Hidden Bundle Cost of React Icons: Why Lucide Wins in 2026](https://medium.nkcroft.com/the-hidden-bundle-cost-of-react-icons-why-lucide-wins-in-2026-1ddb74c1a86c)

Next.js 16 benchmark project that compares bundle impact of importing icons in a Client Component across:

- lucide-react
- @heroicons/react
- @radix-ui/react-icons
- @phosphor-icons/react
- @iconify/react + @iconify-icons/mdi
- react-icons

Scenarios included:

- 50 icons
- 100 icons
- 200 icons

## Run

```bash
pnpm install
pnpm bench
```

This command will:

1. Regenerate scenario components from package exports.
2. Run `next build`.
3. Measure gzip size of route-specific JS chunks.
4. Measure icon source module size (raw/gzip) per scenario.
5. Write `BENCHMARK_RESULTS.md`.
6. Update the tables below.

## Routes

- `/bench/50`
- `/bench/100`
- `/bench/200`

Each scenario contains:

- `/base`
- `/lucide`
- `/heroicons`
- `/radix`
- `/phosphor`
- `/iconify`
- `/react-icons`

## Latest Results

<!-- BENCHMARK_RESULTS_START -->

### 50 Icons

| Library | Source modules | Source raw (KB) | Source gzip (KB) | Bundle delta vs base (KB) | Delta/icon (B) | Delta/Source(gzip) |
|---|---:|---:|---:|---:|---:|---:|
| lucide | 50 | 34.27 | 4.33 | 5.16 | 105.7 | 1.19x |
| heroicons | 50 | 41.27 | 2.75 | 3.49 | 71.4 | 1.27x |
| radix | 1 | 481.36 | 100.47 | 63.13 | 1292.9 | 0.63x |
| phosphor | 50 | 15.71 | 1.84 | 33.91 | 694.4 | 18.40x |
| iconify | 50 | 20.00 | 3.93 | 11.53 | 236.0 | 2.93x |
| react-icons | 1 | 1333.08 | 418.85 | 81.07 | 1660.2 | 0.19x |

### 100 Icons

| Library | Source modules | Source raw (KB) | Source gzip (KB) | Bundle delta vs base (KB) | Delta/icon (B) | Delta/Source(gzip) |
|---|---:|---:|---:|---:|---:|---:|
| lucide | 100 | 64.43 | 7.13 | 8.58 | 87.9 | 1.20x |
| heroicons | 100 | 88.12 | 7.47 | 9.23 | 94.5 | 1.23x |
| radix | 1 | 481.36 | 100.47 | 63.37 | 649.0 | 0.63x |
| phosphor | 100 | 31.85 | 2.91 | 48.68 | 498.4 | 16.72x |
| iconify | 100 | 41.71 | 8.66 | 17.67 | 181.0 | 2.04x |
| react-icons | 1 | 1333.08 | 418.85 | 81.34 | 832.9 | 0.19x |

### 200 Icons

| Library | Source modules | Source raw (KB) | Source gzip (KB) | Bundle delta vs base (KB) | Delta/icon (B) | Delta/Source(gzip) |
|---|---:|---:|---:|---:|---:|---:|
| lucide | 200 | 133.01 | 15.56 | 15.72 | 80.5 | 1.01x |
| heroicons | 200 | 187.39 | 17.64 | 19.09 | 97.8 | 1.08x |
| radix | 1 | 481.36 | 100.47 | 63.86 | 327.0 | 0.64x |
| phosphor | 200 | 62.75 | 5.66 | 102.27 | 523.6 | 18.06x |
| iconify | 200 | 86.56 | 15.89 | 26.13 | 133.8 | 1.64x |
| react-icons | 1 | 1333.08 | 418.85 | 81.82 | 418.9 | 0.20x |

Last updated: 2026-02-20T15:03:26.356Z

<!-- BENCHMARK_RESULTS_END -->
