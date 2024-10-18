/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: true,
    typedRoutes: true,
  },
};

export default nextConfig;
