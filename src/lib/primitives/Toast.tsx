"use client";
import { useEffect, useState } from "react";
import { Icon } from "../Icon";

export type ToastKind = "ok" | "warn" | "info";
export interface ToastItem { id: number; msg: string; kind: ToastKind; }

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window { toast?: (msg: string, kind?: ToastKind) => void; }
}

/**
 * Mount the global toast outlet. Renders nothing until `toast(...)` is called.
 * Mount once near the app root.
 *
 * @example
 * <Toaster />
 * // anywhere:
 * toast("Plan published", "info");
 */
export function Toaster() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  useEffect(() => {
    window.toast = (msg, kind = "ok") => {
      const id = Date.now() + Math.random();
      setToasts((t) => [...t, { id, msg, kind }]);
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2800);
    };
    return () => { delete window.toast; };
  }, []);
  return (
    <div className="toaster">
      {toasts.map((t) => (
        <div key={t.id} className={"toast " + t.kind}>
          <Icon name={t.kind === "warn" ? "alert" : t.kind === "info" ? "info" : "check"} size={15} />
          <span>{t.msg}</span>
        </div>
      ))}
    </div>
  );
}

/** Fire-and-forget toast helper. Safe to call before <Toaster /> mounts (no-op). */
export function toast(msg: string, kind: ToastKind = "ok") {
  if (typeof window !== "undefined" && window.toast) window.toast(msg, kind);
}
