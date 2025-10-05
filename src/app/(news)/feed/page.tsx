import { ArticlesFeed } from "@/components/ui/ArticlesFeed";
import SwitchLanguageButton from "@/components/ui/SwitchLanguageButton";
import { generateHeadingMetadata } from "@/helpers/metadata";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import styles from './page.module.css';
import { getPageMetadata } from "@/utils/metadata/get-page-metadata";
import { getPageMetadataWithTranslation } from "@/utils/metadata/get-page-metadata-with-translation";

export async function generateMetadata(): Promise<Metadata> {
    return getPageMetadataWithTranslation("Metadata.pages.feed")
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

    