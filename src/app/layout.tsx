import "./globals.css"

import { Roboto } from "next/font/google";
import {PropsWithChildren, Suspense} from "react";

import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import { NavigationBar } from "@/components/navigation/navigation-bar"
import { ThemeProvider } from "@/providers/theme-provider";
import { Footer } from "@/components/ui/footer";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "@/components/core/sonner";
import { Separator } from "@/components/core/separator";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Snowfall } from "@/components/feature/new-year";
import {Skeleton} from "@/components/core/skeleton";

const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: "500",
});


export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
    const locale = await getLocale();

    return (
        <html lang={locale} className={roboto.className} suppressHydrationWarning>
            <head>
                <meta
                name="google-site-verification"
                content="EbEK3drHlDtsnh-1tCp99LBW6KGGSlm1GxSBISfhnxM"
                />
                <GoogleAnalytics gaId="G-MNV4816TQ0" />
            </head>
            <body>
                <Snowfall />
                <QueryProvider>
                    <NextIntlClientProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                        >
                            <NavigationBar />
                            <main className="container mx-auto flex flex-col items-center min-h-screen px-4 sm:px-0 mt-30">
                                <Suspense fallback={<Skeleton className="h-screen w-full" />}>
                                    {children}
                                </Suspense>
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