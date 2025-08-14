import styles from "./badge.module.scss";

import { Icon } from "@/shared/data.types";
import { ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const buttonVariants = cva(styles.badge, {
    variants: {
        mode: {
            normal: "",
            outline: styles.outline,
            fill: styles.fill,
        },
    },
    defaultVariants: {
        mode: "normal"
    }
})

export type ButtonProps = {
    icon: Icon;
} & ComponentProps<"button"> & VariantProps<typeof buttonVariants>;