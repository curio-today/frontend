import { getTranslations } from "next-intl/server";

import { BodyClass } from "@/components/core/body-class";
import { ShortVideoPlayer } from "@/features/video-player";

import { MagicBackground } from "./_components/magic-background";
import { HeaderSection } from "./_components/header-section";
import { PreceptList } from "./_components/precept/precept-list";
import { getNumerocast } from "./_data/get-numerocast";


export default async function NumerocastPage() {
    const t = await getTranslations("numerologgi.numerocast");
    const numerocast = await getNumerocast();

    return (
        <>
            <BodyClass className="bg-[#fdfbfd] dark:bg-[#0a0505] overflow-x-hidden selection:bg-[#f88167]/20 transition-colors duration-700" />
            <MagicBackground />

            <main className="relative z-10 py-0 sm:py-12 max-w-4xl mx-auto space-y-12 sm:space-y-16">
                <HeaderSection title={t("title")} date={numerocast?.date || ""} />
                {/* {numerocast.video && (
                    <section className="relative h-dvh sm:h-auto w-screen sm:w-full overflow-hidden sm:rounded-3xl sm:px-6">
                        <ShortVideoPlayer
                            className="h-full w-full sm:aspect-9/16 sm:h-auto sm:max-w-[450px] sm:rounded-3xl rounded-none shadow-none sm:shadow-2xl border-none sm:border border-white/10"
                            src={numerocast?.video?.src || ""}
                            poster={numerocast?.cover?.url || ""}
                            userName="numerologgi"
                            description={numerocast?.description || "24 ноября..."}
                            musicName="Original Sound"
                            autoPlay
                        />
                    </section>
                )} */}

                <PreceptList precepts={numerocast.precepts} />
            </main>
        </>
    );
}
