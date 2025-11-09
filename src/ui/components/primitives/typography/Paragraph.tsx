import styles from "./styles/typography.module.css"
import { PropsWithChildren } from "react";

export const Paragraph = ({ children, ...rest }: PropsWithChildren) => {
    return <p className={styles.p} {...rest}>{children}</p>
}

export default Paragraph;