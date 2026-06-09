"use client";
import { Example, PageHead } from "@/_docs/Example";
import { Toaster, toast } from "@/lib/primitives/Toast";
import { Button } from "@/lib/primitives/Button";

export default function ToastPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Toast"
        lede="Brief acknowledgement messages. Fire-and-forget — call toast('...') from anywhere, mount <Toaster /> once near the app root." />
      <Toaster />

      <div><h2>Try it</h2>
        <Example row code={`import { toast } from "@sgs/nextgen-ops-ds";

toast("Plan published to Rostering", "info");
toast("Approval recorded");           // defaults to "ok"
toast("Fix the highlighted fields", "warn");`}>
          <Button variant="primary" onClick={() => toast("Approval recorded")}>Success</Button>
          <Button variant="petrol" onClick={() => toast("Plan published to Rostering", "info")}>Info</Button>
          <Button onClick={() => toast("Fix the highlighted fields", "warn")}>Warning</Button>
        </Example>
      </div>

      <div><h2>Mount the outlet</h2>
        <Example code={`// src/app/layout.tsx — mount once at the app root
import { Toaster } from "@sgs/nextgen-ops-ds";

export default function RootLayout({ children }) {
  return (
    <html><body>
      {children}
      <Toaster />
    </body></html>
  );
}`}>
          <div className="muted" style={{ fontSize: 12.5 }}>The Toaster is invisible until a toast fires.</div>
        </Example>
      </div>

      <div><h2>When to use</h2>
        <ul>
          <li><b>Confirmations of operator actions</b> — &quot;Station JED updated&quot;, &quot;Rule deleted&quot;, &quot;Plan published&quot;.</li>
          <li><b>Status of background work</b> — &quot;Recalculating demand…&quot; (info), &quot;Demand updated&quot; (ok).</li>
          <li><b>Soft warnings</b> — &quot;Fix the highlighted fields&quot;.</li>
        </ul>
        <p>Don&apos;t use toasts for blocking errors — those belong in an alert or a drawer footer.</p>
      </div>
    </div>
  );
}
