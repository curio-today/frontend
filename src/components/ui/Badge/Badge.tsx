import styles from "./Badge.module.scss"

import Icon from "@/components/ui/Icon";
import Text from "@/components/ui/Text";
import Link from "next/link";

import { BadgeProps } from "./types/BadgeProps";

const Badge = (props: BadgeProps) => {
    return (
        <Link href={props.href} className={styles.badge} style={{
            backgroundColor: props.color,
        }}>
            <Icon icon={props.icon} size="small" />
            <Text variant="p">{props.label}</Text>
        </Link>
    )
}

export default Badge;