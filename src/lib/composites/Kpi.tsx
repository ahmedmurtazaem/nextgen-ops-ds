import type { ReactNode } from "react";
import { Icon } from "../Icon";

export interface KpiCard {
  key: string;
  label: ReactNode;
  /** Big number — usually mono. */
  val: ReactNode;
  /** Trailing unit (`%`, `hrs`, etc.). */
  unit?: string;
  /** Caption below the value. */
  sub?: ReactNode;
  /** Icon name from the shared set. */
  icon?: string;
  /** Delta pill text — `+1.8`, `−3`, etc. Pair with `dir`. */
  delta?: string;
  /** Direction for the delta pill — controls tone + arrow icon. */
  dir?: "up" | "down" | "flat";
  /** Highlight the card with a vertical accent stripe. */
  accent?: boolean;
}

export interface KpiStripProps {
  items: KpiCard[];
  /** Layout — `inline` is the one-row strip, `compact` shrinks padding. */
  style?: "grid" | "inline" | "compact";
}

/**
 * Repeating KPI tiles with a uniform layout.
 *
 * @example
 * <KpiStrip style="inline" items={[
 *   { key:"sla", label:"SLA Coverage", val:"96.4", unit:"%", accent:true, icon:"shield" },
 * ]} />
 */
export function KpiStrip({ items, style = "grid" }: KpiStripProps) {
  const cls = style === "inline" ? "kpis inline" : style === "compact" ? "kpis compact" : "kpis";
  return (
    <div className={cls}>
      {items.map((k) => (
        <div key={k.key} className={"kpi" + (k.accent ? " accent" : "")}>
          <div className="klabel">
            {k.icon && style !== "inline" && (
              <span className="kicon"><Icon name={k.icon} size={15} /></span>
            )}
            {k.label}
          </div>
          <div className="kval num">{k.val}{k.unit && <span className="unit">{k.unit}</span>}</div>
          {(k.delta || k.sub) && (
            <div className="kfoot">
              {k.delta && (
                <span className={"delta " + (k.dir === "up" ? "up" : k.dir === "down" ? "down" : "flat")}>
                  {k.dir && k.dir !== "flat" && (
                    <Icon name={k.dir === "up" ? "arrowUp" : "arrowDown"} size={11} />
                  )}
                  {k.delta}
                </span>
              )}
              {k.sub && <span>{k.sub}</span>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
