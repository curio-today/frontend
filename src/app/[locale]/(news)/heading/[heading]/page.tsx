import ArticlesFeed from "@/components/pages/feed/ArticlesFeed";

export default async function CategoryPage({ params }: { params: Promise<{ locale: string, heading: string }>}) {
    const { locale, heading } = await params;

    return (
        <>
            <ArticlesFeed options={{
                limit: 5,
                locale: locale,
                heading: heading.charAt(0).toUpperCase() + heading.slice(1),
            }} />
        </>
    )
};