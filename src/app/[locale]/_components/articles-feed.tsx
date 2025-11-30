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
    const searchParams = useSearchParams();
    const articleCount = searchParams.get(searchParam);

    const [currentLimit, setLimit] = useState<number>(articleCount === null ? start : Number(articleCount));
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
            <Button 
                className="mb-10"
                onClick={() => {
                    setLimit(prev => prev + step);
                    router.replace(`/?${searchParam}=${currentLimit}`);
                }}
                tabIndex={0}
            >
                Load More
            </Button>
        </>
    )
}