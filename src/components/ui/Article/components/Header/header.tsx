import styles from "./header.module.css"

import { ComponentProps, PropsWithChildren } from "react";

export type HeaderProps = PropsWithChildren & ComponentProps<"header">;

const Header = ({ children, ...rest }: HeaderProps) => {
    return (
        <header className={styles.header} {...rest}>
            {children}
        </header>
    )
}

export default Header;