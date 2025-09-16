import styles from "./styles.module.css"

import ImageWithFocal from "@/components/ui/ImageWithFocal";
import { PublishedDate } from "../PublishedDate";
import Link from "next/link";
import { Article } from "@/types/content/article";
import { useLocale, useTranslations } from "next-intl";
import { Heading } from "@/types/content/heading";
import { Slug } from "@/types/content/slug";

function createArticleUrl(heading: Heading, slug: Slug): string {
    return `/feed/${heading}/${slug}`
}

export const ArticleCard = ({ slug, title, cover, createdAt, subtitle, badge }: Article) => {
    const locale = useLocale();
    const t = useTranslations("Messages");

    return (
        <Link
            href={createArticleUrl(badge.name.toLowerCase(), slug)}
            passHref
            id={slug}
            className={styles.articleCard}
            tabIndex={0}
            aria-label={`${t("readFullArticle")} ${title}`}
            locale={locale}
        >
            <h1 className={styles.headline}>{title}</h1>
            <div className={styles.cover}>
                <ImageWithFocal focalPoint={{ 
                    x: cover.focalX,
                    y: cover.focalY
                 }} src={cover.url} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <span className={styles.description}>
                <p className={styles.subtitle}>{subtitle}</p>
                <PublishedDate date={createdAt} locale={locale}/>
            </span>
        </Link>
    );
}