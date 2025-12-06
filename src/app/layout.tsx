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
            <body>
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