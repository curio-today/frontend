"use client"

import styles from "./styles/SearchBar.module.css"

import Icon from "../Icon"
import { useDebouncedCallback } from "@/hooks/useDebounceCallback";

type SearchBarProps<TSearchItem> = { 
    preloadedData: TSearchItem[];

    findMoreData: (term: string) => Promise<TSearchItem[]>;
    searchBy: (item: TSearchItem) => string;
    onFilterData?: (filteredData: TSearchItem[], term: string) => void;
}

export const SearchBar = <TSearchItem, >({ preloadedData, searchBy, onFilterData, findMoreData }: SearchBarProps<TSearchItem>) => {
    const debouncedFindMoreData = useDebouncedCallback((term: string) => {
        findMoreData(term)
            .then(newData => filterData(newData, term))
            .catch(err => console.error(err));
    }, 300);
    
    const filterData = (searchData: TSearchItem[], term: string) => {
        const newFilteredData = searchData.filter(item => searchBy(item).toLowerCase().includes(term.toLowerCase()));
        onFilterData?.(newFilteredData, term);

        return newFilteredData;
    }


    const handleSearch = (term: string) => {
        const preloadedFilterData = filterData(preloadedData, term);
        
        if (preloadedFilterData.length <= 0 || !preloadedFilterData) debouncedFindMoreData(term);
    }

    return (
        <div className={styles["search-bar"]}>
            <Icon icon="magnifying_glass" className={styles["icon"]} />
            <input
                type="search"
                className={styles["search-input"]}
                placeholder="Start typing to search"
                onChange={e => handleSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;