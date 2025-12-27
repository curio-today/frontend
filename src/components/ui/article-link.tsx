import { CATEGORY_ID_SLUG_MAP } from "@/constants/categories"
import { cn } from "@/lib/utils"
import { Article } from "@/types/api/article"
import Link from "next/link"
import { ComponentProps, PropsWithChildren } from "react"

type ArticleLinkProps = PropsWithChildren<{
    article: Pick<Article, "badge" | "id">,
}> & ComponentProps<"a">

export const ArticleLink = ({ article, children, className, ...rest}: ArticleLinkProps) => {
    return (
        <Link href={`${CATEGORY_ID_SLUG_MAP[article.badge.id]}/${article.id}`} className={cn("hover:outline-1 hover:outline-primary rounded-md", className)} {...rest}>
            {children}
        </Link>
    )
}