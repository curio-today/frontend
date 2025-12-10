"use client"

import { Locale, useLocale } from "next-intl"
import { ComponentProps } from "react"

function formateDate(iso: string, locale: Locale): string {
    return new Intl.DateTimeFormat(locale, {
        dateStyle: "full",
        timeStyle: "short"
    }).format(new Date(iso)).toUpperCase()
}

export const Time = ({ iso, ...props }: { iso: string } & Omit<ComponentProps<"time">, "children">) => {
    const locale = useLocale();
    
    return (
        <time {...props}>{formateDate(iso, locale)}</time>
    )
}