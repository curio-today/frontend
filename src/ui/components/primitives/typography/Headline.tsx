import styles from "./styles/typography.module.css"

import { PropsWithChildren } from "react";

export const Headline = ({ children, ...rest }: PropsWithChildren) => {
    return <h1 className={styles.h1} {...rest}>{children}</h1>
}

export default Headline;