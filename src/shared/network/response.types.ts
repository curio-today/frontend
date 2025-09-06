import { ContentEntry } from "@/shared/network/content.types";

/**
 * @depracated use PaginatedContent instead
 */
export type PaginatedContentResponse<Entry extends ContentEntry> = {
    docs: Entry[] | [],
    totalDocs: number
    limit: number,
    totalPages: number,
    page: number,
    pagingCounter: number,
    hasPrefPage: boolean,
    hasNextPage: boolean,
    prevPage: number | null,
    nextPage: number | null
}