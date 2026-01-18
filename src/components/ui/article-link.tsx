"use client"

import { CATEGORY_ID_SLUG_MAP } from "@/constants/categories"
import { useRouter } from "@/i18n/navigation"
import { getArticleViewTransitionName } from "@/lib/view-transition"
import { Article } from "@/types/api/article"
import Link from "next/link"
import { ComponentProps, PropsWithChildren, ViewTransition, MouseEvent, startTransition } from "react"

type ArticleLinkProps = PropsWithChildren<{
    article: Pick<Article, "badge" | "id">,
}> & ComponentProps<"a">

export const ArticleLink = ({ article, children, ...rest }: ArticleLinkProps) => {
    const { badge, id } = article;
    const href = `/${CATEGORY_ID_SLUG_MAP[badge.id]}/${id}`;

    return (
        <Link href={href} {...rest}>
            {children}
        </Link>
    )
}
