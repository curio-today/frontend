import { motion, HTMLMotionProps } from "framer-motion";
import { Container, ContainerProps } from "@primitives";
import { PropsWithChildren } from "react";

export type GridProps = PropsWithChildren<{
    columnAmount?: number;
    rowsAmount?: number;
}>;

type RowProps = {
    columnSpan: number;
    rowSpan: number;
} & ContainerProps

type MotionRowProps = RowProps & HTMLMotionProps<"div">;


export const Grid = ({ columnAmount = 6, rowsAmount = 4, children }: GridProps) => (
    <Container className={`grid grid-cols-${columnAmount} grid-rows-${rowsAmount} gap-[clamp(1rem,1vw,5rem)]`}>
        {children}
    </Container>
)


const Row = ({ columnSpan, rowSpan, children, ...rest}: RowProps) => (
    <Container className={`col-span-${columnSpan} row-span-${rowSpan}`} {...rest}>
        {children}
    </Container>
)

const MotionRow = ({ columnSpan, rowSpan, children, ...rest}: MotionRowProps) => (
    <motion.div className={`col-span-${columnSpan} row-span-${rowSpan}`} {...rest}>
        {children}
    </motion.div>
)

Grid.Row = Row;
Grid.MotionRow = MotionRow;

export default Grid;