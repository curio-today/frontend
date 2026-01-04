import {Article} from "@/types/api/article";
import {buildUrl} from "@/lib/build-url";

import {QueryParams} from "next-intl/navigation";
import {fetchWithTimeout} from "@/lib/fetch-with-timeout";

export async function getArticle(id: string, query?: QueryParams): Promise<Article> {
    const url = buildUrl(`/posts/${id}`, query);

    try {
        const response = await fetchWithTimeout(url.href, {
            headers: {
                'Content-Type': 'application/json',
            }
        }, 15000);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Failed to fetch article ${id}:`, response.status, errorText);
            throw new Error(`Failed to fetch article: ${response.status} ${response.statusText}`);
        }

        return await response.json() as Article;
    }
    catch (err) {
        console.error('Error fetching article:', err);

        // Provide more specific error messages
        if (err instanceof TypeError && err.message.includes('fetch')) {
            throw new Error('Network error. Please check your connection and try again.');
        }

        throw new Error(`Unable to load article. Please try again later.`);
    }
}