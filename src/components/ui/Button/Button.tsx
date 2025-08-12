import styles from "./Button.module.scss"

import dynamic from "next/dynamic";
import clsx from "clsx";

import { ButtonProps } from "./types/ButtonProps";

const Icon = dynamic(() => import("@/components/ui/Icon"));
const Text = dynamic(() => import("@/components/ui/Text"));

const Button = ({ icon, title, children,
                    mode = "normal",
                    iconSize = "medium",
                    titleVariant = "p",
                    className,
                    ...rest }: ButtonProps) => {
    return (
        <button className={clsx(styles[mode], className)} {...rest}>
            {icon && (
                <Icon icon={icon} size={iconSize}></Icon>
            )}
            {title && (
                <Text variant={titleVariant}>{title}</Text>
            )}
            {children}
        </button>
    )
}

export default Button;