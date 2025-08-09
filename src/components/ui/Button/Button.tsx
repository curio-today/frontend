import styles from "./Button.module.scss"

import Text from "@/components/ui/Text"
import dynamic from "next/dynamic";

import { ButtonProps } from "./types/ButtonProps";

const Icon = dynamic(() => import("@/components/ui/Icon"));

const Button = ({ icon, title, children, mode = "normal" }: ButtonProps) => {
    return (
        <button className={styles[mode]}>
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