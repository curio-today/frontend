import { Article } from "@/types/api/article";
import { buildUrl } from "@/lib/build-url";
import { PaginatedContent } from "@/types/api/paginated-article";
import { QueryParams } from "next-intl/navigation";
import {fetchWithTimeout} from "@/lib/fetch-with-timeout";

export async function getArticles(query: QueryParams): Promise<PaginatedContent<Article>> {
    const url = buildUrl("/posts", query);

    try {
        const response = await fetchWithTimeout(url.href, {
            headers: {
                'Content-Type': 'application/json',
            },
        }, 15000);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Failed to fetch articles from ${url}:`, response.status, errorText);
            throw new Error(`Failed to fetch articles: ${response.status}`);
        }

        return await response.json() as PaginatedContent<Article>;
    }
    catch (err) {
        console.error('Error in getArticles:', err);

        if (err instanceof Error) {
            // Network/timeout errors
            if (err.message.includes('fetch') || err.name === 'AbortError') {
                throw new Error('Network error. Please check your connection and try again.');
            }
            // Re-throw HTTP errors with context
            if (err.message.includes('Failed to fetch articles')) {
                throw err;
            }
        }

        throw new Error('Unexpected error occurred. Please try again later.');
    }
}