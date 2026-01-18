"use client"

import { CATEGORY_ID_SLUG_MAP } from "@/constants/categories"
import { Link } from "@/i18n/navigation"
import { Article } from "@/types/api/article"
import { ComponentProps } from "react"

type ArticleLinkProps = {
    article: Pick<Article, "badge" | "id">,
} & Omit<ComponentProps<typeof Link>, "href">

export const ArticleLink = ({ article, children, ...rest }: ArticleLinkProps) => {
    const { badge, id } = article;
    const href = `/${CATEGORY_ID_SLUG_MAP[badge.id]}/${id}`;

    return (
        <Link href={href} {...rest}>
            {children}
        </Link>
    )
}
