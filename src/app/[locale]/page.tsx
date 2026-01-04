import { ArticlesFeed } from "./_components/articles-feed";
import { getMetadata } from "@/lib/get-metadata";
import { ArticlesList } from "@/components/ui/articles-list";
import { CATEGORY_LIST } from "@/constants/categories";
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
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