import styles from "./list.module.scss"

import { Size } from "@/shared/data.types";
import { ComponentProps } from "react";

import { cva, VariantProps } from "class-variance-authority";

export const listVariants = cva(styles.list, {
    variants: {
        orientation: {
            horizontal: styles.horizontal,
            vertical: styles.vertical,
        },
        gap: {
            small: styles.small,
            medium: styles.medium,
            large: styles.large,
            huge: styles.huge,
        }
    },
    defaultVariants: {
        orientation: "horizontal",
        gap: "medium"
    }
})

export type ListProps = {
    orientation: "horizontal" | "vertical",
    gap?: Size,
} & ComponentProps<"ul"> & VariantProps<typeof listVariants>;
