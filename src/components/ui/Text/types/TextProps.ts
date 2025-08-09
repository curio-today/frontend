import TextVariant from "./TextVariant";
import { ReactNode } from "react";

export type TextProps = {
    children: ReactNode;
    variant: TextVariant;
}

export default TextProps;