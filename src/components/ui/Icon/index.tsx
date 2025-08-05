"use client"

import { IconProps } from "./props";
import Image from "next/image";

import "./index.scss"


const IconMap = {
    clock: "icons/clock.svg",
    external: "icons/external.svg",
    sun: "icons/sun.svg",
    moon: "icons/moon.svg",
}


export const Icon = ({ name, ...props}: IconProps) => {
    return (
        <div className="icon-wrapper">
            <Image
                src={IconMap[name]}
                alt={name}
                layout="fill"
                objectFit="contain"
                priority
                {...props}
            />
        </div>
    );
}