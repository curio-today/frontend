import { formatArticleDateWithLocale } from "@utils/formaters/formatArticle";
import { ComponentProps } from "react";

export type TimeProps = {
    date: string;
    locale: string;
} & ComponentProps<"time">;


export const Time = ({ date, locale, ...rest }: TimeProps) => {
    const formatedDate = formatArticleDateWithLocale({ 
        date,
        locale
    })
    
    return (
        <time dateTime={date}{...rest}>
            {formatedDate}
        </time>
    )
}

export default Time;