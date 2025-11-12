"use client"

import Grid from "@/ui/components/layout/OldGrid";
import { ArticleCard } from "@/ui/components/feature/article/ArticleCard";
import Loader from "@/ui/components/primitives/Loader";

import { useIntersectionObserver } from "@hooks";
import { createArticlesSuspenseQuery } from "@utils/suspense-query";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { Header } from "@typography";

type AnimationStyle = {
    opacity: number,
    y: number,
}

type Props = {
    initial?: AnimationStyle,
    animate?: AnimationStyle
}

/**
 * Renders a grid of articles with infinite scrolling capabilities.
 *
 * This component fetches an initial set of articles for a given locale using `useSuspenseInfiniteQuery`,
 * meaning it should be wrapped in a `<Suspense>` boundary. It displays the articles in a grid layout.
 * As the user scrolls down, it uses an `IntersectionObserver` to detect when the end of the list is near
 * and automatically fetches the next page of articles, creating an infinite scroll effect.
 * A loader is displayed while new articles are being fetched.
 *
 * The appearance of each article row can be animated using Framer Motion props.
 *
 * @param {Props} props - The properties for the component.
 * @param {string} props.locale - The locale for which to fetch articles.
 * @param {object} [props.initial={ opacity: 0, y: 50 }] - The initial animation state for each grid row, passed to Framer Motion's `motion` component.
 * @param {object} [props.animate={ opacity: 1, y: 0 }] - The target animation state for each grid row, passed to Framer Motion's `motion` component.
 */
export default function ArticlesGrid({ 
    initial = { opacity: 0, y: 50 }, 
    animate = { opacity: 1, y: 0 } 
}: Props) {
    const locale = useLocale();
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