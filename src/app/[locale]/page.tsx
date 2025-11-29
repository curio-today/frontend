import { ArticleCard } from "@/components/ui/article/article-card";
import { articles, imageDefault } from "@/data/articles";

export default async function Feed() {
    
    return (
        <section className="w-full grid grid-cols-[repeat(6,auto)] grid-rows-[repeat(4,auto)] gap-[clamp(1rem,1vw,5rem)] flex flex-col">
            {articles.map(article => (
                <div key={article.id} className="row w-full col-span-2 row-span-2">
                    <ArticleCard {...article} image={imageDefault.image}/>
                </div>
            ))}
        </section>
    )
}