"use client"

import { useTranslations } from "next-intl"

export const NumerocastTitle = () => {
    const t = useTranslations("numerologgi.numerocast");

    return (
        <h1 >
            <span className="text-5xl lg:text-6xl bg-linear-to-b font-bold tracking-tighter from-[#f88167] via-[#fb8167] to-[#f88167]/80 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(248,129,103,0.3)]">
                {t("title")}
            </span>
        </h1>
    )
}