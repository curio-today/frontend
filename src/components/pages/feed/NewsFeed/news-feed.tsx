"use client"

import InfiniteScroll, { useInfiniteFetching } from "@/components/ui/InfiniteScroll";
import { getPosts } from "@/lib/api/feed.lib";
import Post, { PostClient, PostProps } from "@/components/pages/feed/Post";
import Grid from "@/components/layout/Grid";


export const NewsFeed = () => {
    const { data, hasMore, loadMore } = useInfiniteFetching(getPosts, {
        endpoint: "posts",
        page: 1,
        limit: 5,
        _status: "published"
    })

    return (
        <InfiniteScroll<PostProps> data={data} hasMore={hasMore} loadMore={loadMore}>
            {(posts) => (
                <Grid>
                    {posts.map((post, index) => (
                        <Grid.Row key={post.meta.slug}>
                            {index < 2 ? <Post {...post} /> : <PostClient {...post} />}
                        </Grid.Row>
                    ))}
                </Grid>
            )}
        </InfiniteScroll>
    )
}


export default NewsFeed;