import { Icon } from "@/lib/Icon";

// The prototype is a self-contained bundle served from /public. In a GitHub
// Pages build it lives under basePath; mirror next.config's basePath here so
// the iframe + "open" link resolve in both dev and the exported site.
const BASE = process.env.NODE_ENV === "production" ? "/nextgen-ops-ds" : "";
const SRC = `${BASE}/screens/plans.html`;

export default function PlansScreen() {
  return (
    <div className="screen-embed">
      <div className="screen-embed-bar">
        <span className="screen-embed-title">
          <Icon name="file" size={14} />
          Plans <span className="screen-embed-tag">live prototype</span>
        </span>
        <span className="screen-embed-note">
          Self-contained mockup imported from the NextGen Ops design project — the
          Plans library with review queue, planning jobs, read-only preview and
          plan&nbsp;↔&nbsp;plan comparison.
        </span>
        <span className="screen-embed-spacer" />
        <a className="screen-embed-open" href={SRC} target="_blank" rel="noreferrer">
          <Icon name="link" size={13} />
          Open full screen
        </a>
      </div>
      <iframe className="screen-embed-frame" src={SRC} title="NextGen Ops — Plans" />
    </div>
  );
}
