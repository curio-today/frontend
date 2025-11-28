import "./globals.css"

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { PropsWithChildren } from "react";

import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import { NavigationBar } from "@/components/ui/navigation-bar"
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Footer } from "@/components/ui/footer";

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
                <NextIntlClientProvider>
                    <ThemeProvider 
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <NavigationBar />
                        <main className="flex flex-col items-center mt-[100px] my-8 mx-[15vw] min-h-[calc(100vh-5rem)] pb-20 pt-20">
                            {children}
                        </main>
                        <Footer />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}