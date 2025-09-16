import { ApiRequest } from "@/types/api/new-request";
import { Article } from "@/types/content/article";
import { fetchAdminData } from "@/utils/api/fetch-admin-data";


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
