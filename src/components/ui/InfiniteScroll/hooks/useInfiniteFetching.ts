import { useCallback, useState } from "react";
import { FetchOptions } from "@/shared/network";

export const useInfiniteFetching = <T, >(fetchFunction: {(options: FetchOptions): Promise<T[] | null>}, options: FetchOptions) => {
    const [data, setData] = useState<T[]>([])
    const [, setPage] = useState(options.page)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return
        setLoading(true)
        const newData = await fetchFunction({...options})
        if (newData && newData.length > 0) {
            if (newData.length === 0) {
                setHasMore(false)
            } else {
                setData(prev => [...prev, ...newData])
                setPage(prev => prev + 1)
            }
            setLoading(false)
        }
    }, [loading, hasMore, fetchFunction, options])

    return { data, hasMore, loadMore, loading }
}
