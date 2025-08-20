import { ContentEntry } from "@/shared/network/content.types";

export type FetchOptions = {
    page?: number;
    limit: number;
    locale?: string;
    slug?: string;
} & Partial<Pick<ContentEntry, "_status">>
