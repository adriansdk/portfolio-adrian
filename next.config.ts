import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: "file-loader?publicPath=/_next/static/files&name=[name].[ext]",
    });
    return config;
  },
};

export const runtime = "edge";

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
