import styles from "./page.module.css"

import NewsFeed from "@/components/pages/feed/NewsFeed";


export async function Feed() {
    return (
        <div className={styles.page}>
            <NewsFeed />
        </div>
    )
}

export default Feed;