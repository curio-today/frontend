import ArticlesFeed from "@/components/ui/ArticlesFeed";
import { generateHeadingMetadata } from "@/helpers/metadata";
import { Metadata, Viewport } from "next";
import { getLocale } from "next-intl/server";

/**
 * @description Generates metadata for the Feed page
 * @returns Metadata for the Feed page
 */
export async function generateMetadata(): Promise<Metadata> {
    return generateHeadingMetadata({
        locale: await getLocale(),
        heading: 'Feed'
    });
}

export async function generateViewport(): Promise<Viewport> {
    // TODO: make dynamic theme based on user preference
    return {
        themeColor: 'dark'
    }
}

export default async function Feed() {
    const locale = await getLocale();

    return (
        <>
            <ArticlesFeed options={{
                limit: 5,
                locale: locale,
            }} />
        </>
    )
}

    