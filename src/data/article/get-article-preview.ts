import { buildUrl } from "@/lib/build-url";
import { Article } from "@/types/api/article";
import { QueryParams } from "next-intl/navigation";

export async function getArticlePreview(id: string, query?: QueryParams): Promise<Article> {
    const url = buildUrl(`/posts/${id}`, { ...query, draft: 'true' });
    
    try {
        const response = await fetch(url, {
          cache: 'no-store',
          next: { revalidate: 0 },
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch admin url: ${url}`);
        }
        return await response.json() as Promise<Article>;
    } 
    catch (err) {
        throw new Error(`${err}\nUnexpected error occured. Try again later`);
    }
}