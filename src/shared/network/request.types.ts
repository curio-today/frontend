import { ContentEntry } from "@/shared/network/content.types";
import { Heading } from "../data.types";

/**
 * @deprecated use FetchOptions in types/fetch-options
 */
export type FetchOptions = {
    page?: number;
    limit: number;
    locale?: string;
    slug?: string;
    heading?: Heading;
} & Partial<Pick<ContentEntry, "_status">>
