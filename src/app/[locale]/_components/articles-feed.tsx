"use client"

import { Button } from "@/components/core/button"
import { ArticlesGrid } from "./articles-grid"
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query"
import { fetchArticles } from "@/lib/api/fetch-articles"
import { useLocale } from "next-intl"
import { useState } from "react"

type ArticlesFeedProps = { 
    step: number, 
    start?: number, 
    category?: string,
};

export const ArticlesFeed = ({ step, start = 8, category }: ArticlesFeedProps) => {
    const locale = useLocale();

    const [currentLimit, setLimit] = useState<number>(start);
    
    const { data: articles, refetch } = useSuspenseQuery(queryOptions({
        queryKey: ["articles", category, currentLimit],
        queryFn: () => fetchArticles({
            "locale": locale,
            "limit": currentLimit,
            ...(category !== undefined && { "where[badge.name][equals]": category })
        }),
        staleTime: 5 * 1000,
    }));


    return (
        <>
            <ArticlesGrid articles={articles.docs} />
            <Button 
                variant="outline"
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