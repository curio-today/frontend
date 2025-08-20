"use client"

import InfiniteScroll, { useInfiniteFetching } from "@/components/ui/InfiniteScroll";
import { getArticles } from "@/lib/api/feed.lib";
import Grid from "@/components/layout/Grid";

import { useLocale } from "next-intl";
import { Article } from "@/shared/network/content.types"

import dynamic from "next/dynamic";

const ArticleComponent = dynamic(() => import("@/components/pages/feed/ArticleCard"));


export const ArticlesFeed = () => {
    const locale = useLocale();
    const { data, hasMore, loadMore } = useInfiniteFetching<Article>(getArticles, {
        limit: 5,
        locale: locale,
    })

    console.log(data);

    return (
        <InfiniteScroll<Article> data={data} hasMore={hasMore} loadMore={loadMore}>
            {(articles) => (
                <Grid>
                    {articles.map((article, index) => (
                        <Grid.Row key={article.slug}>
                            <ArticleComponent {...article} />
                        </Grid.Row>
                    ))}
                </Grid>
            )}
        </InfiniteScroll>
    )
}

export default ArticlesFeed;