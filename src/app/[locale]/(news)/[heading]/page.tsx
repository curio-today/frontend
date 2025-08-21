import ArticlesFeed from "@/components/pages/feed/ArticlesFeed";

export default async function CategoryPage({ params }: { params: { locale: string, heading: string } }) {
    return (
        <>
            <ArticlesFeed options={{
                limit: 5,
                locale: params.locale,
                heading: params.heading.charAt(0).toUpperCase() + params.heading.slice(1),
            }} />
        </>
    )
};