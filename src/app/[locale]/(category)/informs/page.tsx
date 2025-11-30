import { ArticlesFeed } from "../../_components/articles-feed";

export default async function Informs() {
    return (
        <section className="gap-10 flex flex-col">
            <ArticlesFeed category="Informs" step={5} start={5} />
        </section>
    )
}