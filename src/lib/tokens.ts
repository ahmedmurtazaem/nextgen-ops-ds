/**
 * Design tokens as TypeScript constants — mirror of the CSS custom properties
 * declared in `styles/tokens.css`. Use these when you need a token value
 * inside JS (e.g. for charts, inline styles, dynamic theming).
 *
 * The CSS variables remain the source of truth for theme switching.
 * These constants are convenience copies for the *light* theme.
 */

export const brand = {
  petroleum:       "#0E4B64",
  "petroleum-600": "#155B77",
  "petroleum-500": "#1F6E8C",
  green:           "#61B947",
  "green-700":     "#4E9B39",
  "green-800":     "#3E7D2D",
  gold:            "#E0A400",
  danger:          "#C0392B",
  info:            "#1F6E8C",
} as const;

export const fnPalette = {
  bagop:    "#1F6E8C",
  bagrep:   "#D98248",
  basement: "#5AA641",
  drivers:  "#6A6FC4",
  ramp:     "#E0A400",
  tech:     "#B85C8E",
  trc:      "#2C9C93",
} as const;

export const status = {
  pos:  "#3E7D2D",
  warn: "#9A7400",
  neg:  "#B23A2B",
  info: "#1F6E8C",
} as const;

export const heat = ["#F4F7F8", "#DCEDF1", "#B9DCD5", "#9FD08C", "#7BC25A", "#E6B53C", "#E08A4A", "#CF5B43"] as const;

export const radii = {
  xs:   4,
  sm:   6,
  md:   9,
  lg:   14,
  xl:   20,
  pill: 999,
} as const;

export const type = {
  display: 30,
  h1:      21,
  h2:      17,
  h3:      14,
  body:    13.5,
  small:   12.5,
  cap:     11,
  over:    10.5,
} as const;

export const motion = {
  ease: "cubic-bezier(.22, 1, .36, 1)",
  dur:  200,
} as const;

export type BrandToken = keyof typeof brand;
export type FnToken = keyof typeof fnPalette;
export type StatusToken = keyof typeof status;
