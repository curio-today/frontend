import styles from "./badge.module.scss";


import { Heading } from "@/shared/data.types";
import { ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const badgeVariants = cva(styles.badge, {
    variants: {
        status: {
            active: styles.active,
            inactive: "",
        },
    },
    defaultVariants: {
        status: "active"
    }
})

export type BadgeProps = {
    isActive?: boolean;
    heading: Heading;
} & ComponentProps<"div"> & VariantProps<typeof badgeVariants>;