import { Example, PageHead } from "@/_docs/Example";
import { Card, CardBody, CardHead } from "@/lib/primitives/Card";
import { Badge } from "@/lib/primitives/Badge";

export default function CardPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Card"
        lede="The default surface container. Pair with CardHead + CardBody for the standard pattern, or use Card on its own as a generic panel." />

      <div><h2>Standard</h2>
        <Example code={`<Card>
  <CardHead title="Today" sub="JED · Summer 2026" />
  <CardBody>Card content lives here.</CardBody>
</Card>`}>
          <Card style={{ width: "100%" }}>
            <CardHead title="Today" sub="JED · Summer 2026" />
            <CardBody>Card content lives here.</CardBody>
          </Card>
        </Example>
      </div>

      <div><h2>With actions</h2>
        <Example code={`<Card>
  <CardHead
    title="Scenario delta"
    actions={<Badge tone="pos" dot>Healthy</Badge>}
  />
  <CardBody>Detailed body…</CardBody>
</Card>`}>
          <Card style={{ width: "100%" }}>
            <CardHead title="Scenario delta" actions={<Badge tone="pos" dot>Healthy</Badge>} />
            <CardBody>Detailed body…</CardBody>
          </Card>
        </Example>
      </div>

      <div><h2>Flush body (tables)</h2>
        <p>Pass <code>style={`{{ padding: 0 }}`}</code> on <code>CardBody</code> to drop the inner padding when embedding a full-width table.</p>
        <Example code={`<Card>
  <CardHead title="Stations" />
  <CardBody style={{ padding: 0 }}>
    <table className="tbl">…</table>
  </CardBody>
</Card>`}>
          <Card style={{ width: "100%" }}>
            <CardHead title="Stations" />
            <CardBody style={{ padding: 0 }}>
              <table className="tbl">
                <thead><tr><th>Code</th><th>Name</th></tr></thead>
                <tbody>
                  <tr><td>JED</td><td>Jeddah</td></tr>
                  <tr><td>RUH</td><td>Riyadh</td></tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Example>
      </div>
    </div>
  );
}
