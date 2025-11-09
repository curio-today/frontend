import styles from "./styles/paragraph.module.scss"
import { PropsWithChildren } from "react";

export const Paragraph = ({ children, ...rest }: PropsWithChildren) => {
    return <p className={styles.p} {...rest}>{children}</p>
}

export default Paragraph;