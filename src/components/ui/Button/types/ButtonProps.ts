import { TextProps } from "@/shared/props/TextProps";
import { ButtonHTMLAttributes } from "react";
import { ButtonType } from "./ButtonType";
import IconType from "@/components/ui/Icon/types/IconType";
import { Size } from "@/types/Size";


export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof TextProps> & {
    icon?: IconType;
    iconSize?: Size;
    mode?: ButtonType;
};

