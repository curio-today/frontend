import styles from "./article-card.module.css"

import ImageWithFocal from "@/components/ui/ImageWithFocal";
import { ArticleCardProps } from "./article-card.types";
import PublishedDate from "./components/PublishedDate";
import { FocalPoint } from "@/shared/data.types";
import Link from "next/link";
import { getArticleUrl } from "@/configs/url.config";

const ArticleCard = ({ badge, createdAt, slug, cover, title, subtitle }: ArticleCardProps) => {
    const coverFocalPoint: FocalPoint = {
        x: `${cover.focalX}%`,
        y: `${cover.focalY}%`,
    }
    
    return (
        <Link
            href={getArticleUrl({ heading: badge.name, slug: slug})}
            passHref
            id={slug}
            className={styles.articleCard}
            tabIndex={0}
            aria-label={`Read full article: ${title}`}
        >
            <h1 className={styles.headline}>{title}</h1>
            <ImageWithFocal className={styles.cover} focalPoint={coverFocalPoint} src={cover.url} alt={title} width={200} height={200} />
            <span className={styles.description}>
                <p className={styles.subtitle}>{subtitle}</p>
                <PublishedDate date={createdAt} />
            </span>
        </Link>
    )   
}

export default ArticleCard;