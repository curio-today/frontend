import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss"
import { ReactNode } from "react";
import styles from "./layout.module.css";

import { NextIntlClientProvider } from "next-intl";
import NavigationBar from "@/ui/components/navigation2/NavBar";
import { getLocale } from "next-intl/server";
import { ThemeProvider } from "@/ui/providers/ThemeProvider";

const outfit = Roboto({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Curio.today",
    description: "Modern news platform. “Smart curiosity”",
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: ReactNode;
}) {    
    const locale = await getLocale();

    return (
        <html lang={locale} className={outfit.className}>
            <body>
                <NextIntlClientProvider>
                    <ThemeProvider>
                        {/* <NavigationBar /> */}
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
