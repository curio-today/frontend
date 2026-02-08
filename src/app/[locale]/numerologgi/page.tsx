import { BodyClass } from "@/components/core/body-class";
import { MagicBackground } from "@/components/feature/numerologgi/magic-background";
import { PreceptCard } from "@/components/feature/numerologgi/precept-card";
import { ShortVideoPlayer } from "@/components/feature/video-player/short";
import { getNumerologgiPost } from "@/data/numerologgi";
import { getTranslations } from "next-intl/server";
import { Activity, Suspense } from "react";

export default async function Numerologgi() {
    const t = await getTranslations("numerologgi.numerocast");
    const numerologgi = await getNumerologgiPost();

    return (
        <>
            <BodyClass className="bg-[#fdfbfd] dark:bg-[#0a0505] overflow-x-hidden selection:bg-[#f88167]/20 transition-colors duration-700" />
            <MagicBackground />

            <main className="relative z-10 py-0 sm:py-12 max-w-4xl mx-auto space-y-12 sm:space-y-16">
                {/* Desktop Header */}
                <section className="flex flex-row sm:flex-col gap-4 items-center justify-center px-4 sm:px-6">
                    <h2>
                        <span className="text-4xl md:text-5xl bg-linear-to-b font-bold tracking-tighter from-[#f88167] via-[#fb8167] to-[#f88167]/80 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(248,129,103,0.3)]">
                            {t("title")}
                        </span>
                    </h2>
                    <h2 className="text-lg md:text-xl text-white px-6 py-1.5 bg-[#f88167] rounded-full w-fit whitespace-nowrap shadow-lg shadow-[#f88167]/20">
                        {numerologgi?.date || ""}
                    </h2>
                </section>

                {numerologgi.video && (
                    <section className="relative h-dvh sm:h-auto w-screen sm:w-full overflow-hidden sm:rounded-3xl sm:px-6">
                        <ShortVideoPlayer
                            className="h-full w-full sm:aspect-9/16 sm:h-auto sm:max-w-[450px] sm:rounded-3xl rounded-none shadow-none sm:shadow-2xl border-none sm:border border-white/10"
                            src={numerologgi?.video?.src || ""}
                            poster={numerologgi?.cover?.url || ""}
                            username="numerologgi"
                            description={numerologgi?.description || "24 ноября..."}
                            musicName="Original Sound"
                            autoPlay
                        />
                    </section>
                )}

                <section className="px-4 sm:px-6 pb-20">
                    <ul className="flex flex-col gap-4 list-none">
                        {numerologgi?.precepts.map((precept, index) => (
                            <Suspense key={index}>
                                <PreceptCard index={index} {...precept} />
                            </Suspense>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
}
