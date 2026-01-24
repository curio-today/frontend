import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'admin.curio.today',
                pathname: '/**',
            }
        ]
    },
    allowedDevOrigins: [
        'http://192.168.1.150:3000',
        'http://localhost:3000',
    ],

    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://admin.curio.today/api/:path*",
            },
        ]
    },
};

export default withNextIntl(nextConfig);