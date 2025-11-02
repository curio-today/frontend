import { PaginatedContent } from "@/lib/types/api/paginated-content";
import { Article } from "@/lib/types/content/article";
import { Slug } from "@/lib/types/content/slug";
import { fetchAdminData } from "@/lib/utils/api/fetch/fetch-admin-data";


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
