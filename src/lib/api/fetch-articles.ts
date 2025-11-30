import { Article } from "@/types/api/article";
import fetchWithCache from "./fetch-with-cache";
import { PaginatedContent } from "@/types/api/paginated-article";
import { buildUrl } from "./build-url";

import { QueryParams } from "next-intl/navigation";

export async function fetchArticles(query: QueryParams): Promise<PaginatedContent<Article>> {
    const url =  buildUrl("/posts", query)

    try {
        const response = await fetchWithCache(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch admin url: ${url}`);
        }

        return await response.json() as Promise<PaginatedContent<Article>>;
    } 
    catch (err) {
        throw new Error("Unexpected error occured. Try again later");
    }
}