"use client"

import { ButtonProps } from "../props";
import { Icon } from "@/components/Icon";
import "./index.scss"

export const ReversedButton = (props: ButtonProps) => {
    return (
        <button className="reversed">
            {props.hasIcon && (
                <Icon></Icon>
            )}
            <h3>{props.text}</h3>
        </button>
    )
}