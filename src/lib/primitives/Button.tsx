import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "../Icon";

export type ButtonVariant = "default" | "primary" | "petrol" | "ghost" | "go" | "danger-ghost";
export type ButtonSize = "md" | "sm" | "xs";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant. `default` is a neutral surface; `primary` uses the accent. */
  variant?: ButtonVariant;
  /** Compact height variants — `sm` for ribbons/toolbars, `xs` for inline actions. */
  size?: ButtonSize;
  /** Optional leading icon name from the shared Icon set. */
  icon?: string;
  /** Optional trailing icon name. */
  iconRight?: string;
  children?: ReactNode;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  default:        "",
  primary:        "btn-primary",
  petrol:         "btn-petrol",
  ghost:          "btn-ghost",
  go:             "btn-go",
  "danger-ghost": "btn-danger-ghost",
};
const SIZE_CLASS: Record<ButtonSize, string> = { md: "", sm: "btn-sm", xs: "btn-xs" };

/**
 * The canonical action element. Defaults to a neutral surface; pass
 * `variant="primary"` for the brand-accent call-to-action.
 *
 * @example
 * <Button variant="primary" icon="plus">New Plan</Button>
 */
export function Button({
  variant = "default", size = "md", icon, iconRight, className, children, ...rest
}: ButtonProps) {
  const cls = ["btn", VARIANT_CLASS[variant], SIZE_CLASS[size], className].filter(Boolean).join(" ");
  const iconSize = size === "xs" ? 13 : size === "sm" ? 14 : 15;
  return (
    <button className={cls} {...rest}>
      {icon && <Icon name={icon} size={iconSize} />}
      {children}
      {iconRight && <Icon name={iconRight} size={iconSize} />}
    </button>
  );
}
