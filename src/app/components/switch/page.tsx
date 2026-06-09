"use client";
import { useState } from "react";
import { Example, PageHead } from "@/_docs/Example";
import { Switch } from "@/lib/primitives/Switch";

export default function SwitchPage() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Switch"
        lede="Binary toggle. Use for settings that take effect immediately (active/inactive, dark/light, Sundays-off). Never for form-style boolean choices — those belong in checkboxes." />

      <div><h2>Basic</h2>
        <Example row code={`<Switch value={on} onChange={setOn} />`}>
          <Switch value={a} onChange={setA} />
          <Switch value={b} onChange={setB} />
        </Example>
      </div>

      <div><h2>With label row</h2>
        <Example code={`<div style={{ display: "flex", alignItems: "center", gap: 10, height: 34 }}>
  <Switch value={enabled} onChange={setEnabled} />
  <span className="muted" style={{ fontSize: 12 }}>{enabled ? "Enabled" : "Disabled"}</span>
</div>`}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, height: 34 }}>
            <Switch value={a} onChange={setA} />
            <span className="muted" style={{ fontSize: 12 }}>{a ? "Enabled" : "Disabled"}</span>
          </div>
        </Example>
      </div>
    </div>
  );
}
