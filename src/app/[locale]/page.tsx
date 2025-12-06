import { Suspense } from "react";
import { ArticlesFeed, ArticlesFeedSkeleton } from "./_components/articles-feed";
import { getMetadata } from "@/data/metadata/get-metadata";


export async function generateMetadata() {
    return getMetadata("feed");
}

export default async function Feed() {
    return (
        <>
            <Suspense fallback={<ArticlesFeedSkeleton/>}>
                <ArticlesFeed step={5} start={5} />
            </Suspense>
        </>
    )
}