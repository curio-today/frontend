"use client"

import styles from "./styles/SearchBar.module.css"

import Icon from "../Icon"
import useSearch, { SearchArguments } from "@/hooks/useSearch"


type SearchBarProps<TSearchItem> = { 
    onSearch?: (term: string, filteredData: TSearchItem[]) => void;
} & SearchArguments<TSearchItem>

export const SearchBar = <TSearchItem, >({ data, searchBy, onSearch }: SearchBarProps<TSearchItem>) => {
    const { search } = useSearch<TSearchItem>({
        data,
        searchBy
    })

    return (
        <div className={styles["search-bar"]}>
            <Icon icon="magnifying_glass" className={styles["icon"]} />
            <input
                type="search"
                className={styles["search-input"]}
                placeholder="Start typing to search"
                onChange={(e) => {
                    const term: string = e.target.value;
                    onSearch?.(term, search(term));
                }}
            />
        </div>

    )
}

export default SearchBar;