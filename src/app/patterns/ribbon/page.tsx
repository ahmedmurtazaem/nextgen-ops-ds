import { PageHead } from "@/_docs/Example";

export default function RibbonPattern() {
  return (
    <div className="docs-page">
      <PageHead kicker="Patterns" title="Contextual ribbon"
        lede="The horizontal context bar that sits between the main chrome and the page body. Every screen owns its ribbon — it's where the operator declares the slice of reality they're working in." />

      <div>
        <h2>Anatomy</h2>
        <pre className="ex-code">{`<div className="ribbon">
  {/* 1. Crumb (left) — module > screen, last segment bold */}
  <span className="crumb"><span>Planning</span><Icon name="chevR" size={13} /><b>Create Plan</b></span>

  {/* 2. Context selects — station, period, regime, etc. */}
  <CtxSelect k="Station" options={["JED — Jeddah", "RUH — Riyadh"]} />
  <CtxSelect k="Period"  options={["Summer 2026", "Winter 2026"]} />

  {/* 3. Ribbon spacer — pushes everything after to the trailing edge */}
  <div className="ribbon-spacer" />

  {/* 4. Status / secondary text (optional) */}
  <span className="muted" style={{ fontSize: 12 }}>Draft · unsaved</span>

  {/* 5. Trailing actions — buttons, lifecycle badges */}
  <Button size="sm" icon="download">Export</Button>
  <Button variant="primary" size="sm" icon="zap">Run Scenario</Button>
</div>`}</pre>
      </div>

      <div>
        <h2>Rules</h2>
        <ul>
          <li><b>Crumb always leftmost.</b> Two segments: module → screen. The screen segment is bold.</li>
          <li><b>Selects come right after the crumb.</b> Station and period are the two universal contexts.</li>
          <li><b>One primary action per ribbon</b> — anchored to the trailing edge. Secondary actions sit left of it as default-variant buttons.</li>
          <li><b>Lifecycle badge</b> (Draft / Pending / Approved / Published) sits between context selects and the spacer when applicable.</li>
          <li><b>Don&apos;t mix metric badges into the ribbon.</b> KPIs belong below the ribbon, in the KPI strip.</li>
        </ul>
      </div>

      <div>
        <h2>Per-screen variants</h2>
        <ul>
          <li><b>Create Plan</b> — crumb, station+season pill, spacer, draft state, no actions in the ribbon (calc lives in the parameter rail).</li>
          <li><b>Plans</b> — crumb, Seg switch (All / Review Queue), spacer, station Seg + filter + New Plan primary.</li>
          <li><b>Scenario Workbench</b> — crumb, station+period selects, spacer, runtime badge, New Scenario + Run Scenario.</li>
          <li><b>Roster Workbench</b> — crumb, station+week selects, lifecycle badge, spacer, Validate + Approvals + Publish to Dispatch.</li>
        </ul>
      </div>
    </div>
  );
}
