"use client";
import { useEffect, type ReactNode } from "react";
import { Icon } from "../Icon";

export interface SideDrawerProps {
  open: boolean;
  title?: string;
  /** Small all-caps eyebrow above the title. */
  kicker?: string;
  /** Close handler — also bound to Escape and backdrop click. */
  onClose: () => void;
  footer?: ReactNode;
  children: ReactNode;
  /** Slightly wider panel — useful for multi-column form drawers. */
  wide?: boolean;
}

/**
 * Right-edge drawer overlay. RTL-aware (flips to left edge in RTL contexts).
 * Closes on Escape and backdrop click.
 */
export function SideDrawer({ open, title, kicker, onClose, footer, children, wide }: SideDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="cd-overlay drawer">
      <div className="cd-backdrop" onClick={onClose}></div>
      <section className={"cd-panel drawer" + (wide ? " wide" : "")} role="dialog" aria-label={title}>
        <header className="cd-head">
          <div className="cd-title">
            {kicker && <span className="kicker">{kicker}</span>}
            {title && <h2>{title}</h2>}
          </div>
          <div className="cd-head-actions">
            <button className="icon-btn" title="Close" onClick={onClose}><Icon name="x" size={17} /></button>
          </div>
        </header>
        <div className="cd-body">{children}</div>
        {footer && <footer className="cd-foot">{footer}</footer>}
      </section>
    </div>
  );
}
