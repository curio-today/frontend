import { PaginatedContent } from "@/types/api/paginated-content";
import { Article } from "@/types/content/article";
import { infiniteQueryOptions } from "@tanstack/react-query";
import { fetchEndpointList } from "@/utils/api/fetch";

export function createArticlesSuspenseQuery(locale: string) {
    return infiniteQueryOptions<PaginatedContent<Article>, null, Article[]>(
        {
            queryKey: ["articles"],
            queryFn: async ({ pageParam = 1 }) => await fetchEndpointList<PaginatedContent<Article>>("articles", { page: String(pageParam), locale }),
            getNextPageParam: lastPage => lastPage.nextPage ?? undefined,
            initialPageParam: 1,
            select: data => data.pages.flatMap(page => page.docs),
        }
    )
}
