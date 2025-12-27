import { Article } from "@/types/api/article";
import { fetchWithCache } from "@/lib/fetch-with-cache";
import { buildUrl } from "@/lib/build-url";
import { PaginatedContent } from "@/types/api/paginated-article";

import { QueryParams } from "next-intl/navigation";

export async function getArticles(query: QueryParams): Promise<PaginatedContent<Article>> {
    const url =  buildUrl("/posts", query)

    try {
        const response = await fetchWithCache(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch admin url: ${url}`);
        }

        return await response.json() as Promise<PaginatedContent<Article>>;
    } 
    catch (err) {
        throw new Error(`Unexpected error occured. Try again later.`);
    }
}