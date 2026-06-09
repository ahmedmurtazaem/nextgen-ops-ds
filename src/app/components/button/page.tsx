import { Example, PageHead } from "@/_docs/Example";
import { Button } from "@/lib/primitives/Button";

export default function ButtonPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Button"
        lede="The canonical action element. Six variants and three sizes. Use primary for the single most important action per page; everything else is default." />

      <div><h2>Variants</h2>
        <Example row code={`<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="petrol">Petrol</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="go">Save Rule</Button>
<Button variant="danger-ghost">Delete</Button>`}>
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="petrol">Petrol</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="go">Save Rule</Button>
          <Button variant="danger-ghost">Delete</Button>
        </Example>
      </div>

      <div><h2>Sizes</h2>
        <Example row code={`<Button>md (default)</Button>
<Button size="sm">sm</Button>
<Button size="xs">xs</Button>`}>
          <Button>md (default)</Button>
          <Button size="sm">sm</Button>
          <Button size="xs">xs</Button>
        </Example>
      </div>

      <div><h2>With icons</h2>
        <Example row code={`<Button variant="primary" icon="plus">New Plan</Button>
<Button variant="petrol" icon="download">Export</Button>
<Button icon="refresh" iconRight="chevR">Re-run</Button>`}>
          <Button variant="primary" icon="plus">New Plan</Button>
          <Button variant="petrol" icon="download">Export</Button>
          <Button icon="refresh" iconRight="chevR">Re-run</Button>
        </Example>
      </div>

      <div><h2>Disabled</h2>
        <Example row code={`<Button variant="primary" disabled>Disabled</Button>
<Button disabled>Disabled ghost</Button>`}>
          <Button variant="primary" disabled>Disabled</Button>
          <Button disabled>Disabled ghost</Button>
        </Example>
      </div>

      <div><h2>Usage notes</h2>
        <ul>
          <li><b>One primary per page.</b> The petroleum-accent button anchors the most important action. Stack multiple primaries and the page loses focus.</li>
          <li><b>Petrol vs primary.</b> <code>petrol</code> uses the deeper brand surface — reserve it for the brand-anchored area (e.g. the &quot;Load Sample Schedule&quot; CTA in Create Plan).</li>
          <li><b>Go vs primary.</b> <code>go</code> uses the green semantic surface. Use only when the action commits — e.g. &quot;Save Rule&quot; in the engagement-rules editor.</li>
          <li><b>Ghost</b> is the default for trailing secondary actions (Cancel, Discard, Close).</li>
        </ul>
      </div>
    </div>
  );
}
