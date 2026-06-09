import { Example, PageHead } from "@/_docs/Example";
import { ChartCardSkeleton, KpiSkeleton, Skel, TableSkeleton, ViewSkeleton } from "@/lib/primitives/Skeleton";

export default function SkeletonPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Skeleton"
        lede="Loading shimmer blocks. Use during the initial route load and per-tab transitions to hold layout space — keeps the chrome stable while the chart renders." />

      <div><h2>Single block</h2>
        <Example row code={`<Skel w={140} h={12} />
<Skel w={120} h={11} />
<Skel w={160} h={28} r={8} />`}>
          <Skel w={140} h={12} />
          <Skel w={120} h={11} />
          <Skel w={160} h={28} r={8} />
        </Example>
      </div>

      <div><h2>KPI strip</h2>
        <Example code={`<KpiSkeleton />`}>
          <KpiSkeleton />
        </Example>
      </div>

      <div><h2>Chart card</h2>
        <Example code={`<ChartCardSkeleton height={240} />`}>
          <ChartCardSkeleton height={240} />
        </Example>
      </div>

      <div><h2>Table card</h2>
        <Example code={`<TableSkeleton rows={5} />`}>
          <TableSkeleton rows={5} />
        </Example>
      </div>

      <div><h2>Full view</h2>
        <Example code={`<ViewSkeleton />`}>
          <ViewSkeleton />
        </Example>
      </div>
    </div>
  );
}
