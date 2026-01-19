import { ArticlesFeedSection } from "./_components/articles-feed";
import { getMetadata } from "@/lib/get-metadata";
import { Metadata } from "next";
import { CategoriesSection } from "./_components/categories-section";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export async function generateMetadata(): Promise<Metadata> {
    return getMetadata("feed");
}

export default async function FeedPage() {
    return (
        <>
            <ArticlesFeedSection />
            <Suspense fallback={<Skeleton />}>
                <CategoriesSection />
            </Suspense>
        </>
    )
}
