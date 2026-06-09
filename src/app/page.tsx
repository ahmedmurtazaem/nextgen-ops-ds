import Link from "next/link";
import { PageHead } from "@/_docs/Example";
import { Icon } from "@/lib/Icon";

const SECTIONS = [
  { icon: "layers",     title: "Brand",       href: "/brand",      blurb: "Voice, logo, the why behind the palette." },
  { icon: "shield",     title: "Color",       href: "/color",      blurb: "Petroleum, green, functional palette, status, heat." },
  { icon: "file",       title: "Typography",  href: "/typography", blurb: "Bukra · IBM Plex Mono · Arabic considerations." },
  { icon: "grid",       title: "Spacing",     href: "/spacing",    blurb: "Density modes, radii, the 16px gap unit." },
  { icon: "id",         title: "Components",  href: "/components", blurb: "30+ TS components, from Button to Charts." },
  { icon: "wand",       title: "Patterns",    href: "/patterns/page", blurb: "Page layout, ribbons, domain composites." },
];

export default function Home() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="v0.1.0"
        title="NextGen Ops · Design System"
        lede="Brand-anchored design system for SGS ground-ops apps — tokens, components, and patterns that power the unified Planning + Rostering portal and ship to any Next.js project."
      />

      <div>
        <h2>Built on the SGS brand</h2>
        <p>
          NextGen Ops is the unified ops platform replacing the legacy Inform suite across the Kingdom&apos;s
          28 airports. This design system is the foundation every screen sits on — petroleum &amp; green
          brand anchoring, Bukra for the UI, IBM Plex Mono for every digit on the page, full bilingual
          EN ⇄ AR (RTL), and a density-aware token scale tuned for dense ops data.
        </p>
      </div>

      <div>
        <h2>What&apos;s in the box</h2>
        <div className="docs-cols-3">
          {SECTIONS.map((s) => (
            <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
              <div className="card" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8, height: "100%" }}>
                <span style={{ width: 32, height: 32, borderRadius: 8, background: "var(--accent-soft)", color: "var(--accent-ink)", display: "grid", placeItems: "center" }}>
                  <Icon name={s.icon} size={16} />
                </span>
                <b style={{ fontSize: 14, color: "var(--ink-1)" }}>{s.title}</b>
                <span style={{ fontSize: 12.5, color: "var(--ink-3)", lineHeight: 1.5 }}>{s.blurb}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2>Start here</h2>
        <ul>
          <li><b><Link href="/integration">Integration</Link></b> — drop the package into a Next.js 16 project and import the stylesheet.</li>
          <li><b><Link href="/brand">Brand introduction</Link></b> — read this before you reach for any color.</li>
          <li><b><Link href="/components">Components index</Link></b> — every primitive and composite with live previews.</li>
          <li><b><Link href="/tokens">Tokens reference</Link></b> — every CSS custom property in one searchable table.</li>
        </ul>
      </div>

      <div>
        <h2>Authoring rules</h2>
        <p>
          Two non-negotiables, drawn from the original design intent:
        </p>
        <ul>
          <li><b>Petroleum is the primary brand color.</b> Green is reserved for semantic positive states (live, healthy, met). Don&apos;t use green where petroleum belongs.</li>
          <li><b>Highlight, don&apos;t hide.</b> Function filters dim non-selected rows; they don&apos;t remove them. The user always sees the full picture, with focus drawn to the slice they care about.</li>
        </ul>
      </div>
    </div>
  );
}
