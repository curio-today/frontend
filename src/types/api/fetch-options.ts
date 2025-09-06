import { Locale } from "next-intl";

export type FetchOptions = {
    locale: Locale;
    limit: number;

    [k: string]: any; 
}
