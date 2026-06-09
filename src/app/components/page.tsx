import Link from "next/link";
import { PageHead } from "@/_docs/Example";
import { Icon } from "@/lib/Icon";

interface Entry { href: string; name: string; blurb: string; }
const PRIMITIVES: Entry[] = [
  { href: "/components/button",   name: "Button",   blurb: "Primary action surface — six variants, three sizes, optional leading + trailing icons." },
  { href: "/components/card",     name: "Card",     blurb: "Surface container with optional head + body slots. Foundation of every panel." },
  { href: "/components/badge",    name: "Badge",    blurb: "Inline status pill with six tones and three sizes." },
  { href: "/components/alert",    name: "Alert",    blurb: "Inline informational block — softer than a toast, denser than a card." },
  { href: "/components/field",    name: "Field",    blurb: "Form-field shell pairing label + control + hint/error." },
  { href: "/components/switch",   name: "Switch",   blurb: "Binary toggle." },
  { href: "/components/meter",    name: "Meter",    blurb: "Thin horizontal progress bar." },
  { href: "/components/skeleton", name: "Skeleton", blurb: "Loading shimmer blocks + KPI / table / chart presets." },
  { href: "/components/toast",    name: "Toast",    blurb: "Global toaster — fire-and-forget with toast()." },
  { href: "/components/drawer",   name: "Drawer",   blurb: "Right-edge side drawer overlay. RTL-aware." },
];
const COMPOSITES: Entry[] = [
  { href: "/components/kpi",      name: "KPI",      blurb: "Repeating KPI tiles — grid, inline, or compact layout." },
  { href: "/components/seg",      name: "Seg",      blurb: "Segmented control for 2–4 mutually-exclusive views." },
  { href: "/components/viewtabs", name: "ViewTabs", blurb: "Pill tabs for sub-views inside a card or page body." },
  { href: "/components/ctx",      name: "CtxSelect",blurb: "Context-aware select for ribbons and filter popovers." },
  { href: "/components/clock",    name: "DualClock",blurb: "Side-by-side UTC + station-local clock." },
];
const CHARTS: Entry[] = [
  { href: "/components/charts",   name: "Charts",   blurb: "LineChart, StackedBar, Heatmap, WeeklyChart, Gauge — themeable inline SVG primitives." },
];

export default function ComponentsIndex() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Components"
        title="Index"
        lede="30+ components organized as primitives (single concerns), composites (small assemblies), and charts. Every component is theme-aware and density-aware automatically."
      />
      <Group title="Primitives" entries={PRIMITIVES} />
      <Group title="Composites" entries={COMPOSITES} />
      <Group title="Charts" entries={CHARTS} />
    </div>
  );
}

function Group({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="docs-cols-3">
        {entries.map((e) => (
          <Link key={e.href} href={e.href} style={{ textDecoration: "none" }}>
            <div className="card" style={{ padding: 14, display: "flex", flexDirection: "column", gap: 6, height: "100%" }}>
              <b style={{ fontSize: 13.5, color: "var(--ink-1)" }}>{e.name}</b>
              <span style={{ fontSize: 12, color: "var(--ink-3)", lineHeight: 1.5 }}>{e.blurb}</span>
              <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: "var(--accent-ink)", textTransform: "uppercase", letterSpacing: ".06em" }}>
                Open<Icon name="chevR" size={11} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
