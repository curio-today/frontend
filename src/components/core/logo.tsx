"use client"

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { ComponentPropsWithoutRef, useEffect } from "react";
import { Memo } from "./memo";

export type LogoProps = ComponentPropsWithoutRef<"svg">;

/**
 * Must be use only with components from content folder
 */
export const Logo = ({ width, height, className, children, ...rest }: LogoProps) => {
    const { theme } = useTheme();
    let selectedColor: string = "";

    useEffect(() => {
        selectedColor = theme === "dark" ? "text-white" : "text-dark";
    })

    return (
        <svg className={cn(className, selectedColor)} width={width} height={height} viewBox="0 0 866 388" fill="none" xmlns="http://www.w3.org/2000/svg">
            {children}
        </svg>
    )
}

export const LogoWithMemo = ({ children, className, width = 100, ...rest }: LogoProps) => {
    return (
      <div className={cn("flex justify-start flex-row gap-5", className)}>
        <Logo width={width} {...rest}>
          {children}
        </Logo>
        <div className="hidden md:flex items-center justify-center">
          <Memo />
        </div>
      </div>
    )
}