"use client";
import { useEffect, useState } from "react";

export interface DualClockProps {
  /** Display label for the station local zone (e.g. "AST"). */
  tz?: string;
  /** UTC offset in hours — defaults to +3 (KSA). */
  offset?: number;
  /** UTC label override — defaults to `"UTC"`. */
  utcLabel?: string;
  /** Local label override — defaults to `"JED"`. */
  localLabel?: string;
}

/**
 * Side-by-side clock — UTC + station-local. Ticks every 30 seconds.
 * Use in the top bar of ops consoles where time-of-day matters.
 */
export function DualClock({ tz = "AST", offset = 3, utcLabel = "UTC", localLabel = "JED" }: DualClockProps) {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  const utcH = now.getUTCHours(), utcM = now.getUTCMinutes();
  const locH = (utcH + offset) % 24;
  const fmt = (h: number, m: number) => String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
  return (
    <div className="dualclock" title="Dual timezone — UTC and station local">
      <span className="tzrow"><span className="tzk">{utcLabel}</span><span className="tzv mono">{fmt(utcH, utcM)}Z</span></span>
      <span className="tzdiv"></span>
      <span className="tzrow"><span className="tzk">{localLabel}</span><span className="tzv mono">{fmt(locH, utcM)}</span><span className="tzz">{tz}</span></span>
    </div>
  );
}
