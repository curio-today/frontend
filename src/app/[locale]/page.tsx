import { ArticlesFeed } from "./_components/articles-feed";

export default async function Feed() {
    return (
        <section className="gap-10 flex flex-col">
            <ArticlesFeed step={5} start={5} searchParam="articles"/>
        </section>
    )
}