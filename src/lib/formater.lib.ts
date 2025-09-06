import { Article } from "@/shared/network/content.types";

type FormatArticleDateType = {
    article: Article,
    locale: string,
}

/**
 * 
 * @deprecated use format-article instead
 */
export function formatArticleDateWithLocale({ article, locale }: FormatArticleDateType) {
    const createdAt = new Date(article.createdAt);

    article.createdAt = createdAt.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}