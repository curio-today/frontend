import styles from "./Button.module.scss"

import dynamic from "next/dynamic";

import { ButtonProps } from "./types/ButtonProps";

const Icon = dynamic(() => import("@/components/ui/Icon"));
const Text = dynamic(() => import("@/components/ui/Text"));

const Button = ({ icon, title, children, mode = "normal", ...rest }: ButtonProps) => {
    return (
        <button className={styles[mode]} {...rest}>
            {icon && (
                <Icon icon={icon} size="medium"></Icon>
            )}
            {title && (
                <Text variant="p">{title}</Text>
            )}
            {children}
        </button>
    )
}

export default Button;