import { ArticlesFeed } from "../../_components/articles-feed";

export default async function Inspires() {
    return (
        <section className="gap-10 flex flex-col">
            <ArticlesFeed category="Inspires" step={5} start={5} />
        </section>
    )
}