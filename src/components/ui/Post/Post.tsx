"use client"

import styles from "./Post.module.scss";

import { PostProps } from "./types/PostProps"
;
import clsx from "clsx";
import Link from "next/link";

const Post = ({ slug, title, subtitle, badge, image, publishedDate, size = "medium"}: PostProps) => {
    return (
        <Link href={`/news/${slug}`} passHref
              id={slug}
              className={clsx(
                  styles.post,
                  size && styles[size],
              )}
              style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
        url(${image.src}) lightgray 50% / cover no-repeat`,
              }}
              tabIndex={0}>
            <section className={styles.contentWrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.descriptionWrapper}>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <time className={styles.date} dateTime={publishedDate}>
                        {publishedDate}
                    </time>
                </div>
            </section>
        </Link>
    )
}


export default Post;