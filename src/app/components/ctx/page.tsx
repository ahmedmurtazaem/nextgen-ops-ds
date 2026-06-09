import { Example, PageHead } from "@/_docs/Example";
import { CtxSelect } from "@/lib/composites/CtxSelect";

export default function CtxPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Context select"
        lede="Click-to-open select for contextual ribbons and filter popovers. Click-outside aware. Designed to sit between a ribbon's left crumb and right actions." />

      <div><h2>With kicker label</h2>
        <Example row code={`<CtxSelect k="Station" options={[
  "JED — Jeddah", "RUH — Riyadh", "DMM — Dammam", "MED — Madinah",
]} />`}>
          <CtxSelect k="Station" options={["JED — Jeddah", "RUH — Riyadh", "DMM — Dammam", "MED — Madinah"]} />
          <CtxSelect k="Period" options={["Summer 2026", "Winter 2026", "Hajj Surge 2026"]} />
        </Example>
      </div>

      <div><h2>Plain</h2>
        <Example row code={`<CtxSelect options={["All Stations", "JED", "RUH", "DMM", "MED"]} />`}>
          <CtxSelect options={["All Stations", "JED", "RUH", "DMM", "MED"]} />
        </Example>
      </div>
    </div>
  );
}
