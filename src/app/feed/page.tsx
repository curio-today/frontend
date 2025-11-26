import { Metadata } from "next";
import { getPageMetadataWithTranslation } from "@/lib/utils/get-page-metadata-with-translation";
import ArticlesGrid from "@/ui/components/feature/article/ArticlesGrid";

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getPageMetadataWithTranslation("feed");
    if (metadata) {
        return metadata;
    }

    return {};
}

export default async function Feed() {
    return <ArticlesGrid />
}

    