import { PaginatedContent } from "@/types/api/paginated-content";
import {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export type InfiniteScrollProps<T> = {
  fetchPage: (page: number) => Promise<PaginatedContent<T>>;
  onAppend: (
    prev: PaginatedContent<T> | null,
    next: PaginatedContent<T>
  ) => PaginatedContent<T>;
  children: (data: PaginatedContent<T> | null) => ReactNode;
  condition: (data: PaginatedContent<T>) => boolean;
  loader?: ReactNode;
  ender?: ReactNode;
};

/**
 * Universal InfiniteScroll component for paginated APIs
 *
 * Example:
 * ```tsx
 * <InfiniteScroll
 *   fetchPage={fetchArticles}
 *   condition={data => data.docs.length > 0}
 *   onAppend={(prev, next) => ({
 *     ...next,
 *     docs: [...(prev?.docs ?? []), ...next.docs],
 *   })}
 * >
 *   {data => (
 *     <Grid>
 *       {data?.docs.map(a => (
 *         <Grid.Row key={a.id}><ArticleCard {...a} /></Grid.Row>
 *       ))}
 *     </Grid>
 *   )}
 * </InfiniteScroll>
 * ```
 */
export function InfiniteScroll<T>({
  fetchPage,
  condition,
  loader,
  ender,
  children,
  onAppend,
}: PropsWithChildren<InfiniteScrollProps<T>>) {
  const [data, setData] = useState<PaginatedContent<T> | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (!hasMore) return;

    const next = await fetchPage(page);
    if (next && condition(next)) {
      setData((prev) => onAppend(prev, next));
      setPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }
  }, [fetchPage, condition, hasMore, page, onAppend]);

  useEffect(() => {
    fetchPage(1).then((first) => {
      if (first && condition(first)) {
        setData(first);
        setPage(2);
      } else {
        setHasMore(false);
      }
    });
  }, [fetchPage, condition]);

  // observer for infinite scroll
  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 1 }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <>
      {children(data)}
      <div
        ref={loaderRef}
        style={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {hasMore ? loader ?? <DefaultLoader /> : ender ?? <DefaultEnder />}
      </div>
    </>
  );
}

function DefaultLoader() {
  return <div style={{ color: "#888" }}>Загрузка...</div>;
}

function DefaultEnder() {
  return <div style={{ color: "#aaa" }}>Это всё 🎉</div>;
}

export default InfiniteScroll;
