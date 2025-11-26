import styles from "./styles/card.module.css"

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Headline } from "@typography";
import { Container, ImageWithFocal, Span, Time } from "@primitives";
import { Article } from "@/lib/types/content/article";

export type ArticleCardProps = Article;

export const ArticleCard = ({ slug, title, cover, createdAt, subtitle, badge }: ArticleCardProps) => {
    const locale = useLocale();
    const t = useTranslations("Messages");

    return (
        <Link
            href={`/feed/${title}/${slug}`}
            passHref
            id={slug}
            className={styles.articleCard}
            tabIndex={0}
            aria-label={`${t("readFullArticle")} ${title}`}
            locale={locale}
        >
            <Headline>{title}</Headline>
            <Container className={styles.cover}>
                <ImageWithFocal focalPoint={{ 
                    x: cover.focalX,
                    y: cover.focalY
                 }} src={cover.url} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </Container>
            <Span className={styles.description}>
                <p className={styles.subtitle}>{subtitle}</p>
                <Time date={createdAt} locale={locale}/>
            </Span>
        </Link>
    );
}

export default ArticleCard;