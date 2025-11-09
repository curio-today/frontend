import styles from "./styles/text.module.css"
import { PropsWithChildren } from "react";

export type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "a" | "small" ;

export type TextProps = PropsWithChildren<{
    variant: TextVariant;
}>;

export const Text = ({ variant = "p", children, ...rest }: TextProps) => {
    const TextTag = variant;

    return <TextTag className={styles[variant]} {...rest}>{children}</TextTag>
}

export default Text;