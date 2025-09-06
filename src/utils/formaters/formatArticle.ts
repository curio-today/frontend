import { Article } from "@/types/content/article";

type FormatArticleDateWithLocaleParams = {
    date: Article["createdAt"];
    locale: string;
    options?: Intl.DateTimeFormatOptions;
}

/**
 * Formats the `createdAt` date of an article object into a localized string.
 *
 * @param {FormatArticleDateWithLocaleParams} params - The parameters object.
 * @param {Article["createdAt"]} date - The date value to be formatted.
 * @param {string} params.locale - A BCP 47 language tag (e.g., `"en-US"`, `"fr-FR"`) used for localization.
 * @param {Intl.DateTimeFormatOptions} [params.options={ day: "numeric", month: "long", year: "numeric" }] - Options for date formatting.
 *
 * @returns {void} Mutates the `article` object by replacing its `createdAt` property with the formatted date string.
 *
 * @example
 * import { Article } from "@/types/content/article"
 * const article: Article = { createdAt: "2023-09-01T12:00:00Z" };
 * formatArticleDateWithLocale({ article, locale: "en-US" });
 * console.log(article.createdAt); // "September 1, 2023"
 */
export function formatArticleDateWithLocale(
    {
        date,
        locale,
        options = {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }: FormatArticleDateWithLocaleParams
): string {
    const createdAt = new Date(date);

    return  createdAt.toLocaleDateString(locale, options);
}
