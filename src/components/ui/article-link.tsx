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
    const router = useRouter();

    const handleOnClick = (e: MouseEvent) => {
        e.preventDefault();

        startTransition(() => {
            if (document.startViewTransition) {
                document.startViewTransition(() => {
                    router.push(href);
                })
            } else {
                router.push(href);
            }
        })
    }

    return (
        <Link href={href} onClick={handleOnClick} {...rest}>
            <ViewTransition name={getArticleViewTransitionName(id)}>
                {children}
            </ViewTransition>
        </Link>
    )
}
