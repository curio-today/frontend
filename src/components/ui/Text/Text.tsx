import styles from "./Text.module.scss"
import { TextProps } from "./types/TextProps";

const Text = ({ variant = "p", children}: TextProps) => {
    const Tag = variant;

    return (
        <Tag className={styles[variant]}>{children}</Tag>
    )
}

export default Text;