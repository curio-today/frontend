import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss"
import { PropsWithChildren, ReactNode } from "react";
import { ReactQueryClientProvider } from "@providers/ReactQueryClientProvider";

import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { ThemeProvider } from "@/ui/providers/ThemeProvider";
import NavigationBar from "@/ui/components/navigation/NewNavBar";

const outfit = Roboto({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Curio.today",
    description: "Modern news platform. “Smart curiosity”",
};

export default async function RootLayout({ children }: PropsWithChildren) {    
    const locale = await getLocale();

    return (
        <html lang={locale} className={outfit.className}>
            <body>
                <ReactQueryClientProvider>
                    <NextIntlClientProvider>
                        <ThemeProvider>
                            <NavigationBar />
                            <main className="flex flex-col items-center mt-[100px] my-8 mx-[15vw] min-h-[calc(100vh-5rem)] pb-20 pt-20">
                                {children}
                            </main>
                        </ThemeProvider>
                    </NextIntlClientProvider>
                </ReactQueryClientProvider>
            </body>
        </html>
    );
}
