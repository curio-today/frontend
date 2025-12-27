import { ArticlesFeed } from "./_components/articles-feed";
import { getMetadata } from "@/data/metadata/get-metadata";
import { ArticlesSection } from "./_components/articles-section";

export async function generateMetadata() {
    return getMetadata("feed");
}

export default async function Feed() {
    return (
        <>
            <ArticlesFeed />
            <ArticlesSection />
        </>
    )
}