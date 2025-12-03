import { Article } from "@/types/api/article";
import { fetchWithCache } from "@/lib/fetch-with-cache";
import { buildUrl } from "@/lib/build-url";

import { QueryParams } from "next-intl/navigation";

export async function fetchArticle(id: string, query?: QueryParams): Promise<Article> {
    const url =  buildUrl(`/posts/${id}`, query)

    try {
        const response = await fetchWithCache(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch admin url: ${url}`);
        }

        return await response.json() as Promise<Article>;
    } 
    catch (err) {
        throw new Error(`${err}\nUnexpected error occured. Try again later`);
    }
}