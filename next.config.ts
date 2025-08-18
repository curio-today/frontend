import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://admin.curio.today/**')]
    }
  /* config options here */
};

export default nextConfig;
