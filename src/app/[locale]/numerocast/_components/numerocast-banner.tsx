"use client"

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl"
import Link from "next/link";
import { NumerocastTitle } from "./numerocast-title";
import { useRouter } from "next/navigation";

const NumerocastBannerContent = () => {
    const t = useTranslations("numerologgi.numerocast");

    return (
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left md:pl-6">
            <NumerocastTitle />
            <p className="mt-2 text-base font-medium opacity-90 md:text-lg">
                {t("description")}
            </p>
        </div>
    )
}

const NumerocastBannerDate = () => {
    const today = new Date();
    const date = today.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit" });

    return (
        <div className="shrink-0">
            <span className="text-7xl font-bold tracking-tighter opacity-90 md:text-8xl">
                {date}
            </span>
        </div>
    )
}

const NumerocastBannerButton = () => {
    const t = useTranslations("numerologgi.numerocast");
    const router = useRouter();

    return (
        <Button
            variant="secondary"
            className="flex-1 min-w-64 relative overflow-hidden rounded-full border border-white/30 h-15 bg-white/20 px-10 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/30 hover:scale-105 active:scale-95"
            onClick={() => router.push("/numerocast")}
        >
            {t("button")}
        </Button>
    )
}


export const NumerocastBanner = () => {
    return (
        <section className="
        relative w-full overflow-hidden rounded-4xl
        bg-linear-to-r
        from-[#a84536]
        via-[#b84f3c]
        to-[#c85b45]
        p-6 text-white shadow-xl
        md:px-10 md:py-8
        ">
            <Link href="/numerocast">
                <div className="flex flex-wrap items-center justify-between gap-6 md:gap-4">
                    <NumerocastBannerDate />
                    <NumerocastBannerContent />
                    <NumerocastBannerButton />
                </div>
            </Link >
        </section>
    )
}