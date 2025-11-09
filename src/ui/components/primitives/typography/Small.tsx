import styles from "./styles/typography.module.css"
import { PropsWithChildren } from "react";

export const Small = ({ children, ...rest }: PropsWithChildren) => {
    return <small className={styles.p} {...rest}>{children}</small>
}

export default Small;