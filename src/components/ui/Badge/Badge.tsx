import styles from "./Badge.module.scss"

import Icon from "@/components/ui/Icon";
import Text from "@/components/ui/Text";
import Link from "next/link";

import { BadgeProps } from "./types/BadgeProps";
import clsx from "clsx";

const Badge = ({ href, color, icon, label, isActive }: BadgeProps) => {
    return (
        <Link href={href} className={clsx(
            styles.badge,
            isActive && styles.active
        )} style={{
            backgroundColor: color,
        }}>
            <Icon icon={icon} size="small" />
            <Text variant="p">{label}</Text>
        </Link>
    )
}

export default Badge;