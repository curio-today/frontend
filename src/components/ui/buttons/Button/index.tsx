"use client"

import "./index.scss"
import { Icon } from "@/components/Icon";
import { ButtonProps } from "../props";

// TODO: add tooltip wrapper

export const Button = ({hasIcon, text}: ButtonProps) => {
    return (
        <button className="normal">
            {hasIcon && (
                <Icon></Icon>
            )}
            <h3>{text}</h3>
        </button>
    )
}