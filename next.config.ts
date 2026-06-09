import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "nextgen-ops-ds";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
