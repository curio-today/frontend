import ArticlesFeed from "@/components/pages/feed/ArticlesFeed";
import { getLocale } from "next-intl/server";

export default async function Feed() {
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

