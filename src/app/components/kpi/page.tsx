import { Example, PageHead } from "@/_docs/Example";
import { KpiStrip } from "@/lib/composites/Kpi";

const ITEMS = [
  { key: "flights",  label: "Total Flights",   val: "1,244", unit: "",    sub: "in period",                  icon: "plane", delta: "+3.2%", dir: "up" as const,   accent: false },
  { key: "manhours", label: "Total Man-Hours", val: "18,117", unit: "",   sub: "all functions",              icon: "clock", delta: "+1.1%", dir: "up" as const,   accent: false },
  { key: "peak",     label: "Peak Day Staff",  val: "46",    unit: "",    sub: "Ramp GW",                    icon: "users", delta: "−2",    dir: "down" as const, accent: true  },
  { key: "head",     label: "Total Headcount", val: "128",   unit: "FTE", sub: "season FTEs",                icon: "id",    delta: "flat",  dir: "flat" as const, accent: false },
];

export default function KpiPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="KPI"
        lede="Repeating headline numbers. Three layouts: grid (4-up cards), inline (one continuous strip), or compact (denser strip for dashboards)." />

      <div><h2>Inline</h2>
        <Example code={`<KpiStrip style="inline" items={[
  { key:"flights",  label:"Total Flights", val:"1,244",  delta:"+3.2%", dir:"up" },
  { key:"manhours", label:"Man-Hours",     val:"18,117", delta:"+1.1%", dir:"up" },
  { key:"peak",     label:"Peak Day",      val:"46",     delta:"−2",    dir:"down", accent:true },
  { key:"head",     label:"Headcount",     val:"128", unit:"FTE",       delta:"flat", dir:"flat" },
]} />`}>
          <KpiStrip style="inline" items={ITEMS} />
        </Example>
      </div>

      <div><h2>Grid</h2>
        <Example code={`<KpiStrip items={[ ... ]} />`}>
          <KpiStrip items={ITEMS} />
        </Example>
      </div>

      <div><h2>Compact</h2>
        <Example code={`<KpiStrip style="compact" items={[ ... ]} />`}>
          <KpiStrip style="compact" items={ITEMS} />
        </Example>
      </div>

      <div><h2>Accent</h2>
        <p>Set <code>accent: true</code> on a single tile to highlight it with a petroleum stripe — use sparingly, one per strip max.</p>
      </div>
    </div>
  );
}
