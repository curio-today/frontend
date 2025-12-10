import { Badge } from "@/components/core/badge";
import { CATEGORY_ID_SLUG_MAP } from "@/constants/categories";
import { Article } from "@/types/api/article";
import { BadgeInfoIcon } from "lucide-react";
import { ComponentProps } from "react";

import Link from "next/link";

export type ArticleBadgeProps = {
    id: Article["badge"]["id"],
    name: Article["badge"]["name"],
} & ComponentProps<typeof Badge>;
 
export const ArticleBadge = ({ name, id, ...rest }: ArticleBadgeProps) => (
    <Badge 
        variant="secondary"
        asChild
        {...rest}
    >
        <Link href={`/${CATEGORY_ID_SLUG_MAP[id]}`}>
            <BadgeInfoIcon />
            {name}
        </Link>
    </Badge>
)
