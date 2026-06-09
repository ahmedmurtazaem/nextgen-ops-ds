/* Themeable SVG chart primitives (no external libs) + skeleton loaders. */
import type { CSSProperties } from "react";

function smoothPath(pts: number[][]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2[0]} ${p2[1]}`;
  }
  return d;
}

export interface LineSeries { key?: string; color: string; data: number[]; width?: number; dots?: boolean; dim?: boolean; area?: boolean; }
export function LineChart({
  series, xLabels, height = 300, yMax, area = false, yStep = 2,
}: { series: LineSeries[]; xLabels: string[]; height?: number; yMax?: number; area?: boolean; yStep?: number }) {
  const W = 1000, H = height, padL = 34, padR = 14, padT = 14, padB = 26;
  const n = xLabels.length;
  const max = yMax || Math.max(...series.flatMap((s) => s.data)) * 1.1;
  const ix = (i: number) => padL + (W - padL - padR) * (i / (n - 1));
  const iy = (v: number) => padT + (H - padT - padB) * (1 - v / max);
  const yTicks: number[] = [];
  for (let v = 0; v <= max; v += yStep) yTicks.push(v);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }} preserveAspectRatio="none">
      {yTicks.map((v, i) => (
        <g key={i}>
          <line x1={padL} x2={W - padR} y1={iy(v)} y2={iy(v)} stroke="var(--line-soft)" strokeWidth="1" />
          <text x={padL - 8} y={iy(v) + 3} textAnchor="end" fontSize="10" fontFamily="var(--mono)" fill="var(--ink-3)">{v}</text>
        </g>
      ))}
      {xLabels.map((l, i) =>
        i % 2 === 0 ? (
          <text key={i} x={ix(i)} y={H - 8} textAnchor="middle" fontSize="9.5" fontFamily="var(--mono)" fill="var(--ink-3)">{l}</text>
        ) : null
      )}
      {area &&
        series.filter((s) => s.area).map((s, si) => {
          const pts = s.data.map((v, i) => [ix(i), iy(v)]);
          const ap = smoothPath(pts) + ` L ${ix(n - 1)} ${iy(0)} L ${ix(0)} ${iy(0)} Z`;
          return <path key={si} d={ap} fill={s.color} opacity="0.08" />;
        })}
      {series.map((s, si) => {
        const pts = s.data.map((v, i) => [ix(i), iy(v)]);
        return (
          <g key={si}>
            <path d={smoothPath(pts)} fill="none" stroke={s.color} strokeWidth={s.width || 2.25} opacity={s.dim ? 0.35 : 1} />
            {s.dots && pts.filter((_, i) => i % 3 === 0).map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r="2.4" fill={s.color} />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export interface Stack { key?: string; color: string; values: number[]; dim?: boolean; }
export function StackedBar({
  categories, stacks, height = 260, yMax, yStep = 20,
}: { categories: string[]; stacks: Stack[]; height?: number; yMax?: number; yStep?: number }) {
  const W = 1000, H = height, padL = 30, padR = 10, padT = 12, padB = 28;
  const totals = categories.map((_c, ci) => stacks.reduce((s, st) => s + st.values[ci], 0));
  const max = yMax || Math.max(...totals) * 1.12;
  const iy = (v: number) => padT + (H - padT - padB) * (1 - v / max);
  const bw = (W - padL - padR) / categories.length;
  const barW = Math.min(bw * 0.56, 64);
  const yTicks: number[] = [];
  for (let v = 0; v <= max; v += yStep) yTicks.push(v);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }} preserveAspectRatio="none">
      {yTicks.map((v, i) => (
        <g key={i}>
          <line x1={padL} x2={W - padR} y1={iy(v)} y2={iy(v)} stroke="var(--line-soft)" strokeWidth="1" />
          <text x={padL - 7} y={iy(v) + 3} textAnchor="end" fontSize="10" fontFamily="var(--mono)" fill="var(--ink-3)">{v}</text>
        </g>
      ))}
      {categories.map((c, ci) => {
        const cx = padL + bw * ci + bw / 2;
        let acc = 0;
        return (
          <g key={ci}>
            {stacks.map((st, si) => {
              const v = st.values[ci];
              const y0 = iy(acc), y1 = iy(acc + v);
              acc += v;
              const isTop = si === stacks.length - 1;
              return (
                <rect
                  key={si}
                  x={cx - barW / 2}
                  y={y1}
                  width={barW}
                  height={Math.max(0, y0 - y1)}
                  fill={st.color}
                  rx={isTop ? 3 : 0}
                  opacity={st.dim ? 0.18 : 1}
                  style={{ transition: "opacity .25s ease" }}
                />
              );
            })}
            <text x={cx} y={H - 9} textAnchor="middle" fontSize="10.5" fontFamily="var(--font)" fontWeight="600" fill="var(--ink-3)">{c}</text>
          </g>
        );
      })}
    </svg>
  );
}

export interface HeatRow { label: string; color: string; dim?: boolean; }
export function Heatmap({
  rows, cols, matrix, max,
}: { rows: HeatRow[]; cols: string[]; matrix: number[][]; max?: number }) {
  const mx = max || Math.max(...matrix.flat());
  const band = (v: number) => {
    const t = v / mx;
    if (v === 0) return "var(--heat-0)";
    if (t < 0.16) return "var(--heat-1)";
    if (t < 0.30) return "var(--heat-2)";
    if (t < 0.45) return "var(--heat-3)";
    if (t < 0.60) return "var(--heat-4)";
    if (t < 0.78) return "var(--heat-5)";
    if (t < 0.92) return "var(--heat-6)";
    return "var(--heat-7)";
  };
  return (
    <div className="hm-wrap">
      <table className="hm">
        <thead>
          <tr>
            <th className="hm-corner"></th>
            {cols.map((c, i) => <th key={i} className={"hm-h" + (i % 2 ? " dim" : "")}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={r.dim ? "hm-dim" : ""}>
              <th className="hm-row"><span className="sw" style={{ background: r.color }}></span>{r.label}</th>
              {cols.map((_c, ci) => {
                const v = matrix[ri][ci];
                const t = v / mx;
                return (
                  <td key={ci} className="hm-cell" style={{ background: band(v), color: t > 0.55 ? "#fff" : "var(--ink-2)" }}>
                    {v || ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function WeeklyChart({
  labels, demand, planned, height = 240,
}: { labels: string[]; demand: number[]; planned: number[]; height?: number }) {
  const W = 1000, H = height, padL = 32, padR = 12, padT = 14, padB = 26;
  const n = labels.length;
  const max = Math.max(...demand, ...planned) * 1.12;
  const min = Math.min(...demand, ...planned) * 0.82;
  const ix = (i: number) => padL + (W - padL - padR) * (i / (n - 1));
  const iy = (v: number) => padT + (H - padT - padB) * (1 - (v - min) / (max - min));
  const dp = demand.map((v, i) => [ix(i), iy(v)]);
  const pp = planned.map((v, i) => [ix(i), iy(v)]);
  const yTicks = [Math.round(min), Math.round((min + max) / 2), Math.round(max)];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }} preserveAspectRatio="none">
      {yTicks.map((v, i) => (
        <g key={i}>
          <line x1={padL} x2={W - padR} y1={iy(v)} y2={iy(v)} stroke="var(--line-soft)" />
          <text x={padL - 7} y={iy(v) + 3} textAnchor="end" fontSize="10" fontFamily="var(--mono)" fill="var(--ink-3)">{v}</text>
        </g>
      ))}
      <path d={smoothPath(dp) + ` L ${ix(n - 1)} ${iy(min)} L ${ix(0)} ${iy(min)} Z`} fill="var(--accent)" opacity="0.10" />
      <path d={smoothPath(pp)} fill="none" stroke="var(--ink-3)" strokeWidth="2" strokeDasharray="5 5" />
      <path d={smoothPath(dp)} fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      {dp.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />)}
      {labels.map((l, i) => <text key={i} x={ix(i)} y={H - 8} textAnchor="middle" fontSize="10" fontFamily="var(--mono)" fill="var(--ink-3)">{l}</text>)}
    </svg>
  );
}

export function Gauge({
  value, size = 86, label, color = "var(--accent)",
}: { value: number; size?: number; label?: string; color?: string }) {
  const r = size / 2 - 7, c = 2 * Math.PI * r, off = c * (1 - value / 100);
  return (
    <div className="gauge">
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-3)" strokeWidth="7" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="7"
                strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off}
                transform={`rotate(-90 ${size / 2} ${size / 2})`} />
        <text x="50%" y="50%" textAnchor="middle" dy="0.35em" fontSize="19" fontFamily="var(--mono)" fontWeight="600" fill="var(--ink-1)">{value}%</text>
      </svg>
      {label && <span className="gauge-l">{label}</span>}
    </div>
  );
}

export function Skel({ w, h = 14, r = 6, style }: { w?: number | string; h?: number; r?: number; style?: CSSProperties }) {
  return <span className="skel" style={{ width: w, height: h, borderRadius: r, display: "block", ...style }} />;
}
export function KpiSkeleton() {
  return (
    <div className="kpis inline">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="kpi" style={{ gap: 9 }}>
          <Skel w="52%" h={9} /><Skel w="64%" h={22} r={7} /><Skel w="44%" h={9} />
        </div>
      ))}
    </div>
  );
}
export function ChartCardSkeleton({ height = 300, title = true }: { height?: number; title?: boolean }) {
  return (
    <div className="card">
      {title && <div className="card-head"><Skel w={180} h={13} /><div className="spacer"></div><Skel w={120} h={11} /></div>}
      <div className="card-body" style={{ display: "flex", alignItems: "flex-end", gap: 10, height, padding: "22px 18px" }}>
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="skel" style={{ flex: 1, height: 20 + Math.abs(Math.sin(i * 0.9)) * 70 + "%", borderRadius: 5 }} />
        ))}
      </div>
    </div>
  );
}
export function TableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="card">
      <div className="card-head"><Skel w={150} h={13} /></div>
      <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 13, padding: "16px 18px" }}>
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Skel w="22%" h={11} /><Skel w="14%" h={11} /><div style={{ flex: 1 }}></div>
            <Skel w={90} h={11} /><Skel w={40} h={11} />
          </div>
        ))}
      </div>
    </div>
  );
}
export function ViewSkeleton({ withKpis = true }: { withKpis?: boolean }) {
  return (
    <div className="grid" style={{ gap: "var(--gap)" }}>
      {withKpis && <KpiSkeleton />}
      <ChartCardSkeleton height={300} />
      <TableSkeleton rows={6} />
    </div>
  );
}
