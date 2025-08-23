import ArticlesFeed from "@/components/pages/feed/ArticlesFeed";
import { Heading } from "@/shared/data.types";
import { getLocale } from "next-intl/server";

export default async function HeadingPage({ params }: { params: Promise<{ locale: string, heading: Heading }>}) {
    const { locale, heading } = await params;

    const capitalizedHeading = heading.charAt(0).toUpperCase() + heading.slice(1);

    return (
        <>
            <ArticlesFeed options={{
                limit: 5,
                locale: locale,
                heading: capitalizedHeading as Heading,
            }} />
        </>
    )
};