import { Example, PageHead } from "@/_docs/Example";
import { Field, Input } from "@/lib/primitives/Field";

export default function FieldPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Field & Input"
        lede="Form field shell pairing a label with an input and optional hint/error. Compose with <Input> for the standard text field." />

      <div><h2>Basic</h2>
        <Example code={`<Field label="Station Name" hint="Full descriptive name">
  <Input placeholder="Jeddah" />
</Field>`}>
          <Field label="Station Name" hint="Full descriptive name">
            <Input placeholder="Jeddah" />
          </Field>
        </Example>
      </div>

      <div><h2>Required &amp; optional indicators</h2>
        <Example code={`<Field label="Station Code · IATA" required hint="3 uppercase letters">
  <Input mono placeholder="JED" />
</Field>
<Field label="Functions" optional>
  <Input placeholder="Multi-select" />
</Field>`}>
          <Field label="Station Code · IATA" required hint="3 uppercase letters">
            <Input mono placeholder="JED" />
          </Field>
          <Field label="Functions" optional>
            <Input placeholder="Multi-select" />
          </Field>
        </Example>
      </div>

      <div><h2>Error state</h2>
        <Example code={`<Field label="Station Code · IATA" error="Station Code already exists" required>
  <Input mono invalid value="JED" readOnly />
</Field>`}>
          <Field label="Station Code · IATA" error="Station Code already exists" required>
            <Input mono invalid value="JED" readOnly />
          </Field>
        </Example>
      </div>

      <div><h2>Inline unit</h2>
        <Example code={`<Field label="Buffer" unit="%">
  <Input mono defaultValue="6" />
</Field>`}>
          <Field label="Buffer" unit="%">
            <Input mono defaultValue="6" />
          </Field>
        </Example>
      </div>
    </div>
  );
}
