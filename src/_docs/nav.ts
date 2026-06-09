export interface NavLink { href: string; label: string; }
export interface NavSection { title: string; links: NavLink[]; }

export const NAV: NavSection[] = [
  { title: "Getting Started", links: [
    { href: "/",            label: "Overview" },
    { href: "/integration", label: "Integration" },
  ]},
  { title: "Brand", links: [
    { href: "/brand",         label: "Brand introduction" },
    { href: "/brand/voice",   label: "Voice & tone" },
    { href: "/brand/logo",    label: "Logo usage" },
    { href: "/color",         label: "Color" },
    { href: "/typography",    label: "Typography" },
    { href: "/spacing",       label: "Spacing & density" },
    { href: "/motion",        label: "Motion" },
    { href: "/accessibility", label: "Accessibility" },
  ]},
  { title: "Foundations", links: [
    { href: "/icons",  label: "Icons" },
    { href: "/tokens", label: "Tokens reference" },
  ]},
  { title: "Components", links: [
    { href: "/components",          label: "Index" },
    { href: "/components/button",   label: "Button" },
    { href: "/components/card",     label: "Card" },
    { href: "/components/badge",    label: "Badge" },
    { href: "/components/kpi",      label: "KPI" },
    { href: "/components/alert",    label: "Alert" },
    { href: "/components/field",    label: "Field & Input" },
    { href: "/components/switch",   label: "Switch" },
    { href: "/components/meter",    label: "Meter" },
    { href: "/components/seg",      label: "Segmented control" },
    { href: "/components/viewtabs", label: "View tabs" },
    { href: "/components/ctx",      label: "Context select" },
    { href: "/components/drawer",   label: "Side drawer" },
    { href: "/components/toast",    label: "Toast" },
    { href: "/components/skeleton", label: "Skeleton" },
    { href: "/components/charts",   label: "Charts" },
    { href: "/components/clock",    label: "Dual clock" },
  ]},
  { title: "Patterns", links: [
    { href: "/patterns/page",       label: "Page layout" },
    { href: "/patterns/ribbon",     label: "Contextual ribbon" },
    { href: "/patterns/domain",     label: "Domain composites" },
  ]},
];
