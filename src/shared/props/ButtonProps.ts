import { IconProps } from "@/shared/props/IconProps";
import { TextProps } from "@/shared/props/TextProps";
import { ButtonHTMLAttributes } from "react";


export type ButtonProps =
    & Partial<TextProps>
    & { icon?: IconProps, mode?: "normal" | "reversed" }
    & ButtonHTMLAttributes<HTMLButtonElement>

