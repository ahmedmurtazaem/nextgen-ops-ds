import { Example, PageHead } from "@/_docs/Example";
import { Gauge, Heatmap, LineChart, StackedBar, WeeklyChart } from "@/lib/charts";

const HOURS = Array.from({ length: 24 }, (_, h) => h);
const HOURLY = {
  ramp:    [3,9,7,9,11,12,11,9,12,11,11,11,11,11,12,13,13,12,11,12,13,12,10,9],
  drivers: [2,3,3,3,3,4,5,4,4,5,5,5,5,5,5,5,6,6,6,5,5,4,3,3],
  bagop:   [3,5,6,5,4,6,9,7,8,7,7,8,9,8,7,8,10,11,10,9,8,7,6,5],
};
const FUNCTIONS = [
  { code: "RAMP",    color: "var(--fn-ramp)",    data: HOURLY.ramp },
  { code: "DRIVERS", color: "var(--fn-drivers)", data: HOURLY.drivers },
  { code: "BAG OP",  color: "var(--fn-bagop)",   data: HOURLY.bagop },
];
const WEEKS = ["W1","W2","W3","W4","W5","W6","W7","W8"];
const WEEKLY_DEMAND  = [118,124,121,128,126,131,128,122];
const WEEKLY_PLANNED = [120,122,124,126,128,128,126,124];
const DOW = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export default function ChartsPage() {
  return (
    <div className="docs-page">
      <PageHead kicker="Components" title="Charts"
        lede="Themeable inline SVG charts — no external dependencies. Every chart pulls its grid, ink, and accent colors from CSS custom properties, so they flip automatically in dark mode." />

      <div><h2>LineChart — multi-series</h2>
        <Example code={`<LineChart
  series={[
    { color: "var(--fn-ramp)",    data: HOURLY.ramp,    width: 2.25 },
    { color: "var(--fn-drivers)", data: HOURLY.drivers, width: 2.25 },
    { color: "var(--fn-bagop)",   data: HOURLY.bagop,   width: 2.25 },
  ]}
  xLabels={["00:00", "01:00", …]}
  height={260}
  yMax={20}
  yStep={4}
/>`}>
          <div className="card" style={{ width: "100%" }}>
            <div className="card-head"><h3>Hourly demand</h3></div>
            <div className="card-body">
              <LineChart
                series={FUNCTIONS.map((f) => ({ color: f.color, data: f.data, width: 2.25 }))}
                xLabels={HOURS.map((h) => String(h).padStart(2, "0") + ":00")}
                height={240} yMax={20} yStep={4}
              />
            </div>
          </div>
        </Example>
      </div>

      <div><h2>StackedBar — day of week</h2>
        <Example code={`<StackedBar
  categories={["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}
  stacks={[
    { color: "var(--fn-ramp)",    values: [29,29,29,24,29,29,29] },
    { color: "var(--fn-drivers)", values: [5,5,5,4,5,5,5] },
    { color: "var(--fn-bagop)",   values: [12,12,12,9,12,12,12] },
  ]}
  height={240}
  yStep={20}
/>`}>
          <div className="card" style={{ width: "100%" }}>
            <div className="card-head"><h3>Staffing by day of week</h3></div>
            <div className="card-body">
              <StackedBar
                categories={DOW}
                stacks={[
                  { color: "var(--fn-ramp)",    values: [29,29,29,24,29,29,29] },
                  { color: "var(--fn-drivers)", values: [5,5,5,4,5,5,5] },
                  { color: "var(--fn-bagop)",   values: [12,12,12,9,12,12,12] },
                ]}
                height={220} yStep={10}
              />
            </div>
          </div>
        </Example>
      </div>

      <div><h2>Heatmap — function × hour</h2>
        <Example code={`<Heatmap
  rows={FUNCTIONS.map(f => ({ label: f.code, color: f.color }))}
  cols={HOURS.map(h => String(h).padStart(2, "0"))}
  matrix={FUNCTIONS.map(f => f.data)}
  max={18}
/>`}>
          <div className="card" style={{ width: "100%" }}>
            <div className="card-head"><h3>Concurrency heatmap</h3></div>
            <div className="card-body">
              <Heatmap
                rows={FUNCTIONS.map((f) => ({ label: f.code, color: f.color }))}
                cols={HOURS.map((h) => String(h).padStart(2, "0"))}
                matrix={FUNCTIONS.map((f) => f.data)}
                max={18}
              />
            </div>
          </div>
        </Example>
      </div>

      <div><h2>WeeklyChart — demand vs planned</h2>
        <Example code={`<WeeklyChart labels={WEEKS} demand={WEEKLY_DEMAND} planned={WEEKLY_PLANNED} height={220} />`}>
          <div className="card" style={{ width: "100%" }}>
            <div className="card-head"><h3>Weekly demand vs planned</h3></div>
            <div className="card-body">
              <WeeklyChart labels={WEEKS} demand={WEEKLY_DEMAND} planned={WEEKLY_PLANNED} height={220} />
            </div>
          </div>
        </Example>
      </div>

      <div><h2>Gauge — radial</h2>
        <Example row code={`<Gauge value={96} label="SLA Coverage" size={86} />
<Gauge value={81} label="GSE Utilization" size={86} color="var(--fn-trc)" />
<Gauge value={62} label="Risk" size={86} color="var(--neg)" />`}>
          <Gauge value={96} label="SLA Coverage" size={86} />
          <Gauge value={81} label="GSE Utilization" size={86} color="var(--fn-trc)" />
          <Gauge value={62} label="Risk" size={86} color="var(--neg)" />
        </Example>
      </div>
    </div>
  );
}
