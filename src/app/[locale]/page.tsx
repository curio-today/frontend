import { Suspense } from "react";
import { ArticlesFeed, ArticlesFeedSkeleton } from "./_components/articles-feed";

export default async function Feed() {
    return (
        <>
            <Suspense fallback={<ArticlesFeedSkeleton/>}>
                <ArticlesFeed step={5} start={5} />
            </Suspense>
        </>
    )
}