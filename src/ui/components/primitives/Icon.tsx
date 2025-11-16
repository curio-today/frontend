"use client"

import Image from "next/image";
import IconsConfig from "@@/icons.config";

import { motion } from "framer-motion";
import { Include } from "@/lib/types/utils";
import { ImageProps } from "next/image";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { IconVariant } from "@/lib/types/content/icon";
import useTheme from "@/ui/hooks/useTheme";

export type IconProps = { icon: IconVariant } &     
    VariantProps<typeof iconVariants> & 
    Partial<Include<ImageProps, "imageProps">> & 
    ComponentProps<"img">;

export const iconVariants = cva("relative aspect-square", {
    variants: {
        size: {
            small: "w-[clamp(1rem,2vw,2rem)]",
            medium: "w-[clamp(1.5rem,2vw,2rem)]",
            large: "w-[clamp(3rem,5vw,7rem)]",
            huge: "w-[clamp(5rem,8vw,15rem)]",
            gigantic: "w-[15rem]",
        },
    },
    defaultVariants: {
        size: "medium",
    }
})



/**
 * Renders a static (non-animated) icon.
 *
 * @param icon - The type or name of the icon to display.
 * @param size - The size of the icon.
 * @param style - Optional inline styles to apply to the icon.
 * @param className - Will be used on icon wrapper.
 * @param props - Additional props to spread onto the icon element.
 *
 * @constructor
 */
export const Icon = ({ icon, size, style, className, imageProps}: IconProps) => {
    const iconData = IconsConfig.icons[icon];
    const [currentTheme] = useTheme();
    
    let currentColor = currentTheme === "dark" ? "black" : "white";

    if (!iconData) {
        return null;
    }


    return (
        <motion.div className={iconVariants({ size, className })} style={{
            color: currentColor
        }} initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Image
                {...imageProps}
                src={iconData.src}
                alt={iconData.alt}
                style={{ objectFit: "contain" }}
                fill
            />
        </motion.div>
    );
}

export default Icon;