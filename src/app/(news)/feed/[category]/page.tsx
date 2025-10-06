import { Metadata } from "next";
import Feed from "@/components/ui2/FeedGrid";
import { getPageMetadataWithTranslation } from "@/utils/metadata/get-page-metadata-with-translation";
import FeedViewer from "@/components/ui2/FeedGrid";


type PageProps = {
    params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category } = await params;

    return getPageMetadataWithTranslation(`Metadata.pages.${category}`)
}

export default async function CategoryPage() {
    return (
        <FeedViewer />
    )
};
