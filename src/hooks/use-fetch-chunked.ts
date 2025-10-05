import { AvailableEndpoints } from "@/types/api/available-endpoints";
import fetchChunked, { ChunkedParams } from "@/utils/api/fetch/fetch-chunked";
import { useState } from "react";

type Params<TData> = {
    chunked: ChunkedParams,
};
type ReturnParams<TData> = {
    allData: TData | null,
    loadedData: TData | null,
    currentPage: number,
    isLoading: boolean,
    hasMore: boolean,
    loadMore: () => TData | null,
}

/**
 * fetch -> 
 * @returns bunch of data 
 */
export function useFetchChunked<TResponseData>({ chunked }: Params<TResponseData>): ReturnParams<TResponseData> {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loadedData, setLoadedData] = useState<TResponseData | null>();
    const allData
    const loadMore = () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);

        const loadedData = await fetchChunked({...chunked});

        if (loadedData) {
            
            setIsLoading(false);
        }

    }
    
    return {
        loadedData: data,
        currentPage: 
    }
}
