"use client"

import "./index.scss"
import { Icon } from "@/components/ui/Icon";
import { ButtonProps } from "@/shared/props/ButtonProps";

// TODO: add tooltip wrapper

export const Button = ({icon, text, children, ...props}: ButtonProps) => {
    return (
        <button className="normal" {...props}>
            {icon && (
                <Icon {...icon} style={{
                    width: 32,
                    height: 32,
                }}></Icon>
            )}
            {text && (
                <p>{text}</p>
            )}
            {children}
        </button>
    )
}