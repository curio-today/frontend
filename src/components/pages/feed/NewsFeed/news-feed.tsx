import Grid from "@/components/layout/Grid";
import { getPosts } from "@/lib/api/feed.lib";
import Post, { PostClient } from "@/components/pages/feed/Post";

export const NewsFeed = async () => {
    const posts = await getPosts({
        endpoint: "posts",
        page: 1,
        limit: 5,
        _status: "published"
    })

    if (!posts) {
       return null;
    }

    return (
        <Grid>
            <Grid.Row>
                <Post {...posts[0]} />
                <Post {...posts[1]} />
            </Grid.Row>
            <Grid.Row>
                <Post {...posts[2]} />
                <Post {...posts[3]} />
                <Post {...posts[4]} />
            </Grid.Row>
            <Grid.Row>
                {posts.slice(5).map((post) =>
                    <PostClient key={post.meta.slug} {...post} />
                )}
            </Grid.Row>
        </Grid>
    )
}


export default NewsFeed;