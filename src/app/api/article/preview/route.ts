import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"
import { draftMode } from "next/headers";
import { CATEGORY_ID_SLUG_MAP } from "@/constants/categories";
import { redirect } from "next/navigation";
import { getArticlePreview } from "@/data/article/get-article-preview";

export async function GET(request: NextRequest) {
    const secret = process.env.PREVIEW_SECRET;
    const token = request.nextUrl.searchParams.get("token");
    
    if (!token) {
        return new Response("Missing token", { status: 400 });
    }
    
    let article;
    let id: string;
    let locale: string | undefined;
    
    try {
        const decoded = jwt.verify(token, secret!) as {
            collection: string,
            id: string,
            locale?: string,
        };
        
        id = decoded.id;
        locale = decoded.locale;
        
        article = await getArticlePreview(id, { locale });
        
        const draft = await draftMode();
        draft.enable();
    } catch (error) {
        console.error('Preview error:', error);
        return new Response("Invalid or expired token", { status: 401 });
    }
    
    // Redirect OUTSIDE the try/catch
    const path = `/${CATEGORY_ID_SLUG_MAP[article.badge.id]}/${article.id}`;
    redirect(path);
}