import { Example, PageHead } from "@/_docs/Example";
import { Meter } from "@/lib/primitives/Meter";

export default function MeterPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Meter"
        lede="Thin horizontal progress bar. Use to give a numeric KPI a visual anchor — pair with the % label to its right." />

      <div><h2>Tones</h2>
        <Example code={`<Meter value={96} style={{ width: 240 }} />
<Meter value={88} tone="warn" style={{ width: 240 }} />
<Meter value={62} tone="neg" style={{ width: 240 }} />
<Meter value={96} tone="pos" style={{ width: 240 }} />`}>
          <Meter value={96} style={{ width: 240 }} />
          <Meter value={88} tone="warn" style={{ width: 240 }} />
          <Meter value={62} tone="neg" style={{ width: 240 }} />
          <Meter value={96} tone="pos" style={{ width: 240 }} />
        </Example>
      </div>

      <div><h2>Common pattern — coverage row</h2>
        <Example row code={`<div style={{ display:"flex", alignItems:"center", gap:8 }}>
  <Meter value={96} style={{ flex:1, maxWidth: 120 }} />
  <span className="num" style={{ fontSize: 11.5, width: 30 }}>96%</span>
</div>`}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Meter value={96} style={{ flex: 1, maxWidth: 120 }} />
            <span className="num" style={{ fontSize: 11.5, width: 30 }}>96%</span>
          </div>
        </Example>
      </div>
    </div>
  );
}
