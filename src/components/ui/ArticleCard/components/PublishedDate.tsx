import { useLocale } from "next-intl";
import { ComponentProps } from "react";

type Props = {
    date: Date | string;
} & ComponentProps<"time">;


const PublishedDate = ({ date, ...rest }: Props) => {
    const locale = useLocale();

    if (typeof date === "string") {
        date = new Date(date);
    }
    
    return (
        <time dateTime={date.toDateString()}{...rest}>
            {date.toLocaleDateString(locale, {
                day: "numeric",
                month: "long",
                year: "numeric",
            })}
        </time>
    )
}

export default PublishedDate;