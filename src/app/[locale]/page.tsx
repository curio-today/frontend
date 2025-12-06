import { Suspense } from "react";
import { ArticlesFeedWithSuspense } from "./_components/articles-feed";
import { getMetadata } from "@/data/metadata/get-metadata";


export async function generateMetadata() {
    return getMetadata("feed");
}

export default async function Feed() {
    return (
        <ArticlesFeedWithSuspense step={5} start={5} />
    )
}