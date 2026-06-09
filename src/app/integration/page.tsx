import { PageHead } from "@/_docs/Example";

export default function IntegrationPage() {
  return (
    <div className="docs-page">
      <PageHead
        kicker="Getting started"
        title="Integration"
        lede="Drop @sgs/nextgen-ops-ds into a Next.js 16 project. Tailwind 4 is a peer requirement; the design system supplies a token layer plus components on top."
      />

      <div>
        <h2>1. Install</h2>
        <pre className="ex-code">{`# Until published — vendor via GitHub
npm install github:ahmedmurtazaem/nextgen-ops-ds

# Peer dependencies (likely already installed)
npm install next@^16 react@^19 react-dom@^19
npm install -D tailwindcss@^4 @tailwindcss/postcss postcss`}</pre>
      </div>

      <div>
        <h2>2. Add fonts</h2>
        <p>
          The system ships Bukra as a local font. Copy <code>node_modules/@sgs/nextgen-ops-ds/fonts/</code>
          (or the equivalent path) into <code>src/app/fonts/</code> and wire them via <code>next/font/local</code>
          alongside <code>IBM_Plex_Mono</code> from <code>next/font/google</code>.
        </p>
        <pre className="ex-code">{`import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";

const bukra = localFont({
  src: [
    { path: "./fonts/bukra-light.otf",   weight: "300" },
    { path: "./fonts/bukra-regular.otf", weight: "400" },
    { path: "./fonts/bukra-medium.ttf",  weight: "500" },
    { path: "./fonts/bukra-bold.otf",    weight: "700" },
  ],
  variable: "--font-bukra",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});`}</pre>
      </div>

      <div>
        <h2>3. Import the stylesheet</h2>
        <p>
          One import gets you tokens + base resets + components. Place it in <code>src/app/globals.css</code>:
        </p>
        <pre className="ex-code">{`@import "tailwindcss";
@import "@sgs/nextgen-ops-ds/styles/index.css";`}</pre>
        <p>
          Need to customize a layer? Import them individually and override what you need before the next layer:
        </p>
        <pre className="ex-code">{`@import "tailwindcss";
@import "@sgs/nextgen-ops-ds/styles/tokens.css";
@import "@sgs/nextgen-ops-ds/styles/base.css";
@import "@sgs/nextgen-ops-ds/styles/theme.css";   /* Tailwind @theme inline */
/* your overrides here */
@import "@sgs/nextgen-ops-ds/styles/components.css";`}</pre>
      </div>

      <div>
        <h2>4. Wire the html attributes</h2>
        <p>
          Theme and density are driven by attributes on <code>&lt;html&gt;</code> — flip these from client state to
          toggle. RTL works the same way via the standard <code>dir</code> attribute.
        </p>
        <pre className="ex-code">{`<html
  lang="en"
  dir="ltr"                     /* "rtl" for Arabic */
  data-theme="light"            /* "light" | "dark" */
  data-density="cozy"           /* "compact" | "cozy" | "comfortable" */
  className={\`\${bukra.variable} \${plexMono.variable}\`}
>`}</pre>
      </div>

      <div>
        <h2>5. Use a component</h2>
        <pre className="ex-code">{`import { Button, Card, CardHead, CardBody, KpiStrip, Toaster, toast } from "@sgs/nextgen-ops-ds";

export default function Page() {
  return (
    <>
      <Card>
        <CardHead title="Today" sub="JED · Summer 2026" />
        <CardBody>
          <KpiStrip style="inline" items={[
            { key: "sla", label: "SLA Coverage", val: "96.4", unit: "%", accent: true },
          ]} />
        </CardBody>
      </Card>
      <Button variant="primary" icon="plus" onClick={() => toast("Hello", "info")}>
        New Plan
      </Button>
      <Toaster />
    </>
  );
}`}</pre>
      </div>

      <div>
        <h2>What you don&apos;t need to do</h2>
        <ul>
          <li><b>No CSS-in-JS runtime.</b> Components are bare className wrappers over the stylesheet.</li>
          <li><b>No theme provider.</b> Theme + density are CSS custom properties driven by data-attributes.</li>
          <li><b>No icon library.</b> The shared <code>Icon</code> component renders a Lucide-style line set inline as SVG.</li>
        </ul>
      </div>
    </div>
  );
}
