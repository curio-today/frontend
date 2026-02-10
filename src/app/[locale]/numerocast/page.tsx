import { getTranslations } from "next-intl/server";

import { BodyClass } from "@/components/core/body-class";
import { ShortVideoPlayer } from "@/features/video-player";

import { MagicBackground } from "./_components/magic-background";
import { HeaderSection } from "./_components/header-section";
import { RecommendationList } from "./_components/recommendation/recommendation-list";
import { getNumerocast } from "./_data/get-numerocast";
import { Suspense } from "react";
import { getLocale } from "next-intl/server";

export default async function NumerocastPage() {
    const t = await getTranslations("numerologgi.numerocast");
    const locale = await getLocale();
    const today = new Date().toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
    });

    const numerocast = await getNumerocast();

    function hasVideo() {
        return numerocast.video && numerocast.video.src;
    }

    return (
        <>
            <BodyClass className="bg-[#fdfbfd] dark:bg-[#0a0505] overflow-x-hidden selection:bg-[#f88167]/20 transition-colors duration-700" />
            <MagicBackground />

            <main className="relative z-10 py-0 sm:py-12 max-w-4xl mx-auto space-y-12 sm:space-y-16">
                <HeaderSection title={t("title")} date={numerocast?.date || today} />
                {hasVideo() ? (
                    <section className="relative h-dvh sm:h-auto w-screen sm:w-full overflow-hidden sm:rounded-3xl sm:px-6">
                        <ShortVideoPlayer
                            className="h-full w-full sm:aspect-9/16 sm:h-auto sm:max-w-[450px] sm:rounded-3xl rounded-none shadow-none sm:shadow-2xl border-none sm:border border-white/10"
                            src={numerocast?.video?.src || ""}
                            poster={numerocast?.cover?.url || ""}
                            userName="numerologgi"
                            autoPlay
                        />
                    </section>
                ) : (
                    <Suspense fallback={<div>Loading...</div>}>
                        <RecommendationList recommendations={numerocast.recommendations} />
                    </Suspense>
                )}
            </main>
        </>
    );
}
