import { PageHead, TokenTable } from "@/_docs/Example";

export default function SpacingPage() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Foundations"
        title="Spacing & density"
        lede="A single 16px gap unit, modulated by a global density multiplier (--u). Three density modes ship out of the box; everything scales together — padding, gaps, row heights, KPI values."
      />

      <div>
        <h2>Density modes</h2>
        <p>
          Drive density from a single <code>data-density</code> attribute on <code>&lt;html&gt;</code>. The token
          <code> --u</code> is the multiplier consumed by every density-aware spacing token.
        </p>
        <TokenTable
          columns={["Mode", "--u", "Row height", "Used when"]}
          rows={[
            { name: "compact",     value: ".86 · 30px", sample: "Heavy data screens, the duty-manager day view." },
            { name: "cozy",        value: "1 · 34px",   sample: "Default. The Planning and Rostering workbenches use cozy." },
            { name: "comfortable", value: "1.16 · 40px",sample: "Accessibility / reduced-strain preference." },
          ]}
        />
      </div>

      <div>
        <h2>Gap tokens</h2>
        <TokenTable
          rows={[
            { name: "--gap",       value: "16px · scales with --u", sample: "Card grids, page-level vertical gap." },
            { name: "--pad-card",  value: "16px · scales with --u", sample: "Default card body padding." },
            { name: "--row-h",     value: "34px · density-locked",   sample: "Standard table row height (rule of thumb)." },
            { name: "--rail-w",    value: "236px (62px collapsed)",  sample: "Left rail width." },
          ]}
        />
      </div>

      <div>
        <h2>Radii</h2>
        <TokenTable
          rows={[
            { name: "--r-xs",   value: "4px",  sample: "Inline tags, mono pills." },
            { name: "--r-sm",   value: "6px",  sample: "Default buttons, inputs." },
            { name: "--r-md",   value: "9px",  sample: "Card heads, dropzones, sub-panels." },
            { name: "--r-lg",   value: "14px", sample: "Cards, drawer panel." },
            { name: "--r-xl",   value: "20px", sample: "Modal corner." },
            { name: "--r-pill", value: "999px",sample: "Badges, fn-chips, dot indicators." },
          ]}
        />
      </div>

      <div>
        <h2>Shadows</h2>
        <p>
          Shadows are petroleum-tinted (light) or pure black (dark). Five levels — most surfaces only ever
          use <code>--shadow-xs</code> at rest; deeper shadows are reserved for overlays and elevated states.
        </p>
        <TokenTable
          rows={[
            { name: "--shadow-xs",    value: "Card rest state", sample: <div style={{ height: 30, borderRadius: 9, background: "var(--surface)", boxShadow: "var(--shadow-xs)" }} /> },
            { name: "--shadow-sm",    value: "Hover lift on row",   sample: <div style={{ height: 30, borderRadius: 9, background: "var(--surface)", boxShadow: "var(--shadow-sm)" }} /> },
            { name: "--shadow-md",    value: "Popovers",            sample: <div style={{ height: 30, borderRadius: 9, background: "var(--surface)", boxShadow: "var(--shadow-md)" }} /> },
            { name: "--shadow-lg",    value: "Drawer / dropdown",   sample: <div style={{ height: 30, borderRadius: 9, background: "var(--surface)", boxShadow: "var(--shadow-lg)" }} /> },
            { name: "--shadow-focus", value: "Focus halo",          sample: <div style={{ height: 30, borderRadius: 9, background: "var(--surface)", boxShadow: "var(--shadow-focus)" }} /> },
          ]}
        />
      </div>

      <div>
        <h2>Layout containers</h2>
        <ul>
          <li><b>App shell</b> uses a 60px top row + grid: <code>brand</code> + <code>topbar</code> | <code>rail</code> + <code>main</code>.</li>
          <li><b>Page content</b> is wrapped in <code>.page</code> — <code>max-width: 1640px</code>, centered. The Rostering workbench uses <code>.rwb-page</code> for <code>max-width: 1760px</code>.</li>
          <li><b>Card grids</b> use the <code>.grid .g-2 / .g-3</code> helpers; collapse to one column under 1180px.</li>
          <li><b>Split layouts</b> use <code>.split-2</code> (1.6fr / 1fr) and <code>.split-side</code> (1fr / 320px).</li>
        </ul>
      </div>
    </div>
  );
}
