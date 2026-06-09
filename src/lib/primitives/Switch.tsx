import type { ButtonHTMLAttributes } from "react";

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
  /** Whether the switch is on. */
  value?: boolean;
  /** Fires with the next value on click. */
  onChange?: (v: boolean) => void;
}

/**
 * Pill toggle switch. Use for binary settings (active/inactive, dark/light).
 *
 * @example
 * <Switch value={isActive} onChange={setIsActive} />
 */
export function Switch({ value, onChange, className, onClick, ...rest }: SwitchProps) {
  const cls = ["switch", value && "on", className].filter(Boolean).join(" ");
  return (
    <button
      type="button"
      role="switch"
      aria-checked={!!value}
      className={cls}
      onClick={(e) => { onChange?.(!value); onClick?.(e); }}
      {...rest}
    />
  );
}
