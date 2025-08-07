"use client"

import { ButtonProps } from "../props";
import { Icon } from "@/components/ui/Icon";
import "./index.scss"

export const ReversedButton = (props: ButtonProps) => {
    return (
        <button className="reversed">
            {props.icon && (
                <Icon {...props.icon}></Icon>
            )}
            <h3>{props.text}</h3>
        </button>
    )
}