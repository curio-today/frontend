"use client"

import styles from "./Post.module.scss";
import { PostProps } from "./types/PostProps";

import Text from "@/components/ui/Text";
import Link from "next/link";

const Post = ({
                  slug,
                  title,
                  subtitle,
                  image,
                  publishedDate,
              }: PostProps) => {
    const customStyles = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
        url(${image.src}) lightgray 50% / cover no-repeat`,
    }

    return (
        <Link
            href={`/news/${slug}`}
            passHref
            id={slug}
            className={styles.post}
            style={customStyles}
            tabIndex={0}
            aria-label={`Read full article: ${title}`}
        >
            <section
                className={styles.contentWrapper}
                aria-labelledby={`${slug}-title`}
            >
                <Text
                    id={`${slug}-title`}
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
                        dateTime={publishedDate}
                        aria-label={`Published on ${new Date(publishedDate).toLocaleDateString()}`}
                    >
                        {publishedDate}
                    </time>
                </div>
            </section>
        </Link>
    )
}


export default Post;