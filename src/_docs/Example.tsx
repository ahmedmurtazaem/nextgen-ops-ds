import type { ReactNode } from "react";

export interface ExampleProps {
  title?: string;
  /** Source snippet rendered below the preview. Pass as a string (no JSX). */
  code: string;
  /** When `true`, the preview lays out children in a row with wrap. */
  row?: boolean;
  children: ReactNode;
}

/**
 * Docs preview block — renders the live component above its source code.
 * Keep the `code` prop hand-authored (no automatic JSX-to-string) so the
 * snippet matches the rendered output exactly.
 */
export function Example({ title, code, row, children }: ExampleProps) {
  return (
    <div className="ex">
      {title && <div className="ex-head">{title}</div>}
      <div className={"ex-preview" + (row ? " flex-row" : "")}>{children}</div>
      <pre className="ex-code">{code}</pre>
    </div>
  );
}

export interface PageHeadProps { kicker?: string; title: string; lede?: string; }
export function PageHead({ kicker, title, lede }: PageHeadProps) {
  return (
    <header className="page-head">
      {kicker && <span className="kicker">{kicker}</span>}
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </header>
  );
}

export interface ColorChipProps { name: string; cssVar: string; hex: string; }
export function ColorChip({ name, cssVar, hex }: ColorChipProps) {
  return (
    <div className="chip">
      <div className="chip-swatch" style={{ background: hex }} />
      <div className="chip-meta">
        <b>{name}</b>
        <code>{cssVar}</code>
        <code>{hex}</code>
      </div>
    </div>
  );
}

export interface TokenRow { name: string; value: string; sample?: ReactNode; }
export function TokenTable({ rows, columns = ["Token", "Value", "Sample"] }: { rows: TokenRow[]; columns?: string[] }) {
  return (
    <table className="tk-tbl">
      <thead><tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr></thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <td className="mono">{r.name}</td>
            <td className="mono">{r.value}</td>
            <td>{r.sample}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
