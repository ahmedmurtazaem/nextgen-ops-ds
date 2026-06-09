/**
 * @sgs/nextgen-ops-ds — main barrel export.
 *
 * Import individual primitives:
 *   import { Button, Card, KpiStrip } from "@sgs/nextgen-ops-ds";
 *
 * Import the full stylesheet once at your app root:
 *   import "@sgs/nextgen-ops-ds/styles/index.css";
 *
 * Or import the layers individually if you want to override a piece:
 *   import "@sgs/nextgen-ops-ds/styles/tokens.css";
 *   import "@sgs/nextgen-ops-ds/styles/base.css";
 *   import "@sgs/nextgen-ops-ds/styles/components.css";
 */

/* Foundation */
export * from "./tokens";
export { Icon } from "./Icon";

/* Primitives */
export { Button } from "./primitives/Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./primitives/Button";
export { Card, CardHead, CardBody } from "./primitives/Card";
export type { CardProps, CardHeadProps } from "./primitives/Card";
export { Badge } from "./primitives/Badge";
export type { BadgeProps, BadgeTone, BadgeSize } from "./primitives/Badge";
export { Alert } from "./primitives/Alert";
export type { AlertProps, AlertTone } from "./primitives/Alert";
export { Field, Input } from "./primitives/Field";
export type { FieldProps, InputProps } from "./primitives/Field";
export { Switch } from "./primitives/Switch";
export type { SwitchProps } from "./primitives/Switch";
export { Meter } from "./primitives/Meter";
export type { MeterProps } from "./primitives/Meter";
export { Skel, KpiSkeleton, ChartCardSkeleton, TableSkeleton, ViewSkeleton } from "./primitives/Skeleton";
export type { SkelProps } from "./primitives/Skeleton";
export { Toaster, toast } from "./primitives/Toast";
export type { ToastKind, ToastItem } from "./primitives/Toast";
export { SideDrawer } from "./primitives/Drawer";
export type { SideDrawerProps } from "./primitives/Drawer";

/* Composites */
export { KpiStrip } from "./composites/Kpi";
export type { KpiCard, KpiStripProps } from "./composites/Kpi";
export { Seg } from "./composites/Seg";
export type { SegProps, SegOption } from "./composites/Seg";
export { ViewTabs } from "./composites/ViewTabs";
export type { ViewTabsProps, Tab } from "./composites/ViewTabs";
export { CtxSelect } from "./composites/CtxSelect";
export type { CtxSelectProps } from "./composites/CtxSelect";
export { DualClock } from "./composites/DualClock";
export type { DualClockProps } from "./composites/DualClock";
export { RibbonFilter } from "./composites/RibbonFilter";
export type { RibbonFilterProps } from "./composites/RibbonFilter";

/* Charts */
export {
  LineChart, StackedBar, Heatmap, WeeklyChart, Gauge,
} from "./charts";
