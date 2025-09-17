import { ArticlesFeed } from "@/components/ui/ArticlesFeed";
import SwitchLanguageButton from "@/components/ui/SwitchLanguageButton";
import { generateHeadingMetadata } from "@/helpers/metadata";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

import styles from './page.module.css';

/**
 * @description Generates metadata for the Feed page
 * @returns Metadata for the Feed page
 */
export async function generateMetadata(): Promise<Metadata> {
    return generateHeadingMetadata({
        locale: await getLocale(),
        heading: 'Feed'
    });
}

export default async function Feed() {
    const locale = await getLocale();

    return (
        <>
            <div className={styles.button}>
                <SwitchLanguageButton />
            </div>
            {/* <ArticlesFeed locale={locale} maxArticlesPerRequest={15}/> */}
        </>
    )
}

    