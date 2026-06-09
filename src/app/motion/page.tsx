import { PageHead, TokenTable } from "@/_docs/Example";

export default function MotionPage() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Foundations"
        title="Motion"
        lede="Two tokens — one duration, one easing curve — power every transition in the product. Operations-grade UIs minimize motion; what we do animate is fast, soft, and skippable."
      />

      <div>
        <h2>Tokens</h2>
        <TokenTable
          rows={[
            { name: "--dur",  value: "200ms",                         sample: "Default duration for hover, color, transform transitions." },
            { name: "--ease", value: "cubic-bezier(.22, 1, .36, 1)",  sample: "House curve — quick-out, smooth landing. Used everywhere." },
          ]}
        />
        <p>
          Component transitions inside the stylesheet use these tokens directly. Custom motion should
          reach for them too — never hard-code <code>0.3s ease</code>.
        </p>
      </div>

      <div>
        <h2>Where motion appears</h2>
        <ul>
          <li><b>Hover &amp; focus.</b> Background and color crossfades on rows, buttons, chips — all <code>--dur</code>.</li>
          <li><b>Filter dim.</b> When a function focus is on, non-selected rows fade to ~32% opacity over 250ms.</li>
          <li><b>Page entry.</b> A subtle 8px translateY into place with <code>.fade-in</code>. Opacity stays at 1 at base (so the content is never invisible if motion is suppressed).</li>
          <li><b>Notifications.</b> Toasts slide up 10px on enter. The breach pulse dot animates indefinitely until the constraint is resolved.</li>
          <li><b>Toggle switches.</b> Thumb translates 16px in 200ms. RTL flips to <code>-16px</code> automatically.</li>
        </ul>
      </div>

      <div>
        <h2>Reduced motion</h2>
        <p>
          All animations are guarded by <code>@media (prefers-reduced-motion: no-preference)</code> or
          unconditionally disabled inside <code>(prefers-reduced-motion: reduce)</code>. Test by toggling
          OS-level reduce-motion — the product should be fully usable with zero animation.
        </p>
      </div>

      <div>
        <h2>What we don&apos;t animate</h2>
        <ul>
          <li><b>Layout shifts.</b> Tables, KPIs, charts never animate their dimensions. Skeletons cover loading; the new layout snaps in.</li>
          <li><b>Numeric values.</b> A KPI doesn&apos;t roll up — it replaces. Speed beats narrative.</li>
          <li><b>Icons.</b> Hover bumps and rotates are reserved for chevrons on accordions; no general icon micro-motion.</li>
        </ul>
      </div>
    </div>
  );
}
