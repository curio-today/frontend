import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [new URL('https://admin.curio.today/**')]
    },
    allowedDevOrigins: [
        'http://192.168.1.150:3000',
        'http://localhost:3000',
    ]
};

export default withNextIntl(nextConfig);