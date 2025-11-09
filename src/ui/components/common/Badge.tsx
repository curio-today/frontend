import styles from "./styles/badge.module.css"

import { PropsWithActive } from "@/lib/types/ui/PropsWithActive";
import { cva, VariantProps } from "class-variance-authority"
import { IconVariant } from "@/lib/types/content/icon";

import Icon from "./Icon";
import Text from "./Text"


const badgeVariants = cva(styles.badge, {
    variants: {
        status: {
            active: styles.active,
            inactive: null,
        },
    },
    defaultVariants: {
        status: "active"
    }
});

export type BadgeProps = PropsWithActive<{
    icon: IconVariant;
    label: string;
}> & VariantProps<typeof badgeVariants>;

export const Badge = ({ icon, label, status }: BadgeProps) => {
    return (
        <div className={badgeVariants({ status })}>
            <Icon icon={icon} size="small" />
            <Text variant="p">{label}</Text>
        </div>
    )
}