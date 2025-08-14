import TextVariant from "./TextVariant";
import { HTMLAttributes, ReactNode } from "react";

export type TextProps = {
    children?: ReactNode;
    variant: TextVariant;
} & HTMLAttributes<HTMLElement>;

export default TextProps;