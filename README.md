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
4. Write `BENCHMARK_RESULTS.md`.
5. Update the tables below.

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

| Library | Route chunk gzip (KB) | Delta vs base (KB) |
|---|---:|---:|
| lucide | 169.48 | 5.16 |
| heroicons | 167.81 | 3.49 |
| radix | 227.45 | 63.13 |
| phosphor | 198.23 | 33.91 |
| iconify | 175.85 | 11.53 |
| react-icons | 245.39 | 81.07 |

### 100 Icons

| Library | Route chunk gzip (KB) | Delta vs base (KB) |
|---|---:|---:|
| lucide | 172.90 | 8.58 |
| heroicons | 173.55 | 9.23 |
| radix | 227.70 | 63.37 |
| phosphor | 213.00 | 48.68 |
| iconify | 182.00 | 17.67 |
| react-icons | 245.66 | 81.34 |

### 200 Icons

| Library | Route chunk gzip (KB) | Delta vs base (KB) |
|---|---:|---:|
| lucide | 180.05 | 15.72 |
| heroicons | 183.42 | 19.09 |
| radix | 228.19 | 63.86 |
| phosphor | 266.59 | 102.27 |
| iconify | 190.45 | 26.13 |
| react-icons | 246.14 | 81.82 |

Last updated: 2026-02-20T11:06:54.534Z

<!-- BENCHMARK_RESULTS_END -->
