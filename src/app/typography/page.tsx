import { PageHead, TokenTable } from "@/_docs/Example";
import { Icon } from "@/lib/Icon";

export default function TypographyPage() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Foundations"
        title="Typography"
        lede="Two typefaces, two jobs. Bukra carries the UI in Latin and Arabic; IBM Plex Mono carries every digit, code, and tabular column in the product."
      />

      <div>
        <h2>Typefaces</h2>
        <div className="docs-cols">
          <div className="card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <span className="muted" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>UI typeface</span>
            <div style={{ fontFamily: "var(--font)", fontSize: 36, fontWeight: 700, color: "var(--ink-1)", letterSpacing: "-.02em" }}>Bukra</div>
            <div style={{ fontFamily: "var(--font)", fontSize: 26, fontWeight: 400, color: "var(--ink-2)", letterSpacing: "-.005em" }}>أهلاً بك في الجدولة</div>
            <p style={{ fontSize: 12.5, color: "var(--ink-3)", margin: "4px 0 0" }}>
              4 weights — Light 300, Regular 400, Medium 500, Bold 700. Bundled as local fonts. Equally
              tuned for Latin and Arabic — the same family covers EN and AR copy.
            </p>
          </div>
          <div className="card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <span className="muted" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Data typeface</span>
            <div style={{ fontFamily: "var(--mono)", fontSize: 36, fontWeight: 600, color: "var(--ink-1)", letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums" }}>96.4%</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 18, fontWeight: 500, color: "var(--ink-2)", fontVariantNumeric: "tabular-nums" }}>ATA 14:32Z · STD −10</div>
            <p style={{ fontSize: 12.5, color: "var(--ink-3)", margin: "4px 0 0" }}>
              IBM Plex Mono from Google Fonts (subset: latin). Always render numbers with
              <code> font-feature-settings: &quot;tnum&quot; 1</code> via the <code>.num</code> utility for column alignment.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2>Type scale</h2>
        <TokenTable
          columns={["Token", "Size", "Sample"]}
          rows={[
            { name: "--t-display", value: "30px", sample: <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-.02em" }}>Display</span> },
            { name: "--t-h1",      value: "21px", sample: <span style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-.02em" }}>Heading 1</span> },
            { name: "--t-h2",      value: "17px", sample: <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-.01em" }}>Heading 2</span> },
            { name: "--t-h3",      value: "14px", sample: <span style={{ fontSize: 14, fontWeight: 700 }}>Heading 3</span> },
            { name: "--t-body",    value: "13.5px", sample: <span style={{ fontSize: 13.5 }}>Body — the duty manager opens the workbench</span> },
            { name: "--t-small",   value: "12.5px", sample: <span style={{ fontSize: 12.5, color: "var(--ink-2)" }}>Small — secondary copy in a card body</span> },
            { name: "--t-cap",     value: "11px",   sample: <span style={{ fontSize: 11, color: "var(--ink-3)" }}>Caption — meta, sub-labels, hint text</span> },
            { name: "--t-over",    value: "10.5px", sample: <span className="overline">Overline · category label</span> },
          ]}
        />
      </div>

      <div>
        <h2>Numeric typography</h2>
        <p>
          Every measurable value in the product uses the mono stack with tabular numerals — KPI values,
          times, percentages, IDs, shift codes, ground-time targets, IATA codes. This guarantees column
          alignment across rows and prevents rounding from causing layout jitter.
        </p>
        <p>
          Two utility classes are provided:
        </p>
        <ul>
          <li><code>.mono</code> — sets the family + opts into <code>tnum</code> + tightens letter-spacing for compact data.</li>
          <li><code>.num</code> — same family + <code>font-variant-numeric: tabular-nums</code>; preferred for tabular cells.</li>
        </ul>
      </div>

      <div>
        <h2>Arabic & RTL</h2>
        <p>
          The whole system is RTL-aware. Flipping <code>dir=&quot;rtl&quot;</code> on <code>&lt;html&gt;</code> reverses logical
          directions (start/end margins and paddings, drawer entry edge, chevron rotations, toggle switch
          motion). A few rules:
        </p>
        <ul>
          <li><b>Don&apos;t set a different family for Arabic.</b> Bukra covers both scripts.</li>
          <li><b>Don&apos;t translate Latin technical strings.</b> ATA / STD / IATA codes / time-zone abbreviations stay Latin.</li>
          <li><b>Do use logical CSS properties</b> (<code>margin-inline-start</code>, <code>inset-inline-end</code>) — the component layer already does this for you.</li>
          <li><b>Charts &amp; tables stay LTR</b> for axes / numeric columns; only the surrounding chrome flips.</li>
        </ul>
      </div>

      <div>
        <h2>Dos and Don&apos;ts</h2>
        <div className="dd">
          <DoCard text="Use Bukra for UI labels and reading copy; Plex Mono for any digit, code, or column." />
          <DontCard text="Use the mono font for headings or body text. It's a data face, not a prose face." />
          <DoCard text="Reach for the type-scale tokens (--t-h2 etc.) rather than hand-picking pixel values." />
          <DontCard text="Skip a level in the type scale to fit a hero. Hero copy is not an ops-app pattern." />
          <DoCard text="Render percentages and time values with .num to keep columns aligned across rows." />
          <DontCard text="Use a sans-serif fallback for numbers — alignment breaks immediately on real data." />
        </div>
      </div>
    </div>
  );
}

function DoCard({ text }: { text: string }) {
  return (
    <div className="dd-card do">
      <span className="h"><span className="ic"><Icon name="check" size={12} /></span>Do</span>
      <p>{text}</p>
    </div>
  );
}
function DontCard({ text }: { text: string }) {
  return (
    <div className="dd-card dont">
      <span className="h"><span className="ic"><Icon name="x" size={12} /></span>Don&apos;t</span>
      <p>{text}</p>
    </div>
  );
}
