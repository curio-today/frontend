import { Category } from "@/types/category";
import { getTranslations } from "next-intl/server";

export function getCategoryTranslation(category: Category) {
    return getTranslations(`Navigation.${category.toLowerCase()}`)
}