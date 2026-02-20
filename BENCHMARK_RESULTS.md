# Benchmark Results

Generated at: 2026-02-20T11:00:13.446Z

Environment:
- Next.js 16.1.6
- React 19.2.3
- Node.js v25.6.1
- Bundler: Turbopack (next build default in this setup)

Method:
- One route per library with 50 static icon imports in a Client Component
- Baseline route renders 50 non-icon placeholders
- Metric = gzip size of JS chunks referenced by each prerendered route HTML

| Library | Route chunk gzip (KB) | Delta vs base (KB) |
|---|---:|---:|
| lucide | 167.97 | 3.66 |
| heroicons | 166.30 | 1.99 |
| radix | 174.44 | 10.13 |
| phosphor | 196.73 | 32.42 |
| iconify | 174.75 | 10.44 |
| react-icons | 183.59 | 19.28 |

Raw files by route:
```json
{
  "base": {
    "files": [
      ".next/static/chunks/baab7208d424059e.js",
      ".next/static/chunks/5faeea72d2e78ff5.js",
      ".next/static/chunks/e2012a6875502a0a.js",
      ".next/static/chunks/8b72cfc40036c827.js",
      ".next/static/chunks/turbopack-5f7c41038ebd09e1.js",
      ".next/static/chunks/33074d3ff5d0cd2d.js",
      ".next/static/chunks/c4d90098b4abc498.js",
      ".next/static/chunks/bac48aeae1f43f6b.js",
      ".next/static/chunks/a6dad97d9634a72d.js"
    ],
    "gzipBytes": 168253
  },
  "lucide": {
    "files": [
      ".next/static/chunks/baab7208d424059e.js",
      ".next/static/chunks/5faeea72d2e78ff5.js",
      ".next/static/chunks/e2012a6875502a0a.js",
      ".next/static/chunks/8b72cfc40036c827.js",
      ".next/static/chunks/turbopack-5f7c41038ebd09e1.js",
      ".next/static/chunks/33074d3ff5d0cd2d.js",
      ".next/static/chunks/c4d90098b4abc498.js",
      ".next/static/chunks/86d7598fa4832649.js",
      ".next/static/chunks/a6dad97d9634a72d.js"
    ],
    "gzipBytes": 172004
  },
  "heroicons": {
    "files": [
      ".next/static/chunks/baab7208d424059e.js",
      ".next/static/chunks/5faeea72d2e78ff5.js",
      ".next/static/chunks/e2012a6875502a0a.js",
      ".next/static/chunks/8b72cfc40036c827.js",
      ".next/static/chunks/turbopack-5f7c41038ebd09e1.js",
      ".next/static/chunks/33074d3ff5d0cd2d.js",
      ".next/static/chunks/c4d90098b4abc498.js",
      ".next/static/chunks/6b9b1da1490e1f59.js",
      ".next/static/chunks/a6dad97d9634a72d.js"
    ],
    "gzipBytes": 170288
  },
  "radix": {
    "files": [
      ".next/static/chunks/baab7208d424059e.js",
      ".next/static/chunks/5faeea72d2e78ff5.js",
      ".next/static/chunks/e2012a6875502a0a.js",
      ".next/static/chunks/8b72cfc40036c827.js",
      ".next/static/chunks/turbopack-5f7c41038ebd09e1.js",
      ".next/static/chunks/33074d3ff5d0cd2d.js",
      ".next/static/chunks/c4d90098b4abc498.js",
      ".next/static/chunks/e1dd8385d2402795.js",
      ".next/static/chunks/a6dad97d9634a72d.js"
    ],
    "gzipBytes": 178628
  },
  "phosphor": {
    "files": [
      ".next/static/chunks/baab7208d424059e.js",
      ".next/static/chunks/5faeea72d2e78ff5.js",
      ".next/static/chunks/e2012a6875502a0a.js",
      ".next/static/chunks/8b72cfc40036c827.js",
      ".next/static/chunks/turbopack-5f7c41038ebd09e1.js",
      ".next/static/chunks/33074d3ff5d0cd2d.js",
      ".next/static/chunks/c4d90098b4abc498.js",
      ".next/static/chunks/4b5ea2311058388a.js",
      ".next/static/chunks/a6dad97d9634a72d.js"
    ],
    "gzipBytes": 201449
  },
  "iconify": {
    "files": [
      ".next/static/chunks/baab7208d424059e.js",
      ".next/static/chunks/5faeea72d2e78ff5.js",
      ".next/static/chunks/e2012a6875502a0a.js",
      ".next/static/chunks/8b72cfc40036c827.js",
      ".next/static/chunks/turbopack-5f7c41038ebd09e1.js",
      ".next/static/chunks/33074d3ff5d0cd2d.js",
      ".next/static/chunks/c4d90098b4abc498.js",
      ".next/static/chunks/2ff206b6a96eb59b.js",
      ".next/static/chunks/a6dad97d9634a72d.js"
    ],
    "gzipBytes": 178942
  },
  "react-icons": {
    "files": [
      ".next/static/chunks/baab7208d424059e.js",
      ".next/static/chunks/5faeea72d2e78ff5.js",
      ".next/static/chunks/e2012a6875502a0a.js",
      ".next/static/chunks/8b72cfc40036c827.js",
      ".next/static/chunks/turbopack-5f7c41038ebd09e1.js",
      ".next/static/chunks/33074d3ff5d0cd2d.js",
      ".next/static/chunks/c4d90098b4abc498.js",
      ".next/static/chunks/08139fc7e725e407.js",
      ".next/static/chunks/a6dad97d9634a72d.js"
    ],
    "gzipBytes": 187999
  }
}
```
