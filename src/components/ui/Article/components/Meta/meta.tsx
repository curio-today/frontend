import styles from "./meta.module.css"

import { ComponentProps, PropsWithChildren } from "react";

type MetaProps = PropsWithChildren & ComponentProps<"section">;

const Meta = ({ children }: MetaProps) => {
    return (
        <section id={styles.meta}>
            {children}
        </section>
    )
}

export default Meta;