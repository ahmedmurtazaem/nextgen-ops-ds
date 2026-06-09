import { Icon } from "../Icon";

export interface SegOption { id: string; label: string; icon?: string; }
export interface SegProps {
  options: SegOption[];
  value: string;
  onChange: (id: string) => void;
}

/** Segmented control — best for 2–4 mutually-exclusive view modes. */
export function Seg({ options, value, onChange }: SegProps) {
  return (
    <div className="seg">
      {options.map((o) => (
        <button
          key={o.id}
          className={value === o.id ? "on" : ""}
          onClick={() => onChange(o.id)}
          style={{ padding: "1px 10px 0px" }}
        >
          {o.icon && <Icon name={o.icon} size={14} />}
          {o.label}
        </button>
      ))}
    </div>
  );
}
