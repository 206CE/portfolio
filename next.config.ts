import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* OPTIONS FOR SSG */
  basePath: "/portfolio",
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

module.exports = nextConfig;

