import { PaginatedContent } from "@/types/api/paginated-content";
import { Article } from "@/types/content/article";
import { Slug } from "@/types/content/slug";
import { fetchAdminData } from "@/utils/api/fetch/fetch-admin-data";


/**
 * @deprecated
 */
export async function fetchArticleBySlug(slug: Slug): Promise<Article> {
    const article = await fetchAdminData<PaginatedContent<Article>>({ 
        endpoint: {
            method: "GET",
            endpoint: "api/posts"
        },
        query: {
            slug: `where[slug][equals]=${slug}`
        },
    });

    return article.docs[0];
}
