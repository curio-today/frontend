import { Heading } from "@/shared/data.types";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type GenerateMetadataOptions = {
    locale: string;
    heading: Heading;
}

/**
 * Generates metadata for a given locale and heading.
 * @description This function fetches translations for the specified locale and heading,
 * @param locale {string} - locale code, e.g. 'en', 'fr', etc.
 * @param heading {Heading} - heading, e.g. 'Amazes', 'Informs', etc.
 * @returns Promise<Metadata>
 * @example
 * generateHeadingMetadata({ locale: 'en', heading: 'Amazes' })
 * .then(metadata => console.log(metadata));
 */
export async function generateHeadingMetadata({ locale, heading }: GenerateMetadataOptions): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    const headingsTranslation = await getTranslations({ locale, namespace: 'Headings' });
   
    return {
        title: `Curio.today — ${(headingsTranslation(heading.toLowerCase()))}`,
        description: t('description'),
        keywords: t('keywords'),
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://curio.today/'),
        openGraph: {
            title: "Curio.today",
            description: t('description'),
            images: [t('openGraph.images.0')],
            locale: locale,
            siteName: "Curio.today",
        }
    };
}