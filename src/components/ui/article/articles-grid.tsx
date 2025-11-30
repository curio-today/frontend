import { ArticleCard, type ArticleCardProps } from "@/components/ui/article/article-card"

type ArticlesGridProps = {
    articles: ArticleCardProps[];
}

export const ArticlesGrid = ({ articles }: ArticlesGridProps) => {
    return (
        <section className="mt-20 w-auto flex flex-col gap-[clamp(1rem,1vw,5rem)] md:grid md:grid-cols-[repeat(6,auto)] md:grid-rows-[repeat(4,auto)]">
            {articles.map(article => (
                <div key={article.id} className="row w-full col-span-2 row-span-2" tabIndex={0}>
                    <ArticleCard {...article} />
                </div>
            ))}
        </section>
    )   
}