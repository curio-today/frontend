import styles from "./meta.module.css"

import { ComponentProps, PropsWithChildren } from "react";

type MetaProps = PropsWithChildren & ComponentProps<"section">;

const Meta = ({ children, ...rest}: MetaProps) => {
    return (
        <section className={styles.meta} {...rest}>
            {children}
        </section>
    )
}

export default Meta;