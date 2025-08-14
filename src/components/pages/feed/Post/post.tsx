"use client"

import styles from "./post.module.scss";
import { PostProps } from "./post.types";

import Text from "@/components/ui/Text";
import Link from "next/link";
import { getHeadingUrl } from "@/configs/url.config";

const Post = ({
                  title,
                  subtitle,
                  image,
                  meta,
                  publishedDate}: PostProps) => {
    return (
        <Link
            href={getHeadingUrl(meta.heading, meta.slug)}
            passHref
            id={meta.slug}
            className={styles.post}
            style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
                url(${image.src}) lightgray 50% / cover no-repeat`,
            }}
            tabIndex={0}
            aria-label={`Read full article: ${title}`}
        >
            <section
                className={styles.contentWrapper}
                aria-labelledby={`${meta.slug}-title`}
            >
                <Text
                    id={`${meta.slug}-title`}
                    variant="h3"
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
                        dateTime={publishedDate.toDateString()}
                        aria-label={`Published on ${publishedDate.toLocaleDateString()}`}
                    >
                        {publishedDate.toLocaleDateString()}
                    </time>
                </div>
            </section>
        </Link>
    )
}


export default Post;