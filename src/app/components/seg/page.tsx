"use client";
import { useState } from "react";
import { Example, PageHead } from "@/_docs/Example";
import { Seg } from "@/lib/composites/Seg";

export default function SegPage() {
  const [v, setV] = useState("assignments");
  const [w, setW] = useState("all");
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Segmented control"
        lede="2–4 mutually-exclusive options. Use for layer switching, view toggles, and filter triplets (All / Hard / Soft)." />

      <div><h2>Three layers</h2>
        <Example code={`<Seg
  value={layer}
  onChange={setLayer}
  options={[
    { id: "assignments", label: "Assignments",   icon: "grid"  },
    { id: "gaps",        label: "Coverage Gaps", icon: "alert" },
    { id: "ot",          label: "OT Hotspots",   icon: "flame" },
  ]}
/>`}>
          <Seg value={v} onChange={setV} options={[
            { id: "assignments", label: "Assignments",   icon: "grid"  },
            { id: "gaps",        label: "Coverage Gaps", icon: "alert" },
            { id: "ot",          label: "OT Hotspots",   icon: "flame" },
          ]} />
        </Example>
      </div>

      <div><h2>Filter pattern</h2>
        <Example code={`<Seg value={filter} onChange={setFilter} options={[
  { id: "all",  label: "All" },
  { id: "hard", label: "Hard 3" },
  { id: "soft", label: "Soft 3" },
]} />`}>
          <Seg value={w} onChange={setW} options={[
            { id: "all",  label: "All" },
            { id: "hard", label: "Hard 3" },
            { id: "soft", label: "Soft 3" },
          ]} />
        </Example>
      </div>
    </div>
  );
}
