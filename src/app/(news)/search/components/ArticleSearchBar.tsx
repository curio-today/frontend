"use client"

import SearchBar from "@/components/ui/SearchBar";
import { Article } from "@/types/content/article";
import { fetchArticles } from "@/utils/api/fetch/fetch-articles";
import { useState } from "react";

const ArticleSearchBar = ({ articles }: { articles: Article[] }) => {
    const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);  
    
    return (
        <div>
            <div>
                <SearchBar
                    preloadedData={articles} 
                    findMoreData={term => fetchArticles({ titleLike: term })}
                    searchBy={article => article.title}              
                    onFilterData={newFilteredArticles => setFilteredArticles(newFilteredArticles)}
                />
            </div>
            {filteredArticles.map((article) => (
                <div key={article.id}>{article.title}</div>
            ))}
        </div>
    )
}


export default ArticleSearchBar;