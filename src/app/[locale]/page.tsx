import { ArticlesFeed } from "./_components/articles-feed";
import { getMetadata } from "@/data/metadata/get-metadata";
import { ArticlesList } from "./_components/articles-list";
import { CATEGORY_LIST } from "@/constants/categories";

export async function generateMetadata() {
    return getMetadata("feed");
}

export default async function FeedPage() {
    return (
        <>
            <ArticlesFeed />
            <div className="flex flex-col gap-8">
                {CATEGORY_LIST.map(category => (
                    <ArticlesList key={category} category={category}/>
                ))}
            </div>
        </>
    )
}