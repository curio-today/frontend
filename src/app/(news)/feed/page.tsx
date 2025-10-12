import { Metadata } from "next";
import { getPageMetadataWithTranslation } from "@/utils/get-page-metadata-with-translation";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";
import ArticlesGrid from "@/components/ui/ArticlesGrid";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getPageMetadataWithTranslation("feed");
    if (metadata) {
        return metadata;
    }

    return {};
}

export default async function Feed() {
    const locale = await getLocale();

    return (
        <main className="flex flex-col items-center mt-[100px] my-8 mx-[15vw] min-h-[calc(100vh-5rem)] pb-20 pt-20">
            <ReactQueryClientProvider>
                <ArticlesGrid locale={locale}/>
            </ReactQueryClientProvider>
        </main>
    )
}

    