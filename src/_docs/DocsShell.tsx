"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { NAV } from "./nav";
import { Icon } from "@/lib/Icon";

export function DocsShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const norm = (p: string) => (p === "/" ? "/" : p.replace(/\/+$/, ""));
  const here = norm(pathname);
  return (
    <div className="docs-app">
      <div className="docs-brand">
        <span className="brand-mark">SGS</span>
        <span className="brand-text">
          <b>NextGen Ops</b>
          <span>Design System</span>
        </span>
      </div>
      <header className="docs-topbar">
        <span className="crumb"><b>v0.1.0</b> · for internal use</span>
        <span className="spacer" />
        <a className="gh" href="https://github.com/ahmedmurtazaem/nextgen-ops-ds" target="_blank" rel="noreferrer">
          <Icon name="link" size={13} />GitHub
        </a>
      </header>
      <aside className="docs-side">
        {NAV.map((s) => (
          <div key={s.title}>
            <div className="docs-sec">{s.title}</div>
            {s.links.map((l) => {
              const active = norm(l.href) === here;
              return (
                <Link key={l.href} href={l.href} className={active ? "active" : ""}>
                  {l.label}
                </Link>
              );
            })}
          </div>
        ))}
      </aside>
      <main className="docs-main">{children}</main>
    </div>
  );
}
