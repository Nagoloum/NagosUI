import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Modèle registry : on transpile le code source du package @nagos/ui.
  transpilePackages: ["@nagos/ui"],
};

export default nextConfig;
