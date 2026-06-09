import type { HTMLAttributes } from "react";

export interface MeterProps extends HTMLAttributes<HTMLDivElement> {
  /** Fill percentage (0–100). */
  value: number;
  /** Tone — accent (default), `pos`, `warn`, or `neg`. */
  tone?: "accent" | "pos" | "warn" | "neg";
}

/**
 * Thin horizontal progress bar. Often paired with a numeric label.
 *
 * @example
 * <Meter value={96} tone="pos" style={{ width: 160 }} />
 */
export function Meter({ value, tone = "accent", className, style, ...rest }: MeterProps) {
  const toneCls = tone === "accent" ? "" : tone;
  const cls = ["meter", toneCls, className].filter(Boolean).join(" ");
  return (
    <div className={cls} style={style} {...rest}>
      <span style={{ width: Math.max(0, Math.min(100, value)) + "%" }}></span>
    </div>
  );
}
