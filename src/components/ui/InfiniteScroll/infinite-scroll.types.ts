import { ReactNode } from "react";

export type InfiniteScrollProps<T> = {
    data: T[],
    hasMore: boolean,
    loadMore: () => void,
    children: (data: T[]) => ReactNode,
    loader?: ReactNode,
    endMessage?: ReactNode,
}