import type { HTMLAttributes, ReactNode } from "react";

export type BadgeTone = "pos" | "warn" | "neg" | "info" | "neutral" | "outline";
export type BadgeSize = "md" | "sm" | "xs";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  size?: BadgeSize;
  /** Show a colored dot before the label (uses `currentColor` if no override). */
  dot?: boolean;
  /** Override dot color (CSS color or var) when `dot` is true. */
  dotColor?: string;
  children?: ReactNode;
}

const SIZE_CLASS: Record<BadgeSize, string> = { md: "", sm: "sm", xs: "xs" };

/**
 * Inline status pill.
 *
 * @example
 * <Badge tone="pos" dot>Active</Badge>
 * <Badge tone="warn" size="sm">Pending</Badge>
 */
export function Badge({ tone = "neutral", size = "md", dot, dotColor, className, children, ...rest }: BadgeProps) {
  const cls = ["badge", tone, SIZE_CLASS[size], className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {dot && <span className="bdot" style={{ background: dotColor ?? `var(--${tone === "outline" || tone === "neutral" ? "ink-3" : tone})` }}></span>}
      {children}
    </span>
  );
}
