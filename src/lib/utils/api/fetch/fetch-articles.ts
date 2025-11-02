import { PaginatedContent } from "@/lib/types/api/paginated-content";
import { fetchEndpointList } from "./fetch-endpoint-list";
import { Article } from "@/lib/types/content/article";
import { QueryParams } from "@/lib/types/api/query-params";

export async function fetchArticles(query?: QueryParams): Promise<Article[]> {
    return (await fetchEndpointList<PaginatedContent<Article>>("articles", query)).docs;
}