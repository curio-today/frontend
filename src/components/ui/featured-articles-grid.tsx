import { ArticleCard, type ArticleCardProps } from "@/components/ui/article-card"
import { Grid2then3 } from "./grid";
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

