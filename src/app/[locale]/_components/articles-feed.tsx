"use client"

import { Button } from "@/components/core/button"
import { ArticlesGrid } from "./articles-grid"
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query"
import { fetchArticles } from "@/lib/api/fetch-articles"
import { useLocale } from "next-intl"
import { useState } from "react"

type ArticlesFeedProps = { start?: number, step: number };

export const ArticlesFeed = ({ step, start = 8}: ArticlesFeedProps) => {
    const [currentLimit, setLimit] = useState<number>(start);
    const locale = useLocale();
    const { data: articles, } = useSuspenseQuery(queryOptions({
        queryKey: ["articles", currentLimit],
        queryFn: () => fetchArticles({
            "locale": locale,
            "limit": currentLimit,
        }),
        staleTime: 5 * 1000,
    }));

    return (
        <>
            <ArticlesGrid articles={articles.docs} />
            <Button onClick={() => setLimit(prev => prev + step)}>
                Load More
            </Button>
        </>
    )
}