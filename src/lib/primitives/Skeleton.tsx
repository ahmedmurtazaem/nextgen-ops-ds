import type { CSSProperties } from "react";

export interface SkelProps {
  /** Width (px or any CSS dimension). */
  w?: number | string;
  /** Height in px. Defaults to 14. */
  h?: number;
  /** Border-radius in px. Defaults to 6. */
  r?: number;
  style?: CSSProperties;
}

/** Single shimmer block — building block for skeleton compositions. */
export function Skel({ w, h = 14, r = 6, style }: SkelProps) {
  return <span className="skel" style={{ width: w, height: h, borderRadius: r, display: "block", ...style }} />;
}

/** Standard KPI strip skeleton — four cards, inline layout. */
export function KpiSkeleton() {
  return (
    <div className="kpis inline">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="kpi" style={{ gap: 9 }}>
          <Skel w="52%" h={9} />
          <Skel w="64%" h={22} r={7} />
          <Skel w="44%" h={9} />
        </div>
      ))}
    </div>
  );
}

/** Card-wrapped chart skeleton with bar shimmer below the heading. */
export function ChartCardSkeleton({ height = 300, title = true }: { height?: number; title?: boolean }) {
  return (
    <div className="card">
      {title && (
        <div className="card-head">
          <Skel w={180} h={13} /><div className="spacer"></div><Skel w={120} h={11} />
        </div>
      )}
      <div className="card-body" style={{ display: "flex", alignItems: "flex-end", gap: 10, height, padding: "22px 18px" }}>
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="skel" style={{ flex: 1, height: 20 + Math.abs(Math.sin(i * 0.9)) * 70 + "%", borderRadius: 5 }} />
        ))}
      </div>
    </div>
  );
}

/** Table-row shimmer card. */
export function TableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="card">
      <div className="card-head"><Skel w={150} h={13} /></div>
      <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 13, padding: "16px 18px" }}>
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Skel w="22%" h={11} />
            <Skel w="14%" h={11} />
            <div style={{ flex: 1 }}></div>
            <Skel w={90} h={11} />
            <Skel w={40} h={11} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Full view skeleton — KPI strip + chart card + table card. */
export function ViewSkeleton({ withKpis = true }: { withKpis?: boolean }) {
  return (
    <div className="grid" style={{ gap: "var(--gap)" }}>
      {withKpis && <KpiSkeleton />}
      <ChartCardSkeleton height={300} />
      <TableSkeleton rows={6} />
    </div>
  );
}
