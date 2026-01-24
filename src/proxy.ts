import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';
import { getArticles } from './data/article';
import { CATEGORY_ID_SLUG_MAP } from './constants/categories';

export default async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const match = pathname.match(/^\/([a-z]{2})\/feed\/[^/]+\/([^/]+)$/);

    if (match) {
        const locale = match[1];
        const slug = match[2];

        const article = (await getArticles({
            "locale": locale,
            "where[slug][equals]": slug,
        })).docs[0];

        if (article) {
            const articleCategory = CATEGORY_ID_SLUG_MAP[article.badge.id];

            const url = req.nextUrl.clone();
            url.pathname = `/${locale}/${articleCategory}/${article.id}`;
            return NextResponse.redirect(url, 308);
        }
    }

    return createMiddleware(routing)(req);
}

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
