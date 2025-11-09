import styles from "./Text.module.scss"
import { TextProps } from "./types/TextProps";

/**
 * @deprecated use directly Text component from "common" folder
 */
const Text = ({ variant = "p", children, ...rest}: TextProps) => {
    const Tag = variant;

    return (
        <Tag className={styles[variant]} {...rest}>{children}</Tag>
    )
}

export default Text;