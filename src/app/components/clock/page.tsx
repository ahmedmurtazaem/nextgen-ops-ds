import { Example, PageHead } from "@/_docs/Example";
import { DualClock } from "@/lib/composites/DualClock";

export default function ClockPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Dual clock"
        lede="Side-by-side UTC + station-local clock. Ticks every 30 seconds. Use in the top bar of ops consoles where time-of-day matters for SLA windows." />

      <div><h2>Default — JED (UTC+3)</h2>
        <Example code={`<DualClock />`}>
          <DualClock />
        </Example>
      </div>

      <div><h2>Other station</h2>
        <Example code={`<DualClock offset={3} localLabel="RUH" tz="AST" />
<DualClock offset={4} localLabel="DXB" tz="GST" utcLabel="UTC" />`}>
          <DualClock offset={3} localLabel="RUH" tz="AST" />
          <DualClock offset={4} localLabel="DXB" tz="GST" />
        </Example>
      </div>
    </div>
  );
}
