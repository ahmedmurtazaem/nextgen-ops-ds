import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { DocsShell } from "@/_docs/DocsShell";

const bukra = localFont({
  src: [
    { path: "./fonts/bukra-light.otf",   weight: "300", style: "normal" },
    { path: "./fonts/bukra-regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/bukra-medium.ttf",  weight: "500", style: "normal" },
    { path: "./fonts/bukra-bold.otf",    weight: "700", style: "normal" },
  ],
  variable: "--font-bukra",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextGen Ops · Design System",
  description: "Tokens, components, and brand guidelines for SGS NextGen Ops apps.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" data-density="cozy" className={`${bukra.variable} ${plexMono.variable}`}>
      <body className="sgs">
        <DocsShell>{children}</DocsShell>
      </body>
    </html>
  );
}
