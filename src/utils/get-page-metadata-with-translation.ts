import { getLocale, getTranslations } from "next-intl/server";
import { getPageMetadata } from "./metadata/get-page-metadata";
import { AvailableRoutePath } from "@/types/navigation";

/**
 * Return page metadata with translation using getTranslations function
 * @param route {AvailableRoutePath} website route to get metadata
 * @returns 
 */
export async function getPageMetadataWithTranslation(route: AvailableRoutePath): Promise<ReturnType<typeof getPageMetadata> | null> {
    const locale = await getLocale();
    try {
        const t = await getTranslations({
            locale,
            namespace: `Metadata.pages.${route.toLowerCase()}`,
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
    catch (e) {
        console.error(e);
        return null;
    }
}