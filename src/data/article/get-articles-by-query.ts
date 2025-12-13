import { Article } from "@/types/api/article";
import { PaginatedContent } from "@/types/api/paginated-article";
import { getArticles } from "./get-articles";
import { QueryParams } from "next-intl/navigation";
import { sanitizeInput } from "@/lib/sanitize-input";

export const getArticlesByQuery = async (query: string, queryParams: QueryParams): Promise<PaginatedContent<Article>> => {
    const sanitizedQuery = sanitizeInput(query);
    console.log(sanitizedQuery);
    
    const articles = await getArticles({
        "where[title][like]": sanitizedQuery || "",
        ...queryParams,
    });
    
    return articles;
}