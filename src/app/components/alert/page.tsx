import { Example, PageHead } from "@/_docs/Example";
import { Alert } from "@/lib/primitives/Alert";

export default function AlertPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Alert"
        lede="Inline informational block. Softer than a toast, denser than a card — use for static guidance, warnings, or system status that's persistent on the page." />

      <div><h2>Tones</h2>
        <Example code={`<Alert tone="info" title="Reviewer workspace">
  Plans publish only after two reviewer approvals.
</Alert>
<Alert tone="warn" title="EK wide-body — 3 turns at risk">
  Remote-stand turns inside 60-min target with <10% buffer.
</Alert>
<Alert tone="neutral" title="Foundational entity">
  Stations are referenced across Engagement Rules, Airline SLAs, Planning & Rostering.
</Alert>`}>
          <Alert tone="info" title="Reviewer workspace">
            Plans publish only after two reviewer approvals.
          </Alert>
          <Alert tone="warn" title="EK wide-body — 3 turns at risk">
            Remote-stand turns inside 60-min target with &lt;10% buffer.
          </Alert>
          <Alert tone="neutral" title="Foundational entity">
            Stations are referenced across Engagement Rules, Airline SLAs, Planning &amp; Rostering.
          </Alert>
        </Example>
      </div>

      <div><h2>Bodyless / titleless</h2>
        <Example code={`<Alert tone="info">Tip: hover the chart to see exact values.</Alert>
<Alert tone="warn" title="Validated — 3 blocking, 3 warnings" />`}>
          <Alert tone="info">Tip: hover the chart to see exact values.</Alert>
          <Alert tone="warn" title="Validated — 3 blocking, 3 warnings" />
        </Example>
      </div>
    </div>
  );
}
