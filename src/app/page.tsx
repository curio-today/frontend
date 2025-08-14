import Post, { PostProps } from "@/components/ui/Post";
import styles from "./page.module.css";

export default function Home() {

    const data: PostProps[] = [];

    return (
        <div className={styles.page}>
            <header className={styles.posts}>
                <section className={styles.main}>
                    {/*<Post {...data[0]} />*/}
                    {/*<Post {...data[1]} />*/}
                </section>
                <section className={styles.main}>
                    {/*<Post {...data[2]} />*/}
                    {/*<Post {...data[3]} />*/}
                    {/*<Post {...data[4]} />*/}
                </section>
            </header>
        </div>
  );
}
