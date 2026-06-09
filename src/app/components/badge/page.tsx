import { Example, PageHead } from "@/_docs/Example";
import { Badge } from "@/lib/primitives/Badge";

export default function BadgePage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Badge"
        lede="Inline status pill. Six tones, three sizes, optional colored dot. Used in ribbons, KPIs, and row-status columns." />

      <div><h2>Tones</h2>
        <Example row code={`<Badge tone="pos" dot>Healthy · 96%</Badge>
<Badge tone="warn" dot>At risk</Badge>
<Badge tone="neg" dot>Breach</Badge>
<Badge tone="info" dot>Tracking</Badge>
<Badge tone="neutral">Draft</Badge>
<Badge tone="outline">Archived</Badge>`}>
          <Badge tone="pos" dot>Healthy · 96%</Badge>
          <Badge tone="warn" dot>At risk</Badge>
          <Badge tone="neg" dot>Breach</Badge>
          <Badge tone="info" dot>Tracking</Badge>
          <Badge tone="neutral">Draft</Badge>
          <Badge tone="outline">Archived</Badge>
        </Example>
      </div>

      <div><h2>Sizes</h2>
        <Example row code={`<Badge tone="pos" size="md">md (default)</Badge>
<Badge tone="warn" size="sm">sm</Badge>
<Badge tone="neg" size="xs">xs</Badge>`}>
          <Badge tone="pos" size="md">md (default)</Badge>
          <Badge tone="warn" size="sm">sm</Badge>
          <Badge tone="neg" size="xs">xs</Badge>
        </Example>
      </div>

      <div><h2>Lifecycle pattern</h2>
        <p>Standardize lifecycle badges across the product — use these tones for the four roster/plan stages:</p>
        <Example row code={`<Badge tone="neutral">Draft</Badge>
<Badge tone="warn" dot>Pending Approval</Badge>
<Badge tone="info" dot>Approved</Badge>
<Badge tone="pos" dot>Published</Badge>`}>
          <Badge tone="neutral">Draft</Badge>
          <Badge tone="warn" dot>Pending Approval</Badge>
          <Badge tone="info" dot>Approved</Badge>
          <Badge tone="pos" dot>Published</Badge>
        </Example>
      </div>
    </div>
  );
}
