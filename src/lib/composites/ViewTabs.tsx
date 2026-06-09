export interface Tab { id: string; label: string; }

export interface ViewTabsProps {
  tabs: Tab[];
  active: string;
  onChange: (id: string) => void;
}

/** View-switcher pill tabs — used inside cards / page bodies for sub-views. */
export function ViewTabs({ tabs, active, onChange }: ViewTabsProps) {
  return (
    <div className="viewtabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={"viewtab" + (active === tab.id ? " on" : "")}
          onClick={() => onChange(tab.id)}
        >
          <span className="vdot"></span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
