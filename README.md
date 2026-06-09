# @sgs/nextgen-ops-ds

Design system for NextGen Ops — tokens, components, and brand guidelines for the SGS unified ops platform (Planning + Rostering + Dispatch + Performance).

**Live docs:** https://ahmedmurtazaem.github.io/nextgen-ops-ds/

## What's in here

- **Design tokens** — petroleum + green brand, function palette, surfaces, ink, status, heat ramp. CSS custom properties + matching TS exports.
- **Components** — 30+ TypeScript React components: primitives (Button, Card, Badge, Alert, Field, Switch, Meter, Skeleton, Toast, Drawer), composites (KPI strip, Seg, ViewTabs, CtxSelect, DualClock, RibbonFilter), and charts (LineChart, StackedBar, Heatmap, WeeklyChart, Gauge).
- **Brand guidelines** — voice & tone, logo usage, color rationale, typography (Bukra + IBM Plex Mono), spacing/density, motion, accessibility.
- **Patterns** — page layout, contextual ribbon, domain composites (shift cells, SLA detail, exception cards).
- **Fonts** — Bukra (local OTF/TTF, 4 weights) + IBM Plex Mono (loaded via `next/font/google` at consumer side).

## Repo layout

```
nextgen-ops-ds/
├── src/
│   ├── lib/                       # Library (the exportable package)
│   │   ├── index.ts               # Barrel — import { Button } from "@sgs/nextgen-ops-ds"
│   │   ├── tokens.ts              # JS-facing token constants
│   │   ├── Icon.tsx               # Single-stroke icon set
│   │   ├── styles/
│   │   │   ├── index.css          # @import this in your app
│   │   │   ├── tokens.css         # CSS custom properties
│   │   │   ├── base.css           # html / body resets
│   │   │   ├── theme.css          # Tailwind 4 @theme inline
│   │   │   └── components.css     # All component styles
│   │   ├── fonts/                 # Bukra OTF/TTF
│   │   ├── primitives/            # Button, Card, Badge, Alert, Field, Switch, Meter, Skeleton, Toast, Drawer
│   │   ├── composites/            # KPI, Seg, ViewTabs, CtxSelect, DualClock, RibbonFilter
│   │   └── charts/                # LineChart, StackedBar, Heatmap, WeeklyChart, Gauge
│   │
│   ├── app/                       # Docs site (Next.js 16 App Router)
│   │   ├── layout.tsx
│   │   ├── globals.css            # Imports lib styles + adds docs-site chrome
│   │   ├── page.tsx               # Home
│   │   └── …                      # /brand, /color, /typography, /components/*, /patterns/*
│   │
│   └── _docs/                     # Shared docs helpers (sidebar nav, Example block, ColorChip, TokenTable)
│
├── public/assets/                 # Logos, pattern
├── .github/workflows/deploy.yml   # GitHub Pages auto-deploy
└── package.json
```

## Quick start (consuming app)

### 1. Install peers

```bash
npm install next@^16 react@^19 react-dom@^19
npm install -D tailwindcss@^4 @tailwindcss/postcss postcss
```

### 2. Vendor the package (until published)

```bash
npm install github:ahmedmurtazaem/nextgen-ops-ds
```

### 3. Import the stylesheet

```css
/* src/app/globals.css */
@import "tailwindcss";
@import "@sgs/nextgen-ops-ds/styles/index.css";
```

### 4. Wire fonts + theme attributes

```tsx
// src/app/layout.tsx
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bukra = localFont({
  src: [
    { path: "./fonts/bukra-light.otf",   weight: "300" },
    { path: "./fonts/bukra-regular.otf", weight: "400" },
    { path: "./fonts/bukra-medium.ttf",  weight: "500" },
    { path: "./fonts/bukra-bold.otf",    weight: "700" },
  ],
  variable: "--font-bukra",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-theme="light"
      data-density="cozy"
      className={`${bukra.variable} ${plexMono.variable}`}
    >
      <body className="sgs">{children}</body>
    </html>
  );
}
```

### 5. Use a component

```tsx
import { Button, Card, CardHead, CardBody, KpiStrip, Toaster, toast } from "@sgs/nextgen-ops-ds";

export default function DashboardPage() {
  return (
    <>
      <Card>
        <CardHead title="Today" sub="JED · Summer 2026" />
        <CardBody>
          <KpiStrip
            style="inline"
            items={[
              { key: "sla", label: "SLA Coverage", val: "96.4", unit: "%", accent: true, delta: "+1.8", dir: "up" },
            ]}
          />
        </CardBody>
      </Card>
      <Button variant="primary" icon="plus" onClick={() => toast("Plan created", "info")}>
        New Plan
      </Button>
      <Toaster />
    </>
  );
}
```

## Theme & density

Driven by attributes on `<html>` — no provider, no JS state required by the system itself:

| Attribute        | Values                                    | Effect                              |
| ---------------- | ----------------------------------------- | ----------------------------------- |
| `data-theme`     | `light`, `dark`                           | Flips the entire token surface map. |
| `data-density`   | `compact`, `cozy`, `comfortable`          | Scales `--u` → all spacing tokens.  |
| `data-rail`     | `open`, `collapsed`                       | Toggles left-rail width (236 ↔ 62). |
| `dir`            | `ltr`, `rtl`                              | Flips logical CSS directions.       |

Your app stores user preference and toggles these attributes. See the example pattern in [/integration](https://ahmedmurtazaem.github.io/nextgen-ops-ds/integration/).

## Brand non-negotiables

- **Petroleum is the primary brand color.** Green is reserved for semantic positive states. Don't use green where petroleum belongs.
- **Highlight, don't hide.** Filters dim non-selected rows; they never remove them.
- **Tabular numerals everywhere.** Every digit in the product is rendered in IBM Plex Mono with `tnum` on.
- **Bilingual first-class.** Arabic is not a translation layer — every component supports RTL via `dir="rtl"` on `<html>`.

## Contribution

This system is owned by the NextGen Ops design team. Two rules for changes:

1. **New tokens require approval.** Don't add palette colors, type sizes, or radii ad-hoc — they fragment the system.
2. **New components live in `src/lib/`** with a matching `/components/<name>` docs page. Anything component-shaped that exists only inside a screen is a smell.

## License

Confidential · Saudi Ground Services Company — internal use only.
