import styles from "./grid.module.css"
import { motion } from "framer-motion";

import { GridProps, RowProps } from "./grid.types";

const Row = ({ children, id, ...rest}: RowProps) =>
    <motion.div
        className={styles.row}
        id={id}
        {...rest}
    >
            {children}
    </motion.div>

const Grid = ({ children }: GridProps) => {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}

Grid.Row = Row;

export default Grid;