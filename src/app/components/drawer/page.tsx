"use client";
import { useState } from "react";
import { Example, PageHead } from "@/_docs/Example";
import { SideDrawer } from "@/lib/primitives/Drawer";
import { Button } from "@/lib/primitives/Button";
import { Field, Input } from "@/lib/primitives/Field";

export default function DrawerPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Side drawer"
        lede="Right-edge overlay panel for editing entities, approval flows, and configuration drafts. RTL-aware (flips to left edge). Close on Escape or backdrop click." />

      <div><h2>Open the drawer</h2>
        <Example code={`const [open, setOpen] = useState(false);

<Button variant="primary" icon="plus" onClick={() => setOpen(true)}>
  Add Station
</Button>

<SideDrawer
  open={open}
  title="Create Station"
  kicker="Station Config"
  onClose={() => setOpen(false)}
  footer={
    <>
      <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
      <div className="ribbon-spacer" />
      <Button variant="primary" size="sm" icon="check">Create Station</Button>
    </>
  }
>
  <Field label="Station Name" required>
    <Input placeholder="Jeddah" />
  </Field>
</SideDrawer>`}>
          <Button variant="primary" icon="plus" onClick={() => setOpen(true)}>Add Station</Button>
          <SideDrawer
            open={open}
            title="Create Station"
            kicker="Station Config"
            onClose={() => setOpen(false)}
            footer={
              <>
                <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
                <div className="ribbon-spacer" />
                <Button variant="primary" size="sm" icon="check" onClick={() => setOpen(false)}>Create Station</Button>
              </>
            }
          >
            <Field label="Station Name" required hint="Full descriptive name">
              <Input placeholder="Jeddah" />
            </Field>
          </SideDrawer>
        </Example>
      </div>

      <div><h2>Wide variant</h2>
        <p>Pass <code>wide</code> for multi-column form drawers (e.g. the engagement-rule add flow).</p>
      </div>
    </div>
  );
}
