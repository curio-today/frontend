import { ApiRequest } from "@/lib/types/api/new-request";
import { useCallback, useState } from "react";

type FetchFunctionType<TReturnType> = {
    (options: ApiRequest): Promise<TReturnType[]>;
}

export const useInfiniteFetching = <T>(fetchFunction: FetchFunctionType<T>, { endpoint, query }: ApiRequest) => {
    const [data, setData] = useState<T[]>([])
    const [page, setPage] = useState<number>(query.page ?? 1);
    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return
        setLoading(true)
        const newData = await fetchFunction({ endpoint, query: {
            page,
            ...query
        } })
        if (newData && newData.length > 0) {
            setData(prev => [...prev, ...newData]);
            setPage(prev => prev + 1);
            setLoading(false);
        } else {
            setHasMore(false);
        }
    }, [loading, hasMore, fetchFunction, query, page])

    return { data, hasMore, loadMore, loading }
}

export default useInfiniteFetching;