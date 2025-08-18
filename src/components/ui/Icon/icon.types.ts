import styles from "./Icon.module.scss"



import { Size } from "@/shared/data.types";
import { Include } from "@/shared/utility.types";
import { ImageProps } from "next/image";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

export const iconVariants = cva(styles.iconWrapper, {
    variants: {
        size: {
            small: styles.small,
            medium: styles.medium,
            large: styles.large,
            huge: styles.huge,
        }
    },
    defaultVariants: {
        size: "medium"
    }
})

export type IconVariant =
    | "clock"
    | "external"
    | "filter"
    | "flame"
    | "globe"
    | "hashtag"
    | "magnifying_glass"
    | "megaphone"
    | "moon"
    | "question_mark"
    | "share"
    | "sun"
    | "wow"
    | "curio"
    | "newspaper"
    | "lightbulb"
    | "quote";

export type IconProps = {
    icon: IconVariant;
    size: Size;
} & VariantProps<typeof iconVariants> & Partial<Include<ImageProps, "imageProps">> & ComponentProps<"img">;