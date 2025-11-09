import styles from "./styles/paragraph.module.scss"
import { PropsWithChildren } from "react";

export const Small = ({ children, ...rest }: PropsWithChildren) => {
    return <small className={styles.p} {...rest}>{children}</small>
}

export default Small;