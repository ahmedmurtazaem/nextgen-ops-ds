import { PageHead } from "@/_docs/Example";
import { Icon } from "@/lib/Icon";

export default function BrandPage() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Brand"
        title="Brand introduction"
        lede="NextGen Ops is the face of SGS to its own teams. The design system carries the brand into every screen — clarity over decoration, density over chrome, brand color anchoring every accent."
      />

      <div>
        <h2>The product</h2>
        <p>
          NextGen Ops is a unified ops command center for Saudi Ground Services Company (SGS) — replacing
          a fragmented legacy stack across <b>28 airports</b>. Planning drives demand forecasts → Scenario
          workbench tests what-ifs → publish → Rostering assigns crews → Dispatch &amp; Performance close
          the loop. One platform, one source of truth.
        </p>
        <p>
          The brand promise: <i>orchestrated ground operations</i>. Every visual choice should make a duty
          manager&apos;s workload feel less chaotic and more conducted.
        </p>
      </div>

      <div>
        <h2>Design principles</h2>
        <div className="docs-cols">
          <Principle icon="layers" title="Petroleum first" body="The SGS brand is petroleum (#0E4B64). Green is reserved for semantic positive states only. Never use green where the brand belongs." />
          <Principle icon="grid"   title="Clarity over decoration" body="Ops work is dense. The system prioritizes legibility, tabular numerals, and quiet surfaces. Decoration is a tax on the duty manager's attention." />
          <Principle icon="alert"  title="Highlight, don't hide" body="Filters dim non-selected rows; they don't remove them. The user always sees the full picture, with focus drawn to the slice they care about." />
          <Principle icon="globe"  title="Bilingual first-class" body="Every component supports EN ⇄ AR with full RTL flipping. Arabic is not a translation layer — it's a first-class mode." />
        </div>
      </div>

      <div>
        <h2>Visual identity at a glance</h2>
        <ul>
          <li><b>Primary color</b> — Petroleum <code>#0E4B64</code>. Used for brand accents, primary CTAs, active nav.</li>
          <li><b>Brand secondary</b> — Green <code>#61B947</code>. Used as the semantic <code>--pos</code> family (live/healthy/met).</li>
          <li><b>Brand accent</b> — Gold <code>#E0A400</code>. Used sparingly as <code>--gold</code> + notification dot.</li>
          <li><b>UI typeface</b> — Bukra (Latin + Arabic), 4 weights (300/400/500/700).</li>
          <li><b>Data typeface</b> — IBM Plex Mono. Every digit in the product. Tabular numerals on.</li>
          <li><b>Surface temperature</b> — light-first, dark fully supported. Tokens flip via <code>[data-theme]</code>.</li>
        </ul>
      </div>

      <div>
        <h2>What this system is not</h2>
        <ul>
          <li><b>Not a marketing kit.</b> No hero gradients, no oversized type. Designed for tools, not landing pages.</li>
          <li><b>Not theme-able at runtime by end-users.</b> Theme + density are operator settings, not branding hooks.</li>
          <li><b>Not framework-agnostic.</b> It assumes Next.js (15+) + React 19 + Tailwind 4. Forks for other stacks are out of scope.</li>
        </ul>
      </div>
    </div>
  );
}

function Principle({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="card" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ width: 32, height: 32, borderRadius: 8, background: "var(--accent-soft)", color: "var(--accent-ink)", display: "grid", placeItems: "center" }}>
        <Icon name={icon} size={16} />
      </span>
      <b style={{ fontSize: 14, color: "var(--ink-1)" }}>{title}</b>
      <span style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.5 }}>{body}</span>
    </div>
  );
}
