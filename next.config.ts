import { NextConfig } from "next";

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  ppr: true,
  output: "standalone",
} satisfies NextConfig;

export default nextConfig;
