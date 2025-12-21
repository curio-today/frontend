"use client"

import { CATEGORY_ID_SLUG_MAP, CATEGORY_LIST, CATEGORY_PATHNAME_MAP, CATEGORY_SLUG_ID_MAP } from "@/constants/categories";
import { Category } from "@/types/category";
import { useTranslations } from "next-intl"

interface UseCategoriesReturn {
    categories: {
        key: Category,
        label: string,
    }[],

    getId: (category: Category) => string,
    getCategory: (id: string) => Category,
    extractFromPathname: (pathname: string) => Category | undefined,
}

/**
 * Provides category metadata and helper utilities with localization support.
 *
 * This hook acts as an abstraction layer over category-related constants,
 * preventing consumers from importing or depending on them directly.
 * It also resolves translated category labels using the `Navigation`
 * translation namespace.
 *
 * @example
 * const { categories, getId } = useCategories();
 *
 * categories.forEach(c => {
 *   console.log(c.key, c.label);
 * });
 *
 * const categoryId = getId('amazes');
 */
export const useCategories = (): UseCategoriesReturn => {
    const t = useTranslations("Navigation");

    return {
        categories: CATEGORY_LIST.map(category => ({
            key: category,
            label: t(`${category}.title`)
        })),

        getId: category => CATEGORY_SLUG_ID_MAP[category],
        getCategory: id => CATEGORY_ID_SLUG_MAP[id],
        extractFromPathname: pathname => CATEGORY_PATHNAME_MAP[pathname]
    }

}