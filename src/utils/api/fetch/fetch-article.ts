import { Article } from "@/types/content/article";
import { fetchAdminData } from "./fetch-admin-data";

/**
 * Returns 
 */
export async function fetchArticle(id: string): Promise<Article | undefined> {
    // const article = await fetchAdminData<Article>({ 
    //     endpoint: {
    //         method: "GET",
    //         endpoint: "api/posts"
    //     },
    //     query: {
    //         id: id,
    //     },
    // });
    const article = await fetchAdminData<Article>({ 
     });

    return article;
}
