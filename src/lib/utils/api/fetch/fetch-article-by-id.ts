import { ApiRequest } from "@/lib/types/api/new-request";
import { Article } from "@/lib/types/content/article";
import { fetchAdminData } from "@/lib/utils/api/fetch/fetch-admin-data";


/**
 * Returns 
 */
export async function fetchArticleById(id: string, locale: string): Promise<Article | undefined> {
    const article = await fetchAdminData<Article>({ 
        method: "GET",
        endpoint: `api/posts/${id}`,
        query: {
            locale: `locale=${locale}`
        },
    });

    return article;
}
