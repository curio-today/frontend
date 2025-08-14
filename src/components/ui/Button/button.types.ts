import styles from "./button.module.scss";

import { ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { IconProps, IconType } from "@/components/ui/Icon";

export const buttonVariants = cva(styles.badge, {
    variants: {
        mode: {
            normal: "",
            outline: styles.outline,
            fill: styles.fill,
            noBorder: styles.noBorder,
        },
    },
    defaultVariants: {
        mode: "normal"
    }
})

export type ButtonProps = {
    icon?: {
        type: IconType;
        props?: IconProps;
    }

} & ComponentProps<"button"> & VariantProps<typeof buttonVariants>;