import { Article } from "@/types/api/article"
import { 
    Item, 
    ItemActions, 
    ItemContent,
    ItemDescription,
    ItemTitle
} from "../core/item"
import { ChevronRight } from "lucide-react"
import { Suspense } from "react"
import { Skeleton } from "../core/skeleton"

export type ArticleItemProps = Pick<Article, "title" | "slug" | "subtitle" | "id" | "badge" | "createdAt" | "badge">

export const ArticleItem = ({ title, subtitle }: ArticleItemProps) => {
    return (
        <Suspense fallback={<ArticleItemSkeleton />}>
            <Item variant="outline" className="bg-background hover:bg-accent">
                <ItemContent>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemDescription>{subtitle}</ItemDescription>
                </ItemContent>
                <ItemActions>
                    <ChevronRight />
                </ItemActions>
            </Item>
        </Suspense>
    )
}

const ArticleItemSkeleton = () => (
    <Skeleton className="w-full h-20" />
)