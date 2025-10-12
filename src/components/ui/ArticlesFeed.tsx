/** @file @deprecated */


"use client"

import { ApiRequest } from "@/types/api/new-request"
import InfiniteScroll from "./InfiniteScroll"
import { useInfiniteFetching } from "@/hooks"
import { Article } from "@/types/content/article"
import { fetchAdminData } from "@/utils/api/fetch-admin-data"
import { PaginatedContent } from "@/types/api/paginated-content"
import Grid from "@/components/layout/Grid"
import { ArticleCard } from "./ArticleCard/ArticleCard"
import { capitalizeString } from "@/utils/capitalizeString"

/**
 * @deprecated
 */
export type ArticlesFeedProps = {
    locale: ApiRequest["query"]["locale"];
    maxArticlesPerRequest?: ApiRequest["query"]["limit"];
}

/**
 * @deprecated 
 */
async function getArticles({ query }: ApiRequest): Promise<Article[]> {
    if (query.heading) {
        capitalizeString(query.heading);
    }
    
    const paginatedArticles = await fetchAdminData<PaginatedContent<Article>>({ 
        endpoint: {
            method: "GET",
            endpoint: "api/posts"
        },
        query: query
     })

    return paginatedArticles.docs.filter((article) => article.title != undefined);
}

/**
 * 
 * @deprecated use instead ArticlesGrid
 * @see ArticlesGrid
 */
export const ArticlesFeed = ({ locale, maxArticlesPerRequest = 5 }: ArticlesFeedProps) => {
    const { data, hasMore, loadMore } = useInfiniteFetching(getArticles, {
        endpoint: {
            method: "GET",
            endpoint: "api/posts",
        },
        query: {
            locale: locale,
            limit: maxArticlesPerRequest,
        }
    })

    return (
        <InfiniteScroll data={data} hasMore={hasMore} loadMore={loadMore}>
            {
                (articles) => (
                    <Grid>
                        {articles.map((article) => {
                            if (article.title === undefined) return null;
                            
                            return (
                                <Grid.Row key={article.id}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}> 
                                    <ArticleCard {...article} />
                                </Grid.Row>
                            )
                        })}
                    </Grid>
                )
            }
        </InfiniteScroll>
    )
}

export default ArticlesFeed;