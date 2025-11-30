import { ArticlesFeed } from "../../_components/articles-feed";

export default async function Amazes() {
    return (
        <section className="gap-10 flex flex-col">
            <ArticlesFeed category="Amazes" step={5} start={5} />
        </section>
    )
}