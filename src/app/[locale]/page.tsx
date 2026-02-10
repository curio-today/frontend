import { ArticlesFeedSection } from "./_components/articles-feed";
import { getMetadata } from "@/lib/get-metadata";
import { Metadata } from "next";
import { CategoriesSection } from "./_components/categories-section";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";

const NumerocastBanner = dynamic(() => import("./numerocast/_components/numerocast-banner").then(mod => mod.NumerocastBanner), {
    ssr: true,
});


export async function generateMetadata(): Promise<Metadata> {
    return getMetadata("feed");
}

export default async function FeedPage() {
    return (
        <>
            <ArticlesFeedSection />
            <Suspense fallback={<Skeleton className="w-full h-32" />}>
                <NumerocastBanner />
            </Suspense>
            <Separator className="my-6" />
            <Suspense fallback={<Skeleton />}>
                <CategoriesSection />
            </Suspense>
        </>
    )
}
