import { ArticlesFeed } from "../_components/articles-feed";

export default async function CategoryPage() {
    return (
        <section className="gap-10 flex flex-col">
            <ArticlesFeed step={5} start={5} category={} />
        </section>
    )
}