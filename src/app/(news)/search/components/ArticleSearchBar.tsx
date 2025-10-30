"use client"

import SearchBar from "@/components/ui/SearchBar";
import { Article } from "@/types/content/article";
import { useEffect, useState } from "react";

const ArticleSearchBar = ({ articles }: { articles: Article[] }) => {
    const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);    

    return (
        <div>
            <div>
                <SearchBar 
                    data={articles}
                    onSearch={(term, filteredArticles) => {
                        setFilteredArticles(filteredArticles);
                    }}
                    searchBy={(item) => item.title}
                />
            </div>
            {filteredArticles.map((article) => (
                <li key={article.id}>
                    {article.title}
                </li>
            ))}
        </div>
    )
}


export default ArticleSearchBar;