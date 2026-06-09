import { PageHead, TokenTable } from "@/_docs/Example";

const COLOR = [
  { name: "--petroleum", value: "#0E4B64" }, { name: "--green", value: "#61B947" }, { name: "--gold", value: "#E0A400" },
  { name: "--accent",    value: "alias of --petroleum" },
  { name: "--accent-ink", value: "#0E4B64 / #6FB8D6 (dark)" }, { name: "--accent-soft", value: "#E1EBF0 / #0F3340 (dark)" },
  { name: "--pos",       value: "#3E7D2D" }, { name: "--pos-soft", value: "#EAF6E5" },
  { name: "--warn",      value: "#9A7400" }, { name: "--warn-soft", value: "#FBF3DC" },
  { name: "--neg",       value: "#B23A2B" }, { name: "--neg-soft", value: "#FBE9E6" },
  { name: "--info",      value: "#1F6E8C" }, { name: "--info-soft", value: "#E4F0F4" },
  { name: "--canvas",    value: "#EEF3F5" }, { name: "--bg", value: "#F6F9FA" }, { name: "--surface", value: "#FFFFFF" },
  { name: "--surface-2", value: "#F4F7F8" }, { name: "--surface-3", value: "#EDF2F4" },
  { name: "--ink-1",     value: "#11323F" }, { name: "--ink-2", value: "#496170" }, { name: "--ink-3", value: "#7C97A2" },
  { name: "--line",      value: "#E1E8EB" }, { name: "--line-soft", value: "#EDF1F3" }, { name: "--line-strong", value: "#CCD8DD" },
];

const FN = [
  { name: "--fn-bagop",    value: "#1F6E8C" }, { name: "--fn-bagrep",   value: "#D98248" }, { name: "--fn-basement", value: "#5AA641" },
  { name: "--fn-drivers",  value: "#6A6FC4" }, { name: "--fn-ramp",     value: "#E0A400" }, { name: "--fn-tech",     value: "#B85C8E" },
  { name: "--fn-trc",      value: "#2C9C93" },
];

const SHAPE = [
  { name: "--r-xs", value: "4px" }, { name: "--r-sm", value: "6px" }, { name: "--r-md", value: "9px" },
  { name: "--r-lg", value: "14px" }, { name: "--r-xl", value: "20px" }, { name: "--r-pill", value: "999px" },
];

const SHADOW = [
  { name: "--shadow-xs",    value: "0 1px 2px rgba(14,75,100,.06)" },
  { name: "--shadow-sm",    value: "0 2px 8px rgba(14,75,100,.08)" },
  { name: "--shadow-md",    value: "0 10px 28px rgba(14,75,100,.12)" },
  { name: "--shadow-lg",    value: "0 20px 56px rgba(14,75,100,.16)" },
  { name: "--shadow-focus", value: "0 0 0 3px rgba(14,75,100,.28)" },
];

const TYPE = [
  { name: "--font", value: 'Bukra, "Segoe UI", system-ui' },
  { name: "--mono", value: 'IBM Plex Mono, ui-monospace' },
  { name: "--t-display", value: "30px" }, { name: "--t-h1", value: "21px" }, { name: "--t-h2", value: "17px" },
  { name: "--t-h3", value: "14px" }, { name: "--t-body", value: "13.5px" }, { name: "--t-small", value: "12.5px" },
  { name: "--t-cap", value: "11px" }, { name: "--t-over", value: "10.5px" },
];

const SPACE = [
  { name: "--u",        value: "Density multiplier · 1 default, .86 compact, 1.16 comfortable" },
  { name: "--gap",      value: "calc(16px * var(--u))" },
  { name: "--pad-card", value: "calc(16px * var(--u))" },
  { name: "--row-h",    value: "calc(34px * var(--u))" },
  { name: "--rail-w",   value: "236px (62px when [data-rail=\"collapsed\"])" },
];

const MOTION = [
  { name: "--dur",  value: "200ms" },
  { name: "--ease", value: "cubic-bezier(.22, 1, .36, 1)" },
];

export default function TokensPage() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Foundations"
        title="Tokens reference"
        lede="Every CSS custom property in the system, grouped. Source of truth: src/lib/styles/tokens.css. JS constants live at src/lib/tokens.ts."
      />
      <div><h2>Color &amp; surfaces</h2><TokenTable rows={COLOR} columns={["Token","Value"]} /></div>
      <div><h2>Function palette</h2><TokenTable rows={FN} columns={["Token","Value"]} /></div>
      <div><h2>Radii</h2><TokenTable rows={SHAPE} columns={["Token","Value"]} /></div>
      <div><h2>Shadows</h2><TokenTable rows={SHADOW} columns={["Token","Value"]} /></div>
      <div><h2>Typography</h2><TokenTable rows={TYPE} columns={["Token","Value"]} /></div>
      <div><h2>Space &amp; density</h2><TokenTable rows={SPACE} columns={["Token","Value"]} /></div>
      <div><h2>Motion</h2><TokenTable rows={MOTION} columns={["Token","Value"]} /></div>
    </div>
  );
}
