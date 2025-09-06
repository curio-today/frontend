export type PaginatedContent<T> = {
    docs: T[] | [];
    
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