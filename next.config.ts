import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/github-pages-test',
  distDir: 'docs',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
