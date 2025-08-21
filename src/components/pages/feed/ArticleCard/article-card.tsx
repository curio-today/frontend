import styles from "./article-card.module.scss";
import { ArticleProps } from "./article-card.types";

import Text from "@/components/ui/Text";
import Link from "next/link";
import { getAdmin, getHeadingUrl } from "@/configs/url.config";

const ArticleCard = ({
                  title,
                  subtitle,
                  cover,
                  slug,
                  badge,
                  createdAt
                 }: ArticleProps) => {

    const publishedAt = new Date(createdAt);

    return (
        <Link
            href={getHeadingUrl(badge.name.toLowerCase(), slug)}
            passHref
            id={slug}
            className={styles.post}
            style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
                url(${getAdmin()(cover.url)}) lightgray 50% / cover no-repeat`,
            }}
            tabIndex={0}
            aria-label={`Read full article: ${title}`}
        >
            <section
                className={styles.contentWrapper}
                aria-labelledby={`${slug}-title`}
            >
                <Text
                    id={`${slug}-title`}
                    variant="h2"
                    className={styles.title}
                >
                    {title}
                </Text>

                <div className={styles.descriptionWrapper}>
                    <Text
                        variant="p"
                        className={styles.subtitle}
                        aria-label={subtitle}
                    >
                        {subtitle}
                    </Text>

                    <time
                        className={styles.date}
                        dateTime={publishedAt.toDateString()}
                        aria-label={`Published on ${publishedAt.toLocaleDateString()}`}
                    >
                        {publishedAt.toLocaleDateString()}
                    </time>
                </div>
            </section>
        </Link>
    )
}


export default ArticleCard;