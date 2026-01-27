"use client"

import { getArticles } from "@/data/article";
import { Category } from "@/types/category";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { useCategoryTranslation } from "../translations/use-category-translation";

export function useSuspenseArticles(category?: Category, options?: Record<string, unknown>) {
    const locale = useLocale();
    const t = useCategoryTranslation(category ?? "amazes");

    const suspenseQuery = useSuspenseQuery(queryOptions({
        queryKey: ["articles", { locale, category, ...options }],
        queryFn: () => getArticles({
            locale,
            "where[title][exists]": true,
            ...(category ? { "where[badge.name][equals]": t("title") } : {}),
            ...options
        }),
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 0,
        retry: 2,
        retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    }));

    const hasMore = suspenseQuery.data.docs.length < suspenseQuery.data.totalDocs;

    return {
        ...suspenseQuery,
        hasMore,
    }
}
