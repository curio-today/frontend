import { TextProps, TextVariant } from "@/components/ui/Text";
import { ButtonHTMLAttributes } from "react";
import { ButtonType } from "./ButtonType";
import IconType from "@/components/ui/Icon/types/IconType";
import { Size } from "@/types/Size";


export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Omit<TextProps, "children">> & {
    icon?: IconType;
    iconSize?: Size;
    textVariant: TextVariant;
    mode?: ButtonType;
};

