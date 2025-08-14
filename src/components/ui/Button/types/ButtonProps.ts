import { TextProps } from "@/components/ui/Text";
import { ButtonHTMLAttributes } from "react";
import { ButtonType } from "./ButtonType";
import IconType from "@/components/ui/Icon/types/IconType";
import { Size } from "@/shared/data.types";


export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Partial<TextProps> & {
    icon?: IconType;
    iconSize?: Size;
    mode?: ButtonType;
};

