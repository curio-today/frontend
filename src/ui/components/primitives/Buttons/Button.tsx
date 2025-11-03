import styles from "./button.module.css";
import { cva, VariantProps } from "class-variance-authority";
import Icon, { IconProps } from "../Icon";
import { ComponentProps, PropsWithChildren } from "react";
import { IconVariant } from "@/lib/types/content/icon";

const buttonVariants = cva("button", {
    variants: {
        mode: {
            normal: styles["btn-normal"],
            outline: styles["btn-outline"],
            fill: styles["btn-fill"],
            noBorder: styles["btn-no-border"],
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
} & ComponentProps<"button">;

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
        <button
            className={buttonVariants({mode})}
            {...buttonProps}
        >
            {processedIcon && <Icon size="medium" {...processedIcon}/>}
            {label && <p>{label}</p>}
            {children}
        </button >
    )
}

export default Button;