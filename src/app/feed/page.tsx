import { getPosts } from "@/lib/api/feed.lib";
import Post from "@/components/pages/feed/Post";

export default async function Feed() {
    const posts = await getPosts(5);

    return (
        <div>
            {posts?. map((post) => (
                <Post key={post.meta.slug} {...post} />
            ))}
        </div>
    )
}