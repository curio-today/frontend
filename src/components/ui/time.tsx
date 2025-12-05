import { Locale } from "next-intl"
import { ComponentProps } from "react"

    function formateDate(iso: string, locale: Locale): string {
        return new Intl.DateTimeFormat(locale, {
            dateStyle: "full",
            timeStyle: "short"
        }).format(new Date(iso)).toUpperCase()
    }

export const Time = ({ locale, iso, ...props }: { locale: Locale, iso: string } & Omit<ComponentProps<"time">, "children">) => {
    return (
        <time {...props}>{formateDate(iso, locale)}</time>
    )
}