"use client"

import './index.scss'
import { Icon } from "@/components/Icon";

type ButtonProps = {
    text: string;
    hasIcon?: boolean;
}

// TODO: add tooltip wrapper

export const Button = ({hasIcon, text}: ButtonProps) => {
    return (
        <button className="button">
            {hasIcon && (
                <Icon></Icon>
            )}
            {text}
        </button>
    )
}