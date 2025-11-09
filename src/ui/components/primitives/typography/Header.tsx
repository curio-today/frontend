import styles from "./styles/typography.module.css"

import { PropsWithChildren } from "react";

export type HeaderVarinat = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeaderProps = PropsWithChildren<{
    variant: HeaderVarinat;
}>;

export const Header = ({ variant = "h1", children, ...rest }: HeaderProps) => {
    const TextTag = variant;

    return <TextTag className={styles[variant]} {...rest}>{children}</TextTag>
}

export default Header;