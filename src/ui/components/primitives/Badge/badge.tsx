import { BadgeProps, badgeVariants } from "./badge.types";

import Icon from "@/ui/components/primitives/Icon";
import Text from "@/ui/components/ui/Text";

import { HEADINGS } from "@/lib/data/headings.data";


const Badge = ({ className, name: heading, status }: BadgeProps) => {
    const badgeData = HEADINGS[heading];

    return (
        <div
            className={badgeVariants({ status, className }) }
            style={{ backgroundColor: badgeData.color }}>
                <Icon icon={badgeData.icon} size="small" />
                <Text variant="p">{badgeData.label}</Text>
        </div>
    )
}

export default Badge;