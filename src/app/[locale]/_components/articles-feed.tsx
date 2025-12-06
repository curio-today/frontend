"use client"

import { Button } from "@/components/core/button"
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query"
import { useLocale, useTranslations } from "next-intl"
import { Suspense, useState } from "react"
import { ArticlesGrid, ArticlesGridSkeleton } from "@/components/ui/article/articles-grid"
import { getArticles } from "@/data/article/get-articles"

type ArticlesFeedProps = { 
    step: number, 
    start?: number, 
    category?: string,
};

export const ArticlesFeed = ({ step, start = 8, category }: ArticlesFeedProps) => {
    const locale = useLocale();
    const t = useTranslations("Messages");

    const [currentLimit, setLimit] = useState<number>(start);
    
    const { data: articles } = useSuspenseQuery(queryOptions({
        queryKey: ["articles", { locale, category, limit: currentLimit }],
        queryFn: () => getArticles({
            locale,
            limit: currentLimit,
            ...(category ? { "where[badge.name][equals]": category } : {})
        }),
        staleTime: 5 * 1000,
    }));


    return (
        <section className="flex flex-col gap-10">
            <ArticlesGrid articles={articles.docs} />
            <Button 
                variant="outline"
                className="mb-10"
                onClick={() => {
                    setLimit(prev => prev + step);
                }}
                tabIndex={0}
            >
                {t("loadMore")}
            </Button>
        </section>
    )
}

export const ArticlesFeedSkeleton = () => (
    <section className="flex flex-col gap">
        <ArticlesGridSkeleton cardCount={6}/>
    </section>
)

export const ArticlesFeedWithSuspense = (props: ArticlesFeedProps) => (
    <Suspense fallback={<ArticlesFeedSkeleton />}>
        <ArticlesFeed {...props} />
    </Suspense>
)