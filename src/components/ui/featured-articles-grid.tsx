"use client"

import { ArticleCard, type ArticleCardProps } from "@/components/ui/article-card"
import { Grid2then3 } from "./grid";
import { ArticleLink } from "./article-link";
import { getArticleViewTransitionName } from "@/lib/view-transition";

import { ViewTransition } from "react";

export const FeaturedArticlesGrid = ({ articles }: { articles: ArticleCardProps[] }) => {
    return (
        <Grid2then3>
            {articles.map((article, index) => {
                const colSpan = index < 2 ? "md:col-span-3" : "md:col-span-2";

                return (
                    <ArticleLink
                        key={article.id}
                        article={article}
                        className={`w-full ${colSpan}`}
                        tabIndex={0}
                        prefetch
                    >
                        <ViewTransition name={getArticleViewTransitionName(article.id)}>
                            <ArticleCard {...article} />
                        </ViewTransition>
                    </ArticleLink>
                );
            })}
        </Grid2then3>
    )
}

