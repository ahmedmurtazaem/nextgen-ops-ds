import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> { children?: ReactNode; }

/** Surface container with a subtle border + xs shadow. */
export function Card({ className, children, ...rest }: CardProps) {
  return <div className={["card", className].filter(Boolean).join(" ")} {...rest}>{children}</div>;
}

export interface CardHeadProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Heading text — wraps in `<h3>` with the design-system heading scale. */
  title?: ReactNode;
  /** Optional sub-label rendered right of the spacer (muted). */
  sub?: ReactNode;
  /** Trailing actions (buttons, badges, etc.). */
  actions?: ReactNode;
}

/** Standard card header — title left, optional sub + actions right. */
export function CardHead({ title, sub, actions, className, children, ...rest }: CardHeadProps) {
  return (
    <div className={["card-head", className].filter(Boolean).join(" ")} {...rest}>
      {title && <h3>{title}</h3>}
      {children}
      <div className="spacer"></div>
      {sub && <span className="sub">{sub}</span>}
      {actions}
    </div>
  );
}

/** Body slot with the standard card padding. Pass `style={{ padding: 0 }}` for flush tables. */
export function CardBody({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={["card-body", className].filter(Boolean).join(" ")} {...rest}>{children}</div>;
}
