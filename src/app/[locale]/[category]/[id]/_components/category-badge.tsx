import { Badge } from "@/components/core/badge";
import { CATEGORY_ID_SLUG_MAP } from "@/constants/categories";
import { Article } from "@/types/api/article";
import { BadgeInfoIcon } from "lucide-react";
import Link from "next/link";

export const CategoryBadge = ({ badge }: { badge: Article["badge"] }) => (
    <Link href={`/${CATEGORY_ID_SLUG_MAP[badge.id]}`}>
        <Badge 
            className="bg-blue-400"
            variant="secondary"
        >
            <BadgeInfoIcon />
            {badge.name}
        </Badge>
    </Link>
)
