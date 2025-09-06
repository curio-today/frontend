import styles from "./badge.module.scss";


import { ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { Heading } from "@/types/content/heading";

export const badgeVariants = cva(styles.badge, {
    variants: {
        status: {
            active: styles.active,
            inactive: null,
        },
    },
    defaultVariants: {
        status: "active"
    }
})

export type BadgeProps = {
    isActive?: boolean;
    name: Heading;
} & ComponentProps<"div"> & VariantProps<typeof badgeVariants>;