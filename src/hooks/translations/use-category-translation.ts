import { Category } from "@/types/category";
import { useTranslations } from "next-intl";

export function useCategoryTranslation(category: Category) {
    return useTranslations(`Navigation.${category.toLowerCase()}`)
}