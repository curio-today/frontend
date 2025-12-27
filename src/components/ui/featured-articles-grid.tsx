import { ArticleCard, ArticleCardSkeleton, type ArticleCardProps } from "@/components/ui/article-card"
import { CATEGORY_ID_SLUG_MAP } from "@/constants/categories";

import { Grid2then3 } from "./grid";

import Link from "next/link";
import { ArticleLink } from "./article-link";

export const FeaturedArticlesGrid = ({ articles }: { articles: ArticleCardProps[] }) => {
    return (
        <Grid2then3>
            {articles.map((article, index) => {
                const colSpan = index < 2 ? "md:col-span-3" : "md:col-span-2";
                
                return (
                    <ArticleLink 
                        article={article}
                        className={`w-full ${colSpan}`}
                        key={article.id}  
                        tabIndex={0}
                    >
                        <ArticleCard {...article} />
                    </ArticleLink>
                );
            })}
        </Grid2then3>
    )   
}

export const FeaturedArticlesGridSkeleton = ({ cardCount }: { cardCount: number }) => (
    <section className="w-auto flex flex-col gap-[clamp(1rem,1vw,5rem)] md:grid md:grid-cols-[repeat(6,auto)] md:grid-rows-[repeat(4,auto)]">
        <div className="row w-full col-span-2 row-span-2">
            <ArticleCardSkeleton />
        </div>
        {Array.from({ length: cardCount }, (_, i) => (
            <div key={i} className="row w-full col-span-2 row-span-2">
                <ArticleCardSkeleton />
            </div>
        ))}
    </section>
)