import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true" || !!process.env.GITHUB_ACTIONS;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions ? "/Datathon_Website_AIClub" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
