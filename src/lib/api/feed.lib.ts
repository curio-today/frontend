import { Article } from "@/shared/network/content.types";
import { FetchOptions } from "@/shared/network/";
import { fetchAdmin } from "@/lib/client.lib";


/**
 * Returns the articles from API by locale.
 * @param options
 */
export async function getArticles(options: FetchOptions): Promise<Article[]> {
    return await fetchAdmin<Article[]>("/api/posts", options)
}