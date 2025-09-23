import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss"
import { ReactNode } from "react";
import styles from "./layout.module.css";

import { NextIntlClientProvider } from "next-intl";
import NavigationBar from "@/components/navigation2/NavBar";

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
                                             params,
                                         }: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <html lang={locale} className={outfit.className}>
            <body>
                <NextIntlClientProvider locale={locale}>
                    <NavigationBar />
                    <div className={styles.page}>{children}</div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
