import styles from "./button.module.scss";

import { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { HTMLMotionProps } from "framer-motion";


import { IconProps, IconVariant } from "@/components/ui/Icon";
import { PropsWithChildren } from "react";
import ExtendedUiProps from "@/types/generics/extended-ui-props";

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

type ExtendedIconProps = ExtendedUiProps<IconVariant, IconProps>;

export type ButtonProps = {
    icon?: ExtendedIconProps;
} & PropsWithChildren<HTMLMotionProps<"button">> & VariantProps<typeof buttonVariants>;