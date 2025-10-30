import { getPageMetadataWithTranslation } from "@/utils/get-page-metadata-with-translation";
import { Metadata } from "next";

import ArticleSearchBar from "./components/ArticleSearchBar";
import { fetchEndpointList } from "@/utils/api/fetch";
import { ARTICLES } from "./data";


export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getPageMetadataWithTranslation("feed");
    if (metadata) {
        return metadata;
    }

    return {};
}




export default async function SearchPage() {
    return (
        <main>
            <ArticleSearchBar articles={ARTICLES} />
        </main>
    )
}