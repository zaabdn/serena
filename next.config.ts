import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/serena",
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
