"use client"

import Grid from "@/components/layout/Grid";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { useIntersectionObserver } from "@/hooks";
import Loader from "./Loader";
import { createArticlesSuspenseQuery } from "@/utils/suspense-query";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

type AnimationStyle = {
    opacity: number,
    y: number,
}

type Props = {
    locale: string,
    initial?: AnimationStyle,
    animate?: AnimationStyle
}



export default function ArticlesGrid({ 
    locale, 
    initial = { opacity: 0, y: 50 }, 
    animate = { opacity: 1, y: 0 } 
}: Props) {
    const { data: articles, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery(createArticlesSuspenseQuery(locale));
    const loadMoreRef = useIntersectionObserver(fetchNextPage, hasNextPage);
    return (
        <Grid>
            {articles.map(article => (
                <Grid.Row key={article.id} initial={initial} animate={animate} >
                    <ArticleCard {...article} />
                </Grid.Row>
            ))}

            {hasNextPage && (
                <Loader ref={loadMoreRef} isLoading={isFetchingNextPage} />
            )}
        </Grid>
    );
}