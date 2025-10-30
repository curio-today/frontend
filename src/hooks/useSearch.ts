import { useState } from "react";

type SearchResult<TSearchItem> = {
    filteredData: TSearchItem[],
    searchTerm: string,

    search: (term: string) => TSearchItem[],
    clear: () => void,
}

type SearchArguments<TSearchItem> = {
    data: TSearchItem[]; 
    stringifyFn: (item: TSearchItem) => string;
    isDefault?: boolean;
}

/**
 * Custom hook to make search easier. 
 * @param data - a raw data without any filters.
 * @param stringifyFn - a function that returns a string to make search happen to custom types.
 * @param isDefault - a flag to make a filtered data by default set to data in args
 * @returns {SearchResult}
 */
export const useSearch = <TSearchItem, >({ data, stringifyFn, isDefault }: SearchArguments<TSearchItem>): SearchResult<TSearchItem> => {
    const [filteredData, setFilteredData] = useState<TSearchItem[]>(isDefault ? data : []);

    let searchTerm: string = "";

    return {
        search: (term) => {
            // Use custom filter from args
            const newFilteredData = data.filter(item => stringifyFn(item) == term);

            // Prevents re-render if new data is equal to old data
            if (newFilteredData != filteredData) {
                setFilteredData(newFilteredData);
            }
            
            searchTerm = term;            
            
            return newFilteredData;
        },
        clear: () => {
            setFilteredData([]);
        },

        searchTerm,
        filteredData,
    }
}


export default useSearch;