import { PropsWithChildren } from "react";

import { HTMLMotionProps} from "framer-motion";

export type GridProps = PropsWithChildren;
export type RowProps = PropsWithChildren<HTMLMotionProps<"div">>;