import { Article } from "@/types/api/article"
import { 
    Item, 
    ItemActions, 
    ItemContent,
    ItemDescription,
    ItemTitle
} from "../core/item"
import { ChevronRight } from "lucide-react"

export type ArticleItemProps = Pick<Article, "title" | "slug" | "subtitle" | "id" | "badge" | "createdAt" | "badge">

export const ArticleItem = ({ title, subtitle }: ArticleItemProps) => {
    return (
        <Item variant="outline">
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{subtitle}</ItemDescription>
            </ItemContent>
            <ItemActions>
                <ChevronRight />
            </ItemActions>
        </Item>
    )
}