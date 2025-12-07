import "./globals.css"

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { PropsWithChildren } from "react";

import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import { NavigationBar } from "@/components/ui/navigation/navigation-bar"
import { ThemeProvider } from "@/providers/theme-provider";
import { Footer } from "@/components/ui/footer";
import LayoutProvider from "@/providers/layout-provider";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "@/components/core/sonner";
import { Separator } from "@/components/core/separator";
import Head from "next/head";
import Script from "next/script";

const outfit = Roboto({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Curio.today",
    description: "Modern news platform. “Smart curiosity”",
};

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {    
    const locale = await getLocale();

    return (
        <html lang={locale} className={outfit.className} suppressHydrationWarning>
            <Head>
                <Script id="gtm-init" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-WWZZ33KD');
                `}
                </Script>
            </Head>
            <body>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WWZZ33KD"
                        height="0"
                        width="0"
                        className="hidden"
                    ></iframe>
                </noscript>
                <QueryProvider>
                    <NextIntlClientProvider>
                        <ThemeProvider 
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                        >
                            <LayoutProvider>
                                <NavigationBar />
                            </LayoutProvider>
                            <main className="container mt-30 mx-auto flex flex-col items-center min-h-screen">
                                {children}
                            </main>
                            <Separator />
                            <Footer />
                            <Toaster />
                        </ThemeProvider>
                    </NextIntlClientProvider>
                </QueryProvider>
            </body>
        </html>
    );
}