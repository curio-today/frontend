import { useState } from "react";

type SearchResult = {
    filteredData: string[],
    lastTerm: string | null,

    search: (term: string) => string[],
    clear: () => void,
}

/**
 * Hook to search in fields by using function search()
 * @returns 
 */
export const useSearch = (data: string[], isDefault?: boolean): SearchResult => {
    const [filteredData, setFilteredData] = useState<string[]>(isDefault ? data : []);

    let lastTerm: string | null = null;

    return {
        search: (term) => {
            const newFilteredData = data.filter(item => item.toLowerCase().includes(term.toLowerCase()));
            
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