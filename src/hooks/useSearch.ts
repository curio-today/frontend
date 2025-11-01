import { useState } from "react";

/**
 * @deprecated
 */
export type SearchResult<TSearchItem> = {
    filteredData: TSearchItem[],
    searchTerm: string,

    search: (term: string) => TSearchItem[],
    clear: () => void,
}

/**
 * @deprecated
 */
export type SearchArguments<TSearchItem> = {
    data: TSearchItem[]; 
    loadMoreData: (term: string) => Promise<TSearchItem[]>;
    searchBy: (item: TSearchItem) => string;
    isDefault?: boolean;
}

/**
 * Custom hook to make search easier. 
 * @param data - a raw data without any filters.
 * @param searchBy - a function that returns a string to make search happen to custom types.
 * @param isDefault - a flag to make a filtered data by default set to data in args
 * @returns {SearchResult}
 * @deprecated
 */
export const useSearch = <TSearchItem, >({ data, loadMoreData, searchBy, isDefault }: SearchArguments<TSearchItem>): SearchResult<TSearchItem> => {
    const [filteredData, setFilteredData] = useState<TSearchItem[]>(isDefault ? data : []);

    let searchTerm: string = "";

    return {
        search: (term) => {
            // Use custom filter from args
            loadMoreData(term).then(newData => {
                const newFilteredData = newData.filter(item => searchBy(item).toLowerCase().includes(term.toLowerCase()));

                // Prevents re-render if new data is equal to old data
                if (newFilteredData != filteredData) {
                    setFilteredData(newFilteredData);
                }
            }).catch(err => {
                console.log(err);
            });

            searchTerm = term;            
            
            return filteredData;
        },
        clear: () => {
            setFilteredData([]);
        },

        searchTerm,
        filteredData,
    }
}


export default useSearch;