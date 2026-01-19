"use client"

import { useCategoryTranslation } from "@/hooks/translations/use-category-translation"
import { Category } from "@/types/category"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const CategoryLink = ({ category }: { category: Category }) => {
    const t = useCategoryTranslation(category);

    return (
        <Button variant="link" asChild>
            <Link
                className="justify-start text-primary font-medium text-xl"
                href={`/${category}`}
            >
                {t("title")}
            </Link>
        </Button>
    )
}