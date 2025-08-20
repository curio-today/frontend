import styles from "./page.module.css"

import ArticlesFeed from "@/components/pages/feed/ArticlesFeed";

export async function Feed() {
    return (
        <div className={styles.page}>
            <ArticlesFeed />
        </div>
    )
}

export default Feed;