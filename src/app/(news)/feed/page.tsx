import { ArticlesFeed } from "@/components/ui/ArticlesFeed";
import SwitchLanguageButton from "@/components/ui/SwitchLanguageButton";
import { generateHeadingMetadata } from "@/helpers/metadata";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import styles from './page.module.css';
import { getPageMetadata } from "@/utils/metadata/get-page-metadata";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations({
        locale,
        namespace: "Metadata.pages.Feed" // localization/messages/*.json
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

export default async function Feed() {
    return (
        <>
            <div className={styles.button}>
                <SwitchLanguageButton />
            </div>
            {/* <ArticlesFeed locale={locale} maxArticlesPerRequest={15}/> */}
        </>
    )
}

    