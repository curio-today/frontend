"use client"

import SearchBar from "@/components/ui/SearchBar";
import { Article } from "@/types/content/article";
import { fetchArticles } from "@/utils/api/fetch/fetch-articles";
import { useLocale, useMessages } from "next-intl";
import { useState } from "react";

type Props = {
    articles: Article[];
}

const ArticleSearchBar = ({ articles }: Props) => {
    const locale = useLocale();
    const messages = useMessages();
    const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);  

    return (
        <div>
            <div>
                <SearchBar
                    placeholder={messages["Messages"]["SearchBarPlaceholder"]}
                    preloadedData={articles} 
                    findMoreData={term => fetchArticles({ locale, titleLike: term })}
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