import { BadgeProps, badgeVariants } from "./badge.types";

import Icon from "@/components/ui/Icon";
import Text from "@/components/ui/Text";

import { Headings } from "@/data/headings.data";


const Badge = ({ className, heading, status }: BadgeProps) => {
    const badgeData = Headings[heading];

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