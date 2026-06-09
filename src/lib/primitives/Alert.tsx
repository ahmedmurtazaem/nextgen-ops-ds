import type { HTMLAttributes, ReactNode } from "react";
import { Icon } from "../Icon";

export type AlertTone = "info" | "warn" | "neutral";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Visual tone. `neutral` is a quiet surface alert. */
  tone?: AlertTone;
  /** Title — rendered in **bold** above the body. Optional. */
  title?: ReactNode;
  /** Icon override. Defaults to a sensible icon for each tone. */
  icon?: string;
  children?: ReactNode;
}

const DEFAULT_ICON: Record<AlertTone, string> = { info: "info", warn: "alert", neutral: "info" };

/**
 * Inline informational block — softer than a toast, denser than a card.
 *
 * @example
 * <Alert tone="warn" title="EK wide-body — 3 turns at risk">
 *   Remote-stand turns inside 60-min target with <10% buffer.
 * </Alert>
 */
export function Alert({ tone = "neutral", title, icon, className, children, ...rest }: AlertProps) {
  const toneCls = tone === "neutral" ? "" : tone;
  const cls = ["alert", toneCls, className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      <span className="ai"><Icon name={icon ?? DEFAULT_ICON[tone]} size={16} /></span>
      <div className="at">
        {title && <b>{title}</b>}
        {children}
      </div>
    </div>
  );
}
