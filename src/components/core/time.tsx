"use client"

import { Locale, useLocale } from "next-intl"
import { ComponentProps } from "react"

function formateDate(iso: string, locale: Locale, options?: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat(locale, {
        dateStyle: "full",
        timeStyle: "short",
        ...options
    }).format(new Date(iso)).toUpperCase()
}

export const Time = ({ iso, options, ...props }: { iso: string, options?: Intl.DateTimeFormatOptions } & Omit<ComponentProps<"time">, "children">) => {
    const locale = useLocale();

    return (
        <time {...props}>{formateDate(iso, locale, options)}</time>
    )
}