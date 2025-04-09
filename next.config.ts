import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'file-loader?publicPath=/_next/static/files&name=[name].[ext]',
    });
    return config;
  },
};

export default nextConfig;
