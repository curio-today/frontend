import { Article } from "@/shared/network/content.types";
import { FetchOptions, PaginatedContentResponse } from "@/shared/network/";
import { fetchAdmin } from "@/lib/client.lib";


/**
 * Returns the articles from API by locale.
 * @param options
 */
export async function getArticles(options: FetchOptions): Promise<Article[]> {
    const paginatedArticles = await fetchAdmin<PaginatedContentResponse<Article>>("/api/posts", options);

    return paginatedArticles.docs;
}