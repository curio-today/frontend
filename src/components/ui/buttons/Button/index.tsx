"use client"

import "./index.scss"
import { Icon } from "@/components/ui/Icon";
import { ButtonProps } from "../props";

// TODO: add tooltip wrapper

export const Button = ({icon, text}: ButtonProps) => {
    return (
        <button className="normal">
            {icon && (
                <Icon {...icon}></Icon>
            )}
            <h3>{text}</h3>
        </button>
    )
}