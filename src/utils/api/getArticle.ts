import { Article } from "@/types/content/article";
import { fetchAdminData } from "@/utils/api/fecthAdminData";

/**
 * Returns 
 */
async function getArticle(slug: string): Promise<Article> {
    return await fetchAdminData<Article>({ 
        endpoint: {
            method: "GET",
            path: "api/posts"
        },
        options: {
            limit: 1,
            locale: "en",
            slug: slug,
        }
    })
}