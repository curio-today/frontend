"use client"

import InfiniteScroll, { useInfiniteFetching } from "@/components/ui/InfiniteScroll";
import Grid from "@/components/layout/Grid";

import { Article } from "@/shared/network/content.types"

import dynamic from "next/dynamic";
import { ArticlesFeedProps } from "./articles-feed.types";
import { getArticles } from "@/lib/api/feed.lib";

const ArticleComponent = dynamic(() => import("@/components/ui/ArticleCard"));


export const ArticlesFeed = ({ options }: ArticlesFeedProps) => {
    const { data, hasMore, loadMore } = useInfiniteFetching<Article>(getArticles, options)

    return (
        <InfiniteScroll<Article> data={data} hasMore={hasMore} loadMore={loadMore}>
            {(articles) => (
                <Grid>
                    {articles.map((article) => (
                        <Grid.Row key={article.id}
                                  initial={{ opacity: 0, y: 50 }}
                                  animate={{ opacity: 1, y: 0 }}> 
                            <ArticleComponent {...article} />
                        </Grid.Row>
                    ))}
                </Grid>
            )}
        </InfiniteScroll>
    )
}

export default ArticlesFeed;