"use server";

import { FeaturedArticlesGrid } from "@/components/ui/featured-articles-grid";
import { SearchForm } from "@/components/ui/search-form";
import { getArticlesByQuery } from "@/data/article/get-articles-by-query";
import { getMetadata } from "@/data/metadata/get-metadata";
import { getLocale } from "next-intl/server";
import { NoArticlesAvailable } from "./_components/no-articles-available";

export async function generateMetadata() {
    return getMetadata("search");
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q: string | null }> }) {
    const { q } = await searchParams;
    const locale = await getLocale();
    const { docs: articles } = await getArticlesByQuery(q || "", { locale });

    return (
        <>
            <div className="flex gap-4 flex-col w-full">
                <SearchForm initQuery={q || ""}/>
                {articles.length === 0 ? (
                    <NoArticlesAvailable />
                ) : (
                    <FeaturedArticlesGrid articles={articles} />
                )}
            </div>
        </>
    )
}