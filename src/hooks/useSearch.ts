import { useState } from "react";

type SearchResult<TSearchItem> = {
    filteredData: TSearchItem[],
    lastTerm: string | null,

    search: (term: string) => TSearchItem[],
    clear: () => void,
}

/**
 * Hook to search in fields by using function search()
 * @returns 
 */
export const useSearch = <TSearchItem>(data: TSearchItem[], filter: (term: string, item: TSearchItem) => boolean,  isDefault: boolean = false): SearchResult<TSearchItem> => {
    const [filteredData, setFilteredData] = useState<TSearchItem[]>(isDefault ? data : []);

    let lastTerm: string | null = null;

    return {
        search: (term) => {
            // Use custom filter from args
            const newFilteredData = data.filter(item => filter(term, item));

            // Prevents re-render if new data is equal to old data
            if (newFilteredData != filteredData) {
                setFilteredData(newFilteredData);
            }
            
            lastTerm = term;            
            
            return newFilteredData;
        },
        clear: () => {
            setFilteredData([]);
        },

        lastTerm,
        filteredData,
    }
}


export default useSearch;