import { PageHead } from "@/_docs/Example";

export default function PageLayoutPattern() {
  return (
    <div className="docs-page">
      <PageHead kicker="Patterns" title="Page layout"
        lede="Every ops screen follows the same scaffold — top bar, left rail, ribbon, scrollable page. Compose your screen by filling these slots; don't redesign the chrome." />

      <div>
        <h2>App-level shell</h2>
        <pre className="ex-code">{`<div className="app">
  <BrandCorner />           {/* grid-area: brand · 60px */}
  <TopBar />                {/* grid-area: topbar · 60px */}
  <LeftRail />              {/* grid-area: rail · scrollable */}
  <main className="main">   {/* grid-area: main · scrollable */}
    <RibbonForThisScreen />
    <div className="scroll">
      <div className="page">
        {/* screen body */}
      </div>
    </div>
  </main>
</div>`}</pre>
        <p>
          The grid is fixed by tokens — 60px brand row, <code>--rail-w</code> rail column, the rest is main.
          Toggle <code>data-rail=&quot;collapsed&quot;</code> on <code>&lt;html&gt;</code> to shrink the rail to icons only.
        </p>
      </div>

      <div>
        <h2>Screen-level pattern</h2>
        <p>Every Planning or Rostering screen is composed as:</p>
        <ol style={{ marginInlineStart: 22, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6 }}>
          <li><b>Ribbon</b> — crumb (left), contextual selects, ribbon-spacer, action buttons (right).</li>
          <li><b>Scroll body</b> — <code>.scroll</code> wrapper handles overflow.</li>
          <li><b>Page</b> — <code>.page</code> caps width at 1640px and stacks children with <code>--gap</code> between them.</li>
          <li><b>KPI strip</b> — usually the first child of <code>.page</code> for at-a-glance numbers.</li>
          <li><b>Cards</b> — main body content. Use <code>.split-2</code> or <code>.g-3</code> grids to compose multiples.</li>
        </ol>
      </div>

      <div>
        <h2>Densities and breakpoints</h2>
        <ul>
          <li><b>≥1240px</b> — full layout, cards in split-2 / g-3 grids.</li>
          <li><b>1180–1240px</b> — KPIs collapse to 2 columns; split layouts stack.</li>
          <li><b>≤1100px</b> — Create-Plan parameter rail stacks above the body; station-config grid collapses.</li>
          <li><b>≤880px</b> — sign-in panel hides; main chrome remains.</li>
          <li><b>≤760px</b> — scenario delta tiles widen; signature columns stack.</li>
        </ul>
      </div>
    </div>
  );
}
