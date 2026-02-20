# Benchmark Results

Generated at: 2026-02-20T11:06:54.534Z

Environment:
- Next.js 16.1.6
- React 19.2.3
- Node.js v24.12.0
- Bundler: Turbopack (next build default in this setup)

Method:
- Per count (50/100/200), one route per library with static icon imports in a Client Component
- Baseline route renders same count of non-icon placeholders
- Metric = gzip size of JS chunks referenced by each prerendered route HTML

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

Raw files by count and route:
```json
{
  "50": {
    "base": {
      "route": "/bench/50/base",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/0439026a8cd83b4e.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 168265
    },
    "lucide": {
      "route": "/bench/50/lucide",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/e97a093cae5a8e7f.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 173552
    },
    "heroicons": {
      "route": "/bench/50/heroicons",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/aa609f1068fd4f46.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 171835
    },
    "radix": {
      "route": "/bench/50/radix",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/8d77b71bf86c0b29.js",
        ".next/static/chunks/00ecc8c197582748.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 232909
    },
    "phosphor": {
      "route": "/bench/50/phosphor",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/a520c79ae582c0f4.js",
        ".next/static/chunks/50fd06647daabde3.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 202987
    },
    "iconify": {
      "route": "/bench/50/iconify",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/264c197611441d89.js",
        ".next/static/chunks/327f7b0db09f8077.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 180067
    },
    "react-icons": {
      "route": "/bench/50/react-icons",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/ae678e46d68ad2d1.js",
        ".next/static/chunks/33c7556f1a184917.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 251277
    }
  },
  "100": {
    "base": {
      "route": "/bench/100/base",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/2c1008dc87949aa0.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 168265
    },
    "lucide": {
      "route": "/bench/100/lucide",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/f4589946a681a579.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 177054
    },
    "heroicons": {
      "route": "/bench/100/heroicons",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/46356fdcaf293cbd.js",
        ".next/static/chunks/347d5b7c2d4b1246.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 177712
    },
    "radix": {
      "route": "/bench/100/radix",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/a165a03bba32bced.js",
        ".next/static/chunks/00ecc8c197582748.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 233160
    },
    "phosphor": {
      "route": "/bench/100/phosphor",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/85e4f775c780e5c5.js",
        ".next/static/chunks/50fd06647daabde3.js",
        ".next/static/chunks/f998d6a3250083c8.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 218110
    },
    "iconify": {
      "route": "/bench/100/iconify",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/e1990e68a1251951.js",
        ".next/static/chunks/327f7b0db09f8077.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 186364
    },
    "react-icons": {
      "route": "/bench/100/react-icons",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/903aab974eb484e3.js",
        ".next/static/chunks/33c7556f1a184917.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 251557
    }
  },
  "200": {
    "base": {
      "route": "/bench/200/base",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/01a9d945ba2167f2.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 168266
    },
    "lucide": {
      "route": "/bench/200/lucide",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/77009ec058e37470.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 184368
    },
    "heroicons": {
      "route": "/bench/200/heroicons",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/347d5b7c2d4b1246.js",
        ".next/static/chunks/f4276d37f4a7dc2e.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 187817
    },
    "radix": {
      "route": "/bench/200/radix",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/0574b00055ae3cbd.js",
        ".next/static/chunks/00ecc8c197582748.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 233662
    },
    "phosphor": {
      "route": "/bench/200/phosphor",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/f998d6a3250083c8.js",
        ".next/static/chunks/50fd06647daabde3.js",
        ".next/static/chunks/d8a0db04b7e5c71c.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 272991
    },
    "iconify": {
      "route": "/bench/200/iconify",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/880faf1839e034cb.js",
        ".next/static/chunks/0bebda9b492f4361.js",
        ".next/static/chunks/327f7b0db09f8077.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 195018
    },
    "react-icons": {
      "route": "/bench/200/react-icons",
      "files": [
        ".next/static/chunks/baab7208d424059e.js",
        ".next/static/chunks/8088942f5b1d57f0.js",
        ".next/static/chunks/9a59ee09d21e98c7.js",
        ".next/static/chunks/b960522c951df4dc.js",
        ".next/static/chunks/turbopack-54d108d4bec72fd3.js",
        ".next/static/chunks/33074d3ff5d0cd2d.js",
        ".next/static/chunks/7afc35baf44adf8a.js",
        ".next/static/chunks/855330ba533046d9.js",
        ".next/static/chunks/33c7556f1a184917.js",
        ".next/static/chunks/a6dad97d9634a72d.js"
      ],
      "gzipBytes": 252047
    }
  }
}
```
