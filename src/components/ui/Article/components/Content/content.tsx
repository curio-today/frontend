import styles from "./content.module.css"

import { ComponentProps } from "react";

type ContentProps = ComponentProps<"section">;

const Content = ({ id = "content", children, ...rest}: ContentProps) => {
    return (
        <section className={styles.content} id={id} {...rest}>{children}</section>
    )
}

export default Content;