import { NextConfig } from "next";

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  ppr: true,
  output: "standalone",
  compress: false,
} satisfies NextConfig;

export default nextConfig;
