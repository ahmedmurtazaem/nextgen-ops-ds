import { PageHead } from "@/_docs/Example";

export default function AccessibilityPage() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Foundations"
        title="Accessibility"
        lede="NextGen Ops runs in real ops centers — at night, on glare-prone monitors, by people who didn't choose to use it. Accessibility isn't a checkbox; it's the bar for the whole system."
      />

      <div>
        <h2>Contrast</h2>
        <ul>
          <li><b>Body text</b> (Ink 1 on Surface) hits WCAG AAA. Ink 2 on Surface clears AA.</li>
          <li><b>Ink 3</b> is reserved for non-essential metadata (captions, sub-labels, dim-state column headers). Never use Ink 3 for required reading copy.</li>
          <li><b>Status badges</b> use a soft surface + saturated foreground; the pairs hit AA at the body size.</li>
          <li><b>Dark mode</b> recalculates the entire ramp — function hues lift +20% saturation to stay legible on petroleum surfaces.</li>
        </ul>
      </div>

      <div>
        <h2>Focus</h2>
        <ul>
          <li>Every interactive element has a visible focus ring via <code>--shadow-focus</code> (3px ring at 28% petroleum).</li>
          <li>Focus is keyboard-only by default (no ring on mouse-driven focus where supported by the browser).</li>
          <li>Drawer and modal traps focus when open; Escape always closes.</li>
        </ul>
      </div>

      <div>
        <h2>Keyboard</h2>
        <ul>
          <li><b>⌘K / Ctrl+K</b> — global search (reserved; not implemented in v0.1).</li>
          <li><b>Escape</b> — closes any open drawer, modal, or popover.</li>
          <li><b>Tab order</b> follows visual order; left-rail nav is tab-reachable.</li>
          <li><b>Tables</b> are static-cell focusable for screen readers; row-level click handlers are not keyboard-trapped (the link / button inside each row is the focus target).</li>
        </ul>
      </div>

      <div>
        <h2>ARIA & semantics</h2>
        <ul>
          <li><code>&lt;dialog&gt;</code>-like surfaces use <code>role=&quot;dialog&quot;</code> + <code>aria-label</code>.</li>
          <li>Switch uses <code>role=&quot;switch&quot;</code> + <code>aria-checked</code>.</li>
          <li>Function focus chips are buttons (not links) — they don&apos;t change the URL.</li>
          <li>Toaster messages are inserted at the bottom of the DOM with polite-by-default behavior — pair with a <code>role=&quot;status&quot;</code> live region in a future revision.</li>
        </ul>
      </div>

      <div>
        <h2>Color, but not only color</h2>
        <p>
          Status is communicated by tone <i>and</i> a second signal — an icon, a dot, or a textual label.
          A user with red-green color blindness can still tell &quot;Met · 96%&quot; from &quot;Breach · 84%&quot; because
          both the badge color and the word change.
        </p>
      </div>

      <div>
        <h2>Reduced motion</h2>
        <p>
          Every animation is wrapped in <code>@media (prefers-reduced-motion: no-preference)</code> or explicitly
          disabled in <code>reduce</code>. Test with macOS &gt; Settings &gt; Accessibility &gt; Reduce motion.
        </p>
      </div>
    </div>
  );
}
