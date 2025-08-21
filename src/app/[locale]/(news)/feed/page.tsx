import ArticlesFeed from "@/components/pages/feed/ArticlesFeed";
import { getLocale } from "next-intl/server";

export async function Feed() {
    const locale = await getLocale();

    return (
        <>
            <ArticlesFeed options={{
                limit: 5,
                locale: locale,
            }} />
        </>
    )
}

export default Feed;