import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* OPTIONS FOR SSG */
  /*output: "export",*/
  /*trailingSlash: true,*/
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

module.exports = nextConfig;

