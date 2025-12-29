"use client"

import { useIsMobile } from "@/hooks/use-mobile"

import { Logo as DefaultLogo } from "../ui/logo"
import ReactSnowfall from "react-snowfall" 


export const Snowfall = () => {
    const isMobile = useIsMobile();
    let snowflakeCount = isMobile ? 100 : 150;

    return (
        <ReactSnowfall style={{ zIndex: -5, position: "fixed" }} snowflakeCount={snowflakeCount} />
    )
}
