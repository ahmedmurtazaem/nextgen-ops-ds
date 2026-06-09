"use client";
import { useState } from "react";
import { Example, PageHead } from "@/_docs/Example";
import { ViewTabs } from "@/lib/composites/ViewTabs";

export default function ViewTabsPage() {
  const [v, setV] = useState("hourly");
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="View tabs"
        lede="Pill tabs for sub-views inside a card or page body. Use when the same dataset has multiple time-slice views — Hourly / Day of Week / Weekly etc." />

      <div><h2>Basic</h2>
        <Example code={`<ViewTabs
  active={view}
  onChange={setView}
  tabs={[
    { id: "summary",    label: "Summary" },
    { id: "hourly",     label: "Hourly"  },
    { id: "dow",        label: "Day of Week" },
    { id: "weekly",     label: "Weekly" },
    { id: "employment", label: "Employment" },
  ]}
/>`}>
          <ViewTabs active={v} onChange={setV} tabs={[
            { id: "summary",    label: "Summary" },
            { id: "hourly",     label: "Hourly"  },
            { id: "dow",        label: "Day of Week" },
            { id: "weekly",     label: "Weekly" },
            { id: "employment", label: "Employment" },
          ]} />
        </Example>
      </div>
    </div>
  );
}
