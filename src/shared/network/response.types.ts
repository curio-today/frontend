import { Asset } from "@/shared/network/asset.types";

export type ApiResponse<Asst extends Asset> = {
    docs: Asst[],
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