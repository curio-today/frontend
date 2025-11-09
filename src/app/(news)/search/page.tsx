import { getPageMetadataWithTranslation } from "@utils/get-page-metadata-with-translation";
import { Metadata } from "next";

import ArticleSearchBar from "./components/ArticleSearchBar";
import { fetchArticles } from "@/lib/utils/api/fetch/fetch-articles";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getPageMetadataWithTranslation("search");
    if (metadata) {
        return metadata;
    }
    return {};
}




export default async function SearchPage() {
    const locale = await getLocale();

    return (
        <main>
            <ArticleSearchBar articles={await fetchArticles({ locale, limit: 10 })} />
        </main>
    )
}