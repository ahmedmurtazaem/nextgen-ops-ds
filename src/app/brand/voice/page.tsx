import { PageHead } from "@/_docs/Example";
import { Icon } from "@/lib/Icon";

export default function VoicePage() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Brand"
        title="Voice & tone"
        lede="How NextGen Ops talks — to a duty manager at 04:00, to a workforce planner during Hajj surge, to anyone whose day is shaped by an SLA window."
      />

      <div>
        <h2>Voice (always)</h2>
        <ul>
          <li><b>Direct.</b> Verbs first. &quot;Approve&quot;, not &quot;Click here to approve&quot;.</li>
          <li><b>Operational.</b> Use the language of the line — SLA, OTP, STD, ATA, WB/NB, ramp, basement, turn, bank. Don&apos;t soften it into product-speak.</li>
          <li><b>Quantified.</b> Numbers carry the meaning. &quot;3 turns at risk · &lt;10% buffer&quot; beats &quot;Some turns may be at risk.&quot;</li>
          <li><b>Calm.</b> Even when something is breaking. The system reports state; it doesn&apos;t panic.</li>
        </ul>
      </div>

      <div>
        <h2>Tone (situational)</h2>
        <div className="docs-cols">
          <ToneCard icon="check" title="When things are healthy" tone="pos"
            example="Coverage 96.4% · target met · 0 hard breaches"
            note="Quiet. State the number. No emoji, no exclamation."
          />
          <ToneCard icon="alert" title="When something needs attention" tone="warn"
            example="EK wide-body — 3 turns at risk. Remote-stand turns inside 60-min target with <10% buffer."
            note="Lead with what + how much. Follow with why it matters. No hedging."
          />
          <ToneCard icon="flame" title="When something is breaking" tone="neg"
            example="Hard constraint — DG cert expired 09 Jun. Cannot crew dangerous-goods ramp shift."
            note="Explicit reason. Explicit consequence. The operator decides the next step — the system doesn't prescribe."
          />
          <ToneCard icon="shield" title="When approving / publishing" tone="info"
            example="Two reviewers must approve before publish."
            note="Stating a rule, not asking permission. Imperative voice."
          />
        </div>
      </div>

      <div>
        <h2>Bilingual writing</h2>
        <p>
          Arabic copy lives in <code>i18n.ar</code> dictionaries and is the first-class equivalent of the
          English string — not a translation afterthought. RTL layout flips automatically via <code>dir=&quot;rtl&quot;</code>
          on <code>&lt;html&gt;</code>. A few rules:
        </p>
        <ul>
          <li><b>Numerals stay Latin.</b> SGS ops standardize on Western digits for ATA/STD/percentages.</li>
          <li><b>Airline codes stay Latin.</b> SV / EK / QR / TK — IATA codes are not translated.</li>
          <li><b>Time zones stay Latin.</b> UTC / AST / GMT abbreviations are universal.</li>
          <li><b>Ground codes stay Latin.</b> &quot;BAG OP&quot;, &quot;RAMP GW&quot; — operationally portable. Tooltips can carry the Arabic full name.</li>
        </ul>
      </div>

      <div>
        <h2>Microcopy patterns</h2>
        <ul>
          <li><b>Empty states</b> — name what&apos;s missing, then the action. &quot;No demand calculated yet. Set parameters and run Calculate Demand.&quot;</li>
          <li><b>Confirmations</b> — past tense for what happened. &quot;Plan published to Rostering.&quot; &quot;Rule deleted.&quot;</li>
          <li><b>Tooltips on icons</b> — full noun. <code>title=&quot;Notifications&quot;</code>, not <code>title=&quot;Bell&quot;</code>.</li>
          <li><b>Status badges</b> — single word when possible. &quot;Active&quot;, &quot;Draft&quot;, &quot;Published&quot;.</li>
          <li><b>Coming-soon items</b> — use the &quot;Soon&quot; chip. Don&apos;t hide them — operators want to see the roadmap.</li>
        </ul>
      </div>
    </div>
  );
}

function ToneCard({ icon, title, tone, example, note }: { icon: string; title: string; tone: "pos" | "warn" | "neg" | "info"; example: string; note: string }) {
  return (
    <div className="card" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 26, height: 26, borderRadius: 7, background: `var(--${tone}-soft)`, color: `var(--${tone})`, display: "grid", placeItems: "center" }}>
          <Icon name={icon} size={14} />
        </span>
        <b style={{ fontSize: 13, color: "var(--ink-1)" }}>{title}</b>
      </span>
      <div className="alert" style={{ background: "var(--surface-2)", padding: 11 }}>
        <div className="at" style={{ fontSize: 12.5, color: "var(--ink-1)" }}>{example}</div>
      </div>
      <span style={{ fontSize: 12, color: "var(--ink-3)", lineHeight: 1.5 }}>{note}</span>
    </div>
  );
}
