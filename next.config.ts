import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/:locale(en|lv|ru)/:path*",
                destination: "/:path*",
                permanent: true,
            }
        ]
    },
    output: "standalone",
    images: {
        remotePatterns: [new URL('https://admin.curio.today/**')]
    }
};

export default withNextIntl(nextConfig);
