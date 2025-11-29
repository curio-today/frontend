"use client"

import { ArticleCard } from "@/components/ui/article/article-card"
import { fetchArticles } from "@/lib/fetch-articles";
import { Article } from "@/types/api/article";
import { PaginatedContent } from "@/types/api/paginated-article";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";


function createArticleQueryOptions() {
    return queryOptions({
        queryKey: ["articles", "feed"],
        queryFn: () => fetchArticles(),
        staleTime: 5 * 1000,
    })
}

export const ArticlesFeed = () => {
    const { data: articles } = useSuspenseQuery(createArticleQueryOptions())

    return (
        <section className="mt-20 w-auto grid grid-cols-[repeat(6,auto)] grid-rows-[repeat(4,auto)] gap-[clamp(1rem,1vw,5rem)] flex flex-col">
            {articles && articles.map(article => (
                <div key={article.id} className="row w-full col-span-2 row-span-2">
                    <ArticleCard {...article} />
                </div>
            ))}
        </section>
    )
}