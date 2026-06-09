import type { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export interface FieldProps {
  /** Label text — semantically `<label>`. */
  label?: ReactNode;
  /** Hint text below the field (or error text when `error` is set). */
  hint?: ReactNode;
  /** Show as "required" pill next to the label. */
  required?: boolean;
  /** Show as "optional" pill next to the label. */
  optional?: boolean;
  /** Error message — replaces hint and colors the input red. */
  error?: ReactNode;
  /** Trailing unit text rendered inside the input (px / %, etc.). */
  unit?: ReactNode;
  children?: ReactNode;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

/**
 * Form field shell — pairs a label with an input and optional hint/error.
 * Compose with `<Input>` (or any control with `.input` styling) as children.
 *
 * @example
 * <Field label="Station Name" required hint="Full descriptive name">
 *   <Input placeholder="Jeddah" />
 * </Field>
 */
export function Field({ label, hint, required, optional, error, unit, children, labelProps }: FieldProps) {
  return (
    <div className="field">
      {label && (
        <label {...labelProps}>
          {label}
          {required && <span className="req">required</span>}
          {optional && !required && <span className="opt">optional</span>}
        </label>
      )}
      {unit ? <div className="input-wrap">{children}<span className="endcap">{unit}</span></div> : children}
      {error ? <span className="hint err">{error}</span> : hint ? <span className="hint">{hint}</span> : null}
    </div>
  );
}

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Render with the mono (IBM Plex Mono) font — use for numeric inputs and IATA codes. */
  mono?: boolean;
  /** Red border + focus halo. */
  invalid?: boolean;
  /** Size variant — `xs` for inline filters. */
  size?: "md" | "xs";
}

/**
 * Themed text input. Picks up density via tokens.
 */
export function Input({ mono, invalid, size = "md", className, ...rest }: InputProps) {
  const cls = ["input", mono && "mono", size === "xs" && "xs", invalid && "err", className].filter(Boolean).join(" ");
  return <input className={cls} {...rest} />;
}
