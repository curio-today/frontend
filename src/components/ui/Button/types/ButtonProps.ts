import { TextProps } from "@/shared/props/TextProps";
import { ButtonHTMLAttributes } from "react";
import { ButtonType } from "./ButtonType";
import IconType from "@/components/ui/Icon/types/IconType";


export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof TextProps> & {
    icon?: IconType;
    mode?: ButtonType;
};

