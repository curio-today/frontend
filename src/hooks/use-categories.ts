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