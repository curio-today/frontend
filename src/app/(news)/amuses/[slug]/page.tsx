import styles from "./page.module.css"

import Image from "next/image";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { getPostBySlug } from "@/lib/api/feed.lib";
import { fit } from "sharp";



export default async function NewsPage({ params }) {
    const { slug } = await params;
    const postAsset = await getPostBySlug(slug);

    return (
        <article className={styles.article} aria-labelledby="headline">
            <header className={styles.header}>
                <section id={styles.headerMeta}>
                    <Text variant="h3" id={styles.createTime}>{postAsset.createdAt}</Text>
                    <span id={styles.headerButtons}>
                        <Button icon={{ type: "share" }}/>
                    </span>
                </section>
                <h1 id={styles.headline}>{postAsset.title}</h1>
                <p id={styles.subtitle}>{postAsset.subtitle}</p>
            </header>
            <figure className={styles.heroContainer}>
                <Image
                    id={styles.hero}
                    alt={postAsset.cover.alt}
                    src={postAsset.cover.url}
                    quality={100}
                    priority
                />
                <figcaption id={styles.caption}>
                    <Text variant="p">{postAsset.source}</Text>
                </figcaption>
            </figure>
            <section className={styles.body}>
                {/*Markdown is supposed to be here!*/}
            </section>
        </article>
    );
}