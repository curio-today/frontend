import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [new URL('https://admin.curio.today/**')]
    }
};

export default withNextIntl(nextConfig);