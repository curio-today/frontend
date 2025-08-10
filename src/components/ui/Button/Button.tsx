import styles from "./Button.module.scss"

import dynamic from "next/dynamic";

import { ButtonProps } from "./types/ButtonProps";

const Icon = dynamic(() => import("@/components/ui/Icon"));
const Text = dynamic(() => import("@/components/ui/Text"));

const Button = ({ icon, title, children,
                    mode = "normal",
                    iconSize = "medium",
                    textVariant = "p",
                    ...rest }: ButtonProps) => {
    return (
        <button className={styles[mode]} {...rest}>
            {icon && (
                <Icon icon={icon} size={iconSize}></Icon>
            )}
            {title && (
                <Text variant={textVariant}>{title}</Text>
            )}
            {children}
        </button>
    )
}

export default Button;