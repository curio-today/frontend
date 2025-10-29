"use client"

import styles from "./styles/SearchBar.module.css"

import Icon from "../Icon"
import useSearch from "@/hooks/useSearch"


export type SearchBarProps = {
    rawData: string[],
}

export const SearchBar = ({ rawData }: SearchBarProps) => {
    const { search, filteredData} = useSearch(rawData, false);

    return (
        <div className={styles["search-bar"]}>
            <Icon icon="magnifying_glass" className={styles["icon"]} />
            <input
                type="search"
                className={styles["search-input"]}
                placeholder="Start typing to search"
                onChange={e => search(e.target.value)}
            />
        </div>

    )
}

export default SearchBar;