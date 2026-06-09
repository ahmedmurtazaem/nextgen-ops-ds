"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "../Icon";

export interface RibbonFilterProps {
  label?: string;
  align?: "start" | "end";
  children: ReactNode;
}

/** Click-to-open filter popover anchored to a ribbon button. */
export function RibbonFilter({ label = "Filters", align = "end", children }: RibbonFilterProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  return (
    <div className="ctx-wrap" ref={ref}>
      <button className={"btn btn-sm" + (open ? " on" : "")} onClick={() => setOpen((o) => !o)}>
        <Icon name="filter" size={15} />{label}
      </button>
      {open && <div className={"filter-pop " + align}>{children}</div>}
    </div>
  );
}
