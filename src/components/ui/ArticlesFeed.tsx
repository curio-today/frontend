"use client"

import { FetchOptions } from "@/types/api/fetch-options"
import InfiniteScroll from "./InfiniteScroll"
import { useInfiniteFetching } from "@/hooks"
import { Article } from "@/types/content/article"
import { fetchAdminData } from "@/utils/api/fecthAdminData"
import { PaginatedContent } from "@/types/api/paginated-content"
import Grid from "@/components/layout/Grid"
import { ArticleCard } from "./ArticleCard/ArticleCard"
import { capitalizeString } from "@/utils/capitalizeString"

export type ArticlesFeedProps = {
    maxArticles?: FetchOptions["limit"];
    locale: FetchOptions["locale"];
    [k: string]: FetchOptions[string];
}

async function getArticles(options: FetchOptions): Promise<Article[]> {
    if (options.heading) {
        capitalizeString(options.heading);
    }
    
    const paginatedArticles = await fetchAdminData<PaginatedContent<Article>>({ 
        endpoint: {
            method: "GET",
            path: "api/posts"
        },
        options
     })

    return paginatedArticles.docs;
}


export const ArticlesFeed = ({ locale, maxArticles = 5, ...rest}: ArticlesFeedProps) => {
    const { data, hasMore, loadMore } = useInfiniteFetching(getArticles, {
        limit: maxArticles,
        locale: locale,
        ...rest
    })
    
    return (
        <InfiniteScroll data={data} hasMore={hasMore} loadMore={loadMore}>
            {
                (articles) => (
                    <Grid>
                        {articles.map((article) => (
                            <Grid.Row key={article.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}> 
                                <ArticleCard {...article} />
                            </Grid.Row>
                        ))}
                    </Grid>
                )
            }
        </InfiniteScroll>
    )
}

export default ArticlesFeed;