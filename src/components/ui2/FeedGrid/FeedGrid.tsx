import Grid from "@/components/layout/Grid";
import { ArticleCard } from "@/components/ui/ArticleCard/ArticleCard";
import type { Article } from "@/types/content/article";

type Props = {
    articles: Article[];
}

export default function FeedViewer({ articles }: Props) {
    const initial = { opacity: 0, y: 50 };
    const animate = { opacity: 1, y: 0 };

    return (
        <Grid>
            {articles.map(article => (
                <Grid.Row key={article.id} initial={initial} animate={animate}>
                    <ArticleCard {...article} />
                </Grid.Row>
            ))}
        </Grid>
    );
}
