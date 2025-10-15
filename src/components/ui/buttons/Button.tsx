import { HTMLMotionProps, motion } from "framer-motion";
import styles from "./button.module.css";
import { cva, VariantProps } from "class-variance-authority";
import Icon, { IconProps } from "../Icon";
import { PropsWithChildren } from "react";
import { IconVariant } from "@/types/content/icon";

const buttonVariants = cva("button", {
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
    label?: string,
    icon?: IconProps | IconVariant, 
    mode?: VariantProps<typeof buttonVariants>["mode"];
} & HTMLMotionProps<"button">;

/**
 * Custom animated button component that supports label, icon and children content.
 * 
 * @component
 * @example
 * // With label only
 * <Button label="Click me" />
 * 
 * @example
 * // With icon only
 * <Button icon={{ name: 'home' }} />
 * 
 * @example
 * // With both label and icon
 * <Button label="Home" icon={{ name: 'home' }} variant="fill" />
 * 
 * @example
 * // With icon variant
 * <Button label="Home" icon="home" />
 * 
 * @param {string} [label] - Text label displayed in the button
 * @param {IconProps} [icon] - Icon properties displayed before the label
 * @param {VariantProps<typeof buttonVariants>["mode"]} [mode] - Button style variant: 'normal', 'outline', 'fill', or 'noBorder'
 * @param {ReactNode} [children] - Additional content rendered inside the button
 * @returns {ReactElement} Animated button element
 */
export const Button = ({ label, icon, mode = "normal", children, ...buttonProps }: PropsWithChildren<ButtonProps>) => {
    const processedIcon: IconProps | undefined = typeof icon === "string" 
        ? { icon: icon } 
        : icon;

    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            className={buttonVariants({mode})}
            {...buttonProps}
        >
            {processedIcon && <Icon size="medium"{...processedIcon}/>}
            {label && <p>{label}</p>}
            {children}
        </motion.button >
    )
}

export default Button;