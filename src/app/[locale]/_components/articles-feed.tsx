"use client"

import { Button } from "@/components/core/button"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { FeaturedArticlesGrid } from "@/components/ui/featured-articles-grid"
import { useSuspenseArticles } from "@/hooks/api/use-suspense-articles"
import { Category } from "@/types/category"

type ArticlesFeedProps = {
    step?: number,
    start?: number,
    category?: Category,
};

export const ArticlesFeedSection = ({ step = 6, start = 5, category }: ArticlesFeedProps) => {
    const t = useTranslations("Messages");
    const [currentLimit, setLimit] = useState<number>(start);
    const { data: { docs: articles }, hasMore } = useSuspenseArticles(category, { "limit": currentLimit })

    return (
        <section className="flex flex-col gap-10">
            <FeaturedArticlesGrid articles={articles} />
            {hasMore && (
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
            )}
        </section>
    )
}
