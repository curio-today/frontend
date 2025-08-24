import ArticlesFeed from "@/components/ui/ArticlesFeed";
import { generateHeadingMetadata } from "@/helpers/metadata";
import { Heading } from "@/shared/data.types";
import { Metadata } from "next";
import { HeadingPageProps } from "./page.types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: HeadingPageProps): Promise<Metadata> {
    const { locale, heading } = await params;
    return generateHeadingMetadata({
        locale: locale,
        heading: heading as Heading,
    });
}

export default async function HeadingPage({ params }: HeadingPageProps) {
    const { locale, heading } = await params;
    const t = await getTranslations({ locale, namespace: 'Headings' });

    const translatedHeading = t(heading);

    const capitalizedHeading = translatedHeading.charAt(0).toUpperCase() + translatedHeading.slice(1);
   
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