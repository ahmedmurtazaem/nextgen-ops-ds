import { PageHead } from "@/_docs/Example";

export default function DomainPatterns() {
  return (
    <div className="docs-page">
      <PageHead kicker="Patterns" title="Domain composites"
        lede="Higher-order compositions specific to NextGen Ops — shift cells, SLA detail blocks, airline badges, exception cards. Not generic primitives; do not reuse outside the ops domain." />

      <div>
        <h2>Shift cell</h2>
        <p>
          Used in the Rostering workbench grid. A cell renders a shift code (M / D / A / N) on a tinted
          background, with optional violation chrome on top.
        </p>
        <pre className="ex-code">{`<button className="rcell s-M">
  <span className="sc">M</span>
  <span className="st mono">06–14</span>
</button>

{/* hard violation */}
<button className="rcell s-A v-hard">
  <span className="sc">A</span>
  <span className="st mono">14–22</span>
  <span className="v-dot" />
</button>`}</pre>
        <ul>
          <li><b>Time-of-day tints</b> — M (morning) green, D (day) blue, A (afternoon) amber, N (night) indigo.</li>
          <li><b>Non-work states</b> — <code>.s-rest</code> hatched, <code>.s-leave</code> info-soft, <code>.s-train</code> accent-soft.</li>
          <li><b>Violations</b> — <code>.v-hard</code> red outline + dot, <code>.v-soft</code> dashed warn outline.</li>
        </ul>
      </div>

      <div>
        <h2>Airline badge</h2>
        <p>The 2-letter IATA code tile, branded with the airline brand color.</p>
        <pre className="ex-code">{`<span className="air-badge"    style={{ background: "#0E6E4F" }}>SV</span>
<span className="air-badge sm" style={{ background: "#E4002B" }}>XY</span>
<span className="air-badge lg" style={{ background: "#5C0632" }}>QR</span>`}</pre>
      </div>

      <div>
        <h2>SLA detail page</h2>
        <p>
          See the live page in the NextGen Ops portal (Planning → SLA Config → Open SLA). Composed of:
        </p>
        <ol style={{ marginInlineStart: 22, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6 }}>
          <li><code>.sla-hero</code> — large airline badge + tier/SGHA chips + overall-adherence gauge.</li>
          <li><code>.kpis.inline</code> — Met / At Risk / Breaches / OTP target.</li>
          <li><code>.sla-phase</code> blocks (Arrival, Departure) — each with grouped tables.</li>
          <li>OTP penalty ladder + Cost/Penalty remedies, side by side.</li>
          <li><code>.sla-sign</code> — two-column signature block.</li>
        </ol>
      </div>

      <div>
        <h2>Exceptions card</h2>
        <p>The card in the right column of the Roster Workbench that holds hard + soft exceptions.</p>
        <pre className="ex-code">{`<div className="rex-card hard">
  <div className="rex-card-top">
    <span className="rex-sev hard">Blocking</span>
    <span className="rex-rule">Expired certification</span>
    <span className="rex-day mono">Wed 10</span>
  </div>
  <div className="rex-emp">
    <span className="r-sw sm" />
    <b>Tariq Al-Harbi</b>
    <span className="mono rex-eid">E-10255</span>
  </div>
  <p className="rex-rationale">DG Handling cert expired 09 Jun — cannot crew DG ramp shift.</p>
  <div className="rex-foot">
    <span className="rex-src"><Icon name="link" size={11} />LMS</span>
    <span className="rex-actions">
      <Badge tone="neg" size="sm" dot>Blocked</Badge>
      <Button size="xs">Reassign</Button>
    </span>
  </div>
</div>`}</pre>
      </div>
    </div>
  );
}
