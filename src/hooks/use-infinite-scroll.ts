"use client";

import { useCallback, useState } from "react";

interface UseInfiniteScrollConfig<T> {
  fetchPage: (page: number) => Promise<T>;
  condition?: (data: T) => boolean;
  onAppend?: (prev: T | null, next: T) => T;
  startPage?: number;
}

export function useInfiniteScroll<T>({
  fetchPage,
  condition = () => true,
  onAppend = (_, next) => next,
  startPage = 1,
}: UseInfiniteScrollConfig<T>) {
  const [data, setData] = useState<T | null>(null);
  const [page, setPage] = useState(startPage);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useCallback(async (): Promise<T | null> => {
    if (!hasMore || isLoading) return null;
    setIsLoading(true);

    try {
      const next = await fetchPage(page);
      if (!condition(next)) {
        setHasMore(false);
        return null;
      }

      setData((prev) => onAppend(prev, next));
      setPage((p) => p + 1);
      return next;
    } catch (err) {
      console.error("❌ useInfiniteScroll error:", err);
      setHasMore(false);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [fetchPage, condition, hasMore, isLoading, page, onAppend]);

  return { data, hasMore, isLoading, loadMore };
}
