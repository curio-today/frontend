import { Article } from "@/shared/network/content.types";
import { FetchOptions, PaginatedContentResponse } from "@/shared/network/";
import { fetchAdmin } from "@/lib/client.lib";
import { Heading } from "@/shared/data.types";


/**
 * Returns the articles from API by locale.
 * @param options
 */
export async function getArticles(options: FetchOptions): Promise<Article[]> {
    const paginatedArticles = await fetchAdmin<PaginatedContentResponse<Article>>("/api/posts", options);

    return paginatedArticles.docs;
}

export async function getArticle({ limit = 1, ...rest }: FetchOptions): Promise<Article> {
    const paginatedArticles = await fetchAdmin<PaginatedContentResponse<Article>>("/api/posts", { limit, ...rest });
    const firstArticle = paginatedArticles.docs[0];

    return firstArticle;
}