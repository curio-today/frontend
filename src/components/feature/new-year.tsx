"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import Image, { ImageProps } from "next/image";
import ReactSnowfall from "react-snowfall" 

export const Snowfall = () => {
    const isMobile = useIsMobile();
    let snowflakeCount = isMobile ? 100 : 150;

    return (
        <ReactSnowfall style={{ zIndex: -5, position: "fixed" }} snowflakeCount={snowflakeCount} />
    )
}

export const ChristmasWreath = (props: Omit<ImageProps, "src" | "alt">) => {
    return (
        <Image 
            src="/img/christmas-wreath.png"
            alt="Wreath"
            {...props}
        />

    )
}