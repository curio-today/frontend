import { getLocale, getTranslations } from "next-intl/server";

import NotFound from "@/app/not-found";
import { ShortVideoPlayer } from "@/features/video-player";


import { HeaderSection } from "./_components/header-section";
import { RecommendationList } from "./_components/recommendation/recommendation-list";
import { fetchNumerocast } from "./_data/fetch-numerocast";

export default async function NumerocastPage() {
    const [t, locale] = await Promise.all([
        getTranslations("numerologgi.numerocast"),
        getLocale(),
    ]);

    const numerocast = await fetchNumerocast();

    if (!numerocast) {
        return NotFound();
    }

    const today = new Date().toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
    });

    const videoUrl = numerocast.video?.url;

    return (
        <section className="w-full flex flex-col max-w-[500px] gap-6 pb-12">
            <HeaderSection date={numerocast.date || today} authorLabel={t("authors")} />

            <div className="flex flex-col justify-center gap-4">
                {videoUrl ? (
                    <ShortVideoPlayer
                        className="w-full aspect-9/16 rounded-3xl shadow-2xl h-[70vh] border border-white/10"
                        src={videoUrl}
                        poster={numerocast.cover.url || ""}
                        userName={{
                            name: "numerologgi",
                            url: "https://numerologgi.com",
                        }}
                    />
                ) : (
                    <RecommendationList recommendations={numerocast.recommendations} />
                )}
            </div>


        </section>
    );
}
