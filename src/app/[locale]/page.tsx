import { ArticlesFeed } from "./_components/articles-feed";

export default async function Feed() {
    return (
        <section className="gap-10">
            <ArticlesFeed step={5} start={5}/>
        </section>
    )
}