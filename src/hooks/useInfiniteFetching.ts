import { FetchOptions } from "@/types/api/fetch-options";
import { useCallback, useState } from "react";

export const useInfiniteFetching = <T>(fetchFunction: { (options: FetchOptions): Promise<T[]> }, options: FetchOptions) => {
    const [data, setData] = useState<T[]>([])
    const [page, setPage] = useState<number>(options.page ?? 1);
    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return
        setLoading(true)
        const newData = await fetchFunction({ ...options, page })
        if (newData && newData.length > 0) {
            setData(prev => [...prev, ...newData]);
            setPage(prev => prev + 1);
            setLoading(false);
        } else {
            setHasMore(false);
        }
    }, [loading, hasMore, fetchFunction, options, page])

    return { data, hasMore, loadMore, loading }
}
