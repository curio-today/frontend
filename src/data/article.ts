// lib/articles.ts
import { Article } from "@/types/api/article";
import { PaginatedContent } from "@/types/api/paginated-article";
import { QueryParams } from "next-intl/navigation";
import { SearchFilters } from "@/types/search-filters";
import { getLocale } from "next-intl/server";
import { CATEGORY_SLUG_ID_MAP } from "@/constants/categories";
import { buildUrl } from "@/lib/build-url";
import { sanitizeInput } from "@/lib/sanitize-input";
import { fetchJson } from "@/lib/fetch-json";


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
