"use client"

import { Button } from "@/components/core/button"
import { ArticlesGrid } from "../../../components/ui/article/articles-grid"
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
    
    const { data: articles } = useSuspenseQuery(queryOptions({
        queryKey: ["articles", { locale, category, limit: currentLimit }],
        queryFn: () => fetchArticles({
            locale,
            limit: currentLimit,
            ...(category ? { "where[badge.name][equals]": category } : {})
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
                }}
                tabIndex={0}
            >
                Load More
            </Button>
        </>
    )
}