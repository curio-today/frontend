import ArticlesFeed from "@/components/ui/ArticlesFeed";
import { generateHeadingMetadata } from "@/helpers/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


type PageProps = {
    params: Promise<{ locale: string, heading: string }>;
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale, heading } = await params;

    return generateHeadingMetadata({
        locale: locale,
        heading: heading,
    });
}

export default async function HeadingPage({ params }: PageProps) {
    const { locale, heading } = await params;
    const t = await getTranslations({ locale, namespace: 'Headings' });

    const translatedHeading = t(heading);
   
    return (
        <>
            {/* <ArticlesFeed locale={locale} heading={translatedHeading} /> */}
        </>
    )
};
