import { formatArticleDateWithLocale } from "@/lib/utils/formaters/formatArticle";
import { ComponentProps } from "react";

type Props = {
    date: string;
    locale: string;
} & ComponentProps<"time">;


export const PublishedDate = ({ date, locale, ...rest }: Props) => {
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