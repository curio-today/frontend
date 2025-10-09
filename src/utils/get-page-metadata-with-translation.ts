import { getLocale, getTranslations } from "next-intl/server";
import { getPageMetadata } from "./metadata/get-page-metadata";

export async function getPageMetadataWithTranslation(namespace: string) {
    const locale = await getLocale();
    const t = await getTranslations({
        locale,
        namespace: namespace // localization/messages/*.json
    })

    return getPageMetadata({
        pageName: t("name"),
        metadata: {
            description: t("description"),
            keywords: t("keywords"),
            locale: locale
        }
    })
}