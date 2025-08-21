import { InfiniteScrollProps } from "./infinite-scroll.types";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

/**
 * InfiniteScroll
 *
 * A generic component for rendering an infinitely scrolling list.
 * It observes when the user scrolls near the bottom and triggers `loadMore`.
 *
 * **Note:** To use this component, you should handle data fetching and state
 * using the `useInfiniteScrolling` hook (or any similar infinite fetching logic).
 *
 * @template T - Type of the items in the data array.
 *
 * @param {Object} props
 * @param {(data: T[]) => React.ReactNode} props.children - Render function that receives the data array.
 * @param {T[]} props.data - The array of items to render.
 * @param {React.ReactNode} props.endMessage - Component or message to show when there are no more items to load.
 * @param {boolean} props.hasMore - Whether there are more items to load.
 * @param {() => void} props.loadMore - Callback to load the next batch of items.
 * @param {React.ReactNode} props.loader - Component or element to show while loading more items.
 *
 * @example
 * ```tsx
 * const { data, hasMore, loadMore } = useInfiniteScrolling(fetchPosts, { limit: 5 });
 *
 * <InfiniteScroll
 *   data={data}
 *   hasMore={hasMore}
 *   loadMore={loadMore}
 *   loader={<Loader />}
 *   endMessage={<div>That's all!</div>}
 * >
 *   {(posts) => (
 *     <Grid>
 *       {posts.map(post => <Post key={post.id} {...post} />)}
 *     </Grid>
 *   )}
 * </InfiniteScroll>
 * ```
 */
const InfiniteScroll = <T,>({children, data, endMessage, hasMore, loadMore, loader}: InfiniteScrollProps<T>) => {
    const loaderRef = useIntersectionObserver(loadMore, hasMore)

    return (
        <>
            {children(data)}
            <div ref={loaderRef} style={{ height: "40px" }}>
                {hasMore ? loader : endMessage}
            </div>
        </>
    )
}


export default InfiniteScroll;