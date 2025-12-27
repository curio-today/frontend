"use server";

import { FeaturedArticlesGrid } from "@/components/ui/featured-articles-grid";
import { SearchBar } from "@/components/ui/search-bar";
import { getMetadata } from "@/lib/get-metadata";
import { NoArticlesAvailable } from "./_components/no-articles-available";
import { StartTypingToSearch } from "./_components/start-typing-to-search";
import { SearchFilters } from "@/types/search-filters";
import { getLocalizedArticlesWithFilters } from "@/data/article/get-localized-articles-with-filters";

export async function generateMetadata() {
    return getMetadata("search");
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<SearchFilters> }) {
    const searchFilters = await searchParams;
    const { docs: articles } = await getLocalizedArticlesWithFilters({...searchFilters});

    const renderArticles = () => {
        if (articles.length === 0) {
            return <NoArticlesAvailable />;
        }
        
        if (searchFilters.q == null && searchFilters.category == null) {
            return <StartTypingToSearch />
        }
        
        return <FeaturedArticlesGrid articles={articles} />;
    };

    return (
        <>
            <div className="flex gap-4 flex-col w-full">
                <SearchBar />
                {renderArticles()}
            </div>
        </>
    )
}