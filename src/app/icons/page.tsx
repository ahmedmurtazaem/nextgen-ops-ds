"use client";
import { useState } from "react";
import { PageHead } from "@/_docs/Example";
import { Icon } from "@/lib/Icon";

const ALL_ICONS = [
  "plane","clock","users","id","shield","truck","target","flame","search","bell","gear","sun","moon","globe",
  "chevR","chevD","plus","calendar","upload","download","layers","rosterCal","dispatch","chart","grid","file",
  "sliders","building","lock","check","alert","info","wand","x","panel","filter","dots","arrowUp","arrowDown",
  "arrowRight","link","spark","clipboard","pin","scale","refresh","zap","megaphone","expand","collapse","trend",
  "beaker","planeLanding","timeline","logout","minus","pencil","trash","pause",
];

export default function IconsPage() {
  const [q, setQ] = useState("");
  const list = ALL_ICONS.filter((n) => n.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="docs-page">
      <PageHead
        kicker="Foundations"
        title="Icons"
        lede="Single-stroke line icons at 1.75 stroke width, rendered as inline SVG. Lucide-style. The set is intentionally small — add new icons by editing the shared map in src/lib/Icon.tsx."
      />

      <div>
        <h2>Usage</h2>
        <pre className="ex-code">{`<Icon name="check" size={15} />
<Icon name="alert" size={18} className="text-warn" />`}</pre>
        <p>
          The icon inherits <code>currentColor</code>, so wrap in any color-bearing element to tint it.
          Defaults: size 18, stroke 1.75.
        </p>
      </div>

      <div>
        <h2>Browse the set</h2>
        <input
          className="input"
          placeholder="Search icons…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{ maxWidth: 280 }}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 10, marginTop: 16 }}>
          {list.map((n) => (
            <div key={n} className="card" style={{ padding: 14, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Icon name={n} size={22} />
              <code style={{ fontSize: 11, color: "var(--ink-2)" }}>{n}</code>
            </div>
          ))}
          {list.length === 0 && <div className="muted" style={{ fontSize: 12.5 }}>No matches.</div>}
        </div>
      </div>
    </div>
  );
}
