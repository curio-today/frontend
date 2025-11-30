import { ArticlesFeed } from "../../_components/articles-feed";

export default async function Amuses() {
    return (
        <section className="gap-10 flex flex-col">
            <ArticlesFeed category="Amuses" step={5} start={5} />
        </section>
    )
}