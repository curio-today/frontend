import Grid from "@/components/layout/Grid";
import InfiniteScroll from "@/components/ui/InfiniteScroll";
import { useInfiniteFetching } from "@/hooks";
import { useFetchChunked } from "@/hooks/use-fetch-chunked";
import ApiRequest from "@/types/api/new-request";
import { fetchArticles } from "@/utils/api/fetch/fetch-articles";
import { getLocale } from "next-intl/server";

type Props = {
    locale: ApiRequest["query"]["locale"],
    maxArticlesPerRequest?: ApiRequest["query"]["limit"]
}


export default async function Feed() {
    const locale = getLocale();

    const articles = await fetchArticles({
        locale
    });

    // const { data, hasMore, loadMore } = useChunkedFetch();
    const { loadMore, isLoading, hasMore, loadedData, allData } = useFetchChunked(fetchArticles);

    return null;
    // return (
    //     <InfiniteScroll data={data} hasMore={hasMore} loadMore={loadMore}>
    //         {
    //             (articles) => (
    //                 <Grid>
    //                     {articles.map}
    //                 </Grid>
    //             )
    //         }
    //     </InfiniteScroll>
    // )
}