"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../Icon";

export interface CtxSelectProps {
  /** Optional small label rendered before the value (e.g. "Station"). */
  k?: string;
  options: string[];
  value?: string;
  onChange?: (v: string) => void;
  icon?: string;
}

/**
 * Contextual select — used in ribbons + filter panels. Click-outside aware.
 *
 * @example
 * <CtxSelect k="Station" options={["JED — Jeddah", "RUH — Riyadh"]} />
 */
export function CtxSelect({ k, options = [], value, onChange, icon = "chevD" }: CtxSelectProps) {
  const init = value || options[0] || "";
  const [sel, setSel] = useState<string>(init);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  const pick = (o: string) => { setSel(o); setOpen(false); onChange?.(o); };
  return (
    <div className="ctx-wrap" ref={ref}>
      <button className={"ctx-select" + (open ? " open" : "")} onClick={() => setOpen((o) => !o)}>
        {k && <span className="k">{k}</span>}
        <span>{sel}</span>
        <Icon name={icon} size={14} />
      </button>
      {open && (
        <div className="ctx-menu">
          {options.map((o) => (
            <button key={o} className={"ctx-opt" + (o === sel ? " on" : "")} onClick={() => pick(o)}>
              <span className="ctx-tick">{o === sel && <Icon name="check" size={13} />}</span>
              <span>{o}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
