"use client"

import { Separator } from "@/components/ui/separator";
import { ArticleCard } from "@/components/core/article-card";
import { ArticleItem } from "@/components/core/article-item";
import { ArticleLink } from "@/components/core/article-link";
import { CategoryLink } from "@/components/core/category-link";
import { ARTICLES_ON_DESKTOP, ARTICLES_ON_MOBILE } from "@/constants/list";
import { useSuspenseArticles } from "@/hooks/api/use-suspense-articles";
import { useIsMobile } from "@/hooks/use-mobile";
import { Category } from "@/types/category";
import { Activity } from "react";


type ArticlesListProps = {
    category: Category,
    showCategoryHeader?: boolean,
}

export const ArticlesList = ({ category, showCategoryHeader = true }: ArticlesListProps) => {
    const isMobile = useIsMobile();
    const { data: articles } = useSuspenseArticles(category, {
        limit: isMobile ? ARTICLES_ON_MOBILE : ARTICLES_ON_DESKTOP
    });


    return (
        <section className="flex flex-col gap-4" id={category}>
            <Activity mode={showCategoryHeader ? "visible" : "hidden"}>
                <CategoryLink category={category} />
                <Separator />
            </Activity>
            <div className="flex flex-col md:flex-row gap-4">
                <ArticleLink className="flex-1" article={articles.docs[0]}>
                    <ArticleCard {...articles.docs[0]} />
                </ArticleLink>
                <div className="flex-1 flex flex-col gap-4 justify-between">
                    {articles.docs.slice(1).map(article => (
                        <ArticleLink key={article.id} article={article} >
                            <ArticleItem {...article} />
                        </ArticleLink>
                    ))}
                </div>
            </div>
        </section>
    )
}