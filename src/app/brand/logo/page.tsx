import { PageHead } from "@/_docs/Example";
import { Icon } from "@/lib/Icon";

const BASE = process.env.NODE_ENV === "production" ? "/nextgen-ops-ds" : "";

export default function LogoPage() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Brand"
        title="Logo usage"
        lede="The SGS logomark is the only brand mark inside NextGen Ops. The product is identified by the unified portal chrome, not a separate product mark."
      />

      <div>
        <h2>The mark</h2>
        <div className="docs-cols">
          <div className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 12, alignItems: "center", background: "#FFFFFF" }}>
            <img src={`${BASE}/assets/sgs-logo-mark.png`} alt="SGS logomark, color" style={{ width: 200, height: "auto" }} />
            <span className="muted" style={{ fontSize: 11.5 }}>On light surface</span>
          </div>
          <div className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 12, alignItems: "center", background: "#0E4B64" }}>
            <img src={`${BASE}/assets/sgs-logo-mark.png`} alt="SGS logomark on petroleum" style={{ width: 200, height: "auto", filter: "brightness(0) invert(1)" }} />
            <span style={{ fontSize: 11.5, color: "#BFD7E0" }}>On petroleum / dark surface</span>
          </div>
        </div>
      </div>

      <div>
        <h2>Placement</h2>
        <ul>
          <li><b>App brand corner.</b> Top-left of the portal shell, 150px wide, vertically centered in the 60px brand bar.</li>
          <li><b>Sign-in panel.</b> Top-left of the petroleum brand panel, 150px × 115px, with the white invert filter applied.</li>
          <li><b>Favicon / OG.</b> The logomark only — never with the &quot;NextGen Ops&quot; wordmark.</li>
        </ul>
      </div>

      <div>
        <h2>Dos and Don&apos;ts</h2>
        <div className="dd">
          <DoCard text="Place on white, light surfaces, or petroleum (#0E4B64) with the white-invert filter." />
          <DontCard text="Place on any green, gold, or function-palette surface. The mark loses brand authority against colored backgrounds." />
          <DoCard text="Allow at least 24px of clear space on all sides." />
          <DontCard text="Stretch, rotate, or recolor the mark. The blue is fixed by the brand." />
          <DoCard text="Use 150px width in the chrome; 200px in the sign-in panel; 30px (rounded square) for the docs site brand mark." />
          <DontCard text="Use the mark inside body copy or as an inline icon. It's a brand element, not a glyph." />
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
