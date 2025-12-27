"use client"

import { ArticleCard } from "@/components/ui/article-card";
import { ArticleItem } from "@/components/ui/article-item";
import { ArticleLink } from "@/components/ui/article-link";
import { useSuspenseArticles } from "@/hooks/api/use-suspense-articles";
import { Category } from "@/types/category";

export const ArticlesSection = ({ category }: { category?: Category }) => {
    const { data: articles } = useSuspenseArticles(category, {
        limit: 7
    });

    return (
        <section className="grid grid-cols-2 gap-4">
            <ArticleCard {...articles.docs[0]}/>
            <div className="flex flex-col gap-4 justify-between">
                {articles.docs.slice(2).map(article => (
                    <ArticleLink article={article}>
                        <ArticleItem key={article.id} {...article} />
                    </ArticleLink>
                ))}
            </div>
        </section>
    )
}