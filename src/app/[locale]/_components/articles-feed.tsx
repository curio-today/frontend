"use client"

import { Button } from "@/components/core/button"
import { ArticlesGrid } from "./articles-grid"
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query"
import { fetchArticles } from "@/lib/api/fetch-articles"
import { useLocale } from "next-intl"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

type ArticlesFeedProps = { start?: number, step: number, searchParam?: string };

export const ArticlesFeed = ({ step, start = 8, searchParam = "l"}: ArticlesFeedProps) => {
    const locale = useLocale();
    const router = useRouter();

    const [currentLimit, setLimit] = useState<number>(start);
    
    const { data: articles, refetch } = useSuspenseQuery(queryOptions({
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
            <Button 
                className="mb-10"
                onClick={() => {
                    setLimit(prev => prev + step);
                    refetch();
                }}
                tabIndex={0}
            >
                Load More
            </Button>
        </>
    )
}