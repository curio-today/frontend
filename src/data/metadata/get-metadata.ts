import { METADATA_DELIMITER, METADATA_PREFIX } from "@/constants/metadata";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { cache } from "react";

export const getMetadata = cache(async (page: string, metadata?: Metadata): Promise<Metadata> => {
    const locale = await getLocale();
    const t = await getTranslations(`Metadata.${page.toLowerCase()}`);
    const pageTitle = t("title");

    const title = `${METADATA_PREFIX} ${METADATA_DELIMITER} ${pageTitle}`;
    const description = t("description");
    const keywords = t("keywords");

    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            siteName: "Curio.",
            locale,
        },
        ...metadata,
    }
})
