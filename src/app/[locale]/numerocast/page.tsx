import { getTranslations } from "next-intl/server";

import { ShortVideoPlayer } from "@/features/video-player";

import { HeaderSection } from "./_components/header-section";
import { RecommendationList } from "./_components/recommendation/recommendation-list";
import { fetchNumerocast } from "./_data/fetch-numerocast";
import { getLocale } from "next-intl/server";
import NotFound from "@/app/not-found";

export default async function NumerocastPage() {
    const t = await getTranslations("numerologgi.numerocast");
    const locale = await getLocale();
    const today = new Date().toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
    });
    const numerocast = await fetchNumerocast();
    const hasVideo = numerocast?.video && numerocast.video.url;

    if (!numerocast) {
        return NotFound();
    }


    return (
        <section className="w-full flex flex-col max-w-[450px] gap-6 pb-12">
            <HeaderSection title={t("title")} date={numerocast?.date || today} />

            <div className="flex flex-col justify-center gap-4">
                {hasVideo && (
                    <ShortVideoPlayer
                        className="h-[75dvh]  aspect-9/16 rounded-3xl shadow-2xl border border-white/10"
                        src={numerocast.video?.url || ""}
                        poster={numerocast.cover.url || ""}
                        userName="numerologgi"
                    />
                )}
                <RecommendationList recommendations={numerocast.recommendations} />
            </div>
        </section>
    );
}
