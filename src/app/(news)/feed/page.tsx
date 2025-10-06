"use client"
import { Metadata } from "next";

import { getPageMetadataWithTranslation } from "@/utils/metadata/get-page-metadata-with-translation";
import InfiniteScroll from "@/components/ui2/InfiniteScroll";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { Article } from "@/types/content/article";
import { fetchEndpointList } from "@/utils/api/fetch";
import FeedViewer from "@/components/ui2/FeedGrid";
import { PaginatedContent } from "@/types/api/paginated-content";
import Grid from "@/components/layout/Grid";
import ArticleCard from "@/components/ui2/ArticleCard";

// export async function generateMetadata(): Promise<Metadata> {
//     return getPageMetadataWithTranslation("Metadata.pages.feed")
// }

export default function Feed() {
    return (
        <InfiniteScroll<Article>
            fetchPage={(page) => fetchEndpointList<PaginatedContent<Article>>("articles", { page })}
            condition={(data) => data.docs.length > 0}
            onAppend={(prev, next) => ({
                ...next,
                docs: [...(prev?.docs ?? []), ...next.docs],
            })}
        >
                    </InfiniteScroll>
    )
}

    