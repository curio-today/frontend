import styles from "./meta.module.css"

import { ComponentProps, PropsWithChildren } from "react";

type MetaProps = PropsWithChildren & ComponentProps<"section">;

const Meta = ({ children, id = "meta", ...rest}: MetaProps) => {
    return (
        <section className={styles.meta} id={id} {...rest}>
            {children}
        </section>
    )
}


export default Meta;