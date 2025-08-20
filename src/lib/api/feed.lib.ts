import { Article } from "@/shared/network/content.types";
import { FetchOptions } from "@/shared/network/";
import { fetchAdmin } from "@/lib/client.lib";
import { PaginatedContentResponse } from "@/shared/network/response.types";


/**
 * Returns the articles from API by locale.
 * @param options
 */
export async function getArticlesByLocale(options: FetchOptions): Promise<Article[]> {
    const data = await fetchAdmin<PaginatedContentResponse<Article>>("/api/posts", options)
    const localizedArticles: Article[] = [];
    const ids: string[] = data.docs.map(article => (article.id));
    ids.forEach((id: string) => {
        fetchAdmin<Article>(`/api/posts/${id}`, {
            locale: "ru",
            limit: 1,
        })
            .then(post => {
                localizedArticles.push(post);
            })
            .catch(error => {
                console.error("Error fetching posts: ", error);
            })
    })

    return localizedArticles;
}