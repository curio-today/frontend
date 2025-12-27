"use client"

import { getArticles } from "@/data/article/get-articles";
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
            ...(category ? { "where[badge.name][equals]": t("title") } : {}),
            ...options
        }),
        staleTime: 5 * 1000,
    }));
    const hasMore = suspenseQuery.data.docs.length < suspenseQuery.data.totalDocs;

    return {
        ...suspenseQuery,
        hasMore,
    }
}