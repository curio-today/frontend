import styles from "./button.module.scss";

import { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { HTMLMotionProps } from "framer-motion";


import { IconProps, IconVariant } from "@/components/ui/Icon";
import { PropsWithChildren } from "react";

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
        type: IconVariant;
        props?: IconProps;
    }
} & PropsWithChildren<HTMLMotionProps<"button">> & VariantProps<typeof buttonVariants>;