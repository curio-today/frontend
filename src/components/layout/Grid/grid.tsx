import styles from "./grid.module.css"

import { GridProps, RowProps } from "./grid.types";

const Row = ({ children, id }: RowProps) => <div className={styles.row} id={id}>{children}</div>

const Grid = ({ children }: GridProps) => {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}

Grid.Row = Row;

export default Grid;