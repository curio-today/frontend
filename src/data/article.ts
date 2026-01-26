// lib/articles.ts
import { Article } from "@/types/api/article";
import { PaginatedContent } from "@/types/api/paginated-article";
import { QueryParams } from "next-intl/navigation";
import { SearchFilters } from "@/types/search-filters";
import { getLocale } from "next-intl/server";
import { CATEGORY_SLUG_ID_MAP } from "@/constants/categories";
import { buildUrl } from "@/lib/build-url";
import { fetchWithTimeout } from "@/lib/fetch-with-timeout";
import { sanitizeInput } from "@/lib/sanitize-input";


async function fetchJson<T>(url: string, options: RequestInit = {}, timeout = 15000): Promise<T> {
    try {
        const response = await fetchWithTimeout(url, options, timeout);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Failed to fetch ${url}:`, response.status, errorText);
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        return (await response.json()) as T;
    } catch (err) {
        console.error(`Error fetching ${url}:`, err);

        if (err instanceof TypeError && err.message.includes('fetch')) {
            throw new Error('Network error. Please check your connection and try again.');
        }
        if (err instanceof Error && err.name === 'AbortError') {
            throw new Error('Request timed out. Please try again.');
        }

        throw new Error('Unexpected error occurred. Please try again later.');
    }
}

export async function getArticle(id: string, query?: QueryParams): Promise<Article> {
    const url = buildUrl(`/posts/${id}`, query);
    return fetchJson<Article>(url.href, {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function getArticlePreview(id: string, query?: QueryParams): Promise<Article> {
    const url = buildUrl(`/posts/${id}`, { ...query, draft: 'true' });
    return fetchJson<Article>(url.href, {
        cache: 'no-store',
        next: { revalidate: 0 },
    });
}


export async function getArticles(query: QueryParams): Promise<PaginatedContent<Article>> {
    const url = buildUrl("/posts", query);
    return fetchJson<PaginatedContent<Article>>(url.href, {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function getArticlesByQuery(query: string, queryParams: QueryParams): Promise<PaginatedContent<Article>> {
    const sanitizedQuery = sanitizeInput(query);
    return getArticles({
        "where[title][like]": sanitizedQuery || "",
        ...queryParams,
    });
}


export async function getLocalizedArticlesWithFilters(searchFilters: SearchFilters) {
    const locale = await getLocale();

    return getArticles({
        locale,
        ...(searchFilters.q && { "where[title][like]": sanitizeInput(searchFilters.q) }),
        ...(searchFilters.category && { "where[badge.id][equals]": CATEGORY_SLUG_ID_MAP[searchFilters.category] }),
    });
}
