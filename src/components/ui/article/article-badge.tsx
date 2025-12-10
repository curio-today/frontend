import { Badge } from "@/components/core/badge";
import { CATEGORY_ID_SLUG_MAP } from "@/constants/categories";
import { Article } from "@/types/api/article";
import { BadgeInfoIcon } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

export type ArticleBadgeProps = {
    badge: Article["badge"],
} & ComponentProps<"span">

export const ArticleBadge = ({ badge, ...rest }: ArticleBadgeProps) => (
    <Link href={`/${CATEGORY_ID_SLUG_MAP[badge.id]}`}>
        <Badge 
            className="bg-blue-400"
            variant="secondary"
            {...rest}
        >
            <BadgeInfoIcon />
            {badge.name}
        </Badge>
    </Link>
)
