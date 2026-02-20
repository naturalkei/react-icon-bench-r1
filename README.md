# react-icon-bench-r1

Next.js 16 benchmark project that compares bundle impact of importing **50 icons** in a Client Component across:

- lucide-react
- @heroicons/react
- @radix-ui/react-icons
- @phosphor-icons/react
- @iconify/react + @iconify-icons/mdi
- react-icons

## Run

```bash
pnpm install
pnpm bench
```

This command will:

1. Regenerate scenario components from package exports.
2. Run `next build`.
3. Measure gzip size of route-specific page chunk(s).
4. Write `BENCHMARK_RESULTS.md`.
5. Update the table below.

## Routes

- `/bench/base`
- `/bench/lucide`
- `/bench/heroicons`
- `/bench/radix`
- `/bench/phosphor`
- `/bench/iconify`
- `/bench/react-icons`

## Latest Results

<!-- BENCHMARK_RESULTS_START -->

| Library | Route chunk gzip (KB) | Delta vs base (KB) |
|---|---:|---:|
| lucide | 167.97 | 3.66 |
| heroicons | 166.30 | 1.99 |
| radix | 174.44 | 10.13 |
| phosphor | 196.73 | 32.42 |
| iconify | 174.75 | 10.44 |
| react-icons | 183.59 | 19.28 |

Last updated: 2026-02-20T11:00:13.446Z

<!-- BENCHMARK_RESULTS_END -->
