import { ColorChip, PageHead } from "@/_docs/Example";
import { Icon } from "@/lib/Icon";

const BRAND = [
  { name: "Petroleum",     cssVar: "--petroleum",     hex: "#0E4B64" },
  { name: "Petroleum 600", cssVar: "--petroleum-600", hex: "#155B77" },
  { name: "Petroleum 500", cssVar: "--petroleum-500", hex: "#1F6E8C" },
  { name: "Green",         cssVar: "--green",         hex: "#61B947" },
  { name: "Green 700",     cssVar: "--green-700",     hex: "#4E9B39" },
  { name: "Green 800",     cssVar: "--green-800",     hex: "#3E7D2D" },
  { name: "Gold",          cssVar: "--gold",          hex: "#E0A400" },
  { name: "Danger",        cssVar: "--danger",        hex: "#C0392B" },
];

const FN = [
  { name: "BAG OP",     cssVar: "--fn-bagop",    hex: "#1F6E8C" },
  { name: "BAG REP",    cssVar: "--fn-bagrep",   hex: "#D98248" },
  { name: "BASEMENT GW",cssVar: "--fn-basement", hex: "#5AA641" },
  { name: "DRIVERS",    cssVar: "--fn-drivers",  hex: "#6A6FC4" },
  { name: "RAMP GW",    cssVar: "--fn-ramp",     hex: "#E0A400" },
  { name: "TECH",       cssVar: "--fn-tech",     hex: "#B85C8E" },
  { name: "TRC",        cssVar: "--fn-trc",      hex: "#2C9C93" },
];

const STATUS = [
  { name: "Positive",  cssVar: "--pos",  hex: "#3E7D2D" },
  { name: "Pos. soft", cssVar: "--pos-soft", hex: "#EAF6E5" },
  { name: "Warning",   cssVar: "--warn", hex: "#9A7400" },
  { name: "Warn soft", cssVar: "--warn-soft", hex: "#FBF3DC" },
  { name: "Negative",  cssVar: "--neg",  hex: "#B23A2B" },
  { name: "Neg. soft", cssVar: "--neg-soft", hex: "#FBE9E6" },
  { name: "Info",      cssVar: "--info", hex: "#1F6E8C" },
  { name: "Info soft", cssVar: "--info-soft", hex: "#E4F0F4" },
];

const SURFACES = [
  { name: "Canvas",    cssVar: "--canvas",    hex: "#EEF3F5" },
  { name: "Bg",        cssVar: "--bg",        hex: "#F6F9FA" },
  { name: "Surface",   cssVar: "--surface",   hex: "#FFFFFF" },
  { name: "Surface 2", cssVar: "--surface-2", hex: "#F4F7F8" },
  { name: "Surface 3", cssVar: "--surface-3", hex: "#EDF2F4" },
];

const INK = [
  { name: "Ink 1 (primary)",   cssVar: "--ink-1", hex: "#11323F" },
  { name: "Ink 2 (secondary)", cssVar: "--ink-2", hex: "#3F576B" },
  { name: "Ink 3 (tertiary)",  cssVar: "--ink-3", hex: "#7C97A2" },
];

const HEAT = [
  { name: "Heat 0", cssVar: "--heat-0", hex: "#F4F7F8" },
  { name: "Heat 1", cssVar: "--heat-1", hex: "#DCEDF1" },
  { name: "Heat 2", cssVar: "--heat-2", hex: "#B9DCD5" },
  { name: "Heat 3", cssVar: "--heat-3", hex: "#9FD08C" },
  { name: "Heat 4", cssVar: "--heat-4", hex: "#7BC25A" },
  { name: "Heat 5", cssVar: "--heat-5", hex: "#E6B53C" },
  { name: "Heat 6", cssVar: "--heat-6", hex: "#E08A4A" },
  { name: "Heat 7", cssVar: "--heat-7", hex: "#CF5B43" },
];

export default function ColorPage() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Foundations"
        title="Color"
        lede="The SGS palette is brand-anchored: petroleum drives the chrome, green carries the live/positive state, and a seven-color functional palette identifies ground-handling categories. Every color is a CSS custom property and flips automatically in dark mode."
      />

      <div>
        <h2>Brand</h2>
        <p>
          Petroleum (<code>#0E4B64</code>) is the primary brand color. It&apos;s the value of <code>--accent</code> and
          <code> --primary</code> — accents, primary CTAs, active nav states, focus rings. Green is the value
          of <code>--pos</code> family — used <i>only</i> for semantic positive states (live, healthy, met).
        </p>
        <div className="docs-cols-3">
          {BRAND.map((c) => <ColorChip key={c.name} {...c} />)}
        </div>
      </div>

      <div>
        <h2>Function palette</h2>
        <p>
          Seven brand-anchored hues identify the SGS ground-handling functions. Always use these in the
          same order with the same swatch tokens — the user learns the mapping and reads the table at a
          glance. <b>Never re-roll these for visual variety.</b>
        </p>
        <div className="docs-cols-3">
          {FN.map((c) => <ColorChip key={c.name} {...c} />)}
        </div>
      </div>

      <div>
        <h2>Status</h2>
        <p>
          Status tokens come in pairs — a saturated foreground and a soft surface. Use the soft surface
          as the background for badges, alerts, and meters; the saturated foreground for text + icons.
        </p>
        <div className="docs-cols">
          {STATUS.map((c) => <ColorChip key={c.name} {...c} />)}
        </div>
      </div>

      <div>
        <h2>Surfaces</h2>
        <p>
          Five surface tints, ordered from coolest canvas to warmest panel. <code>--surface</code> is the
          card background; <code>--canvas</code> is the outermost backdrop.
        </p>
        <div className="docs-cols-3">
          {SURFACES.map((c) => <ColorChip key={c.name} {...c} />)}
        </div>
      </div>

      <div>
        <h2>Ink</h2>
        <p>
          Three ink levels for text. Ink 1 is the primary reading color; Ink 3 is for captions, labels,
          and de-emphasized data. Avoid using Ink 1 on captions — the system relies on the contrast jump
          between Ink 1 and Ink 3 to communicate hierarchy.
        </p>
        <div className="docs-cols-3">
          {INK.map((c) => <ColorChip key={c.name} {...c} />)}
        </div>
      </div>

      <div>
        <h2>Heat scale</h2>
        <p>
          An 8-step ramp for density / load / concurrency heatmaps. Walks from a cool surface through
          green into amber and red. Used by <code>Heatmap</code> and the OT-hotspots layer.
        </p>
        <div className="docs-cols-3">
          {HEAT.map((c) => <ColorChip key={c.name} {...c} />)}
        </div>
      </div>

      <div>
        <h2>Dos and Don&apos;ts</h2>
        <div className="dd">
          <DoCard text="Use petroleum for brand accents — primary CTA, active nav, brand pill, focus halo." />
          <DontCard text="Use green as a primary action color. Green is reserved for semantic positive state." />
          <DoCard text="Reference colors via CSS custom property (--accent, --pos-soft) so dark mode flips automatically." />
          <DontCard text="Hard-code a hex inline. You'll lose dark-mode and lose token compliance in a future audit." />
          <DoCard text="Use the function palette in the documented order. Users learn the mapping." />
          <DontCard text="Invent new function colors mid-screen. If a new function arrives, add it to the palette tokens." />
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
