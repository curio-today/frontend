import { useState } from "react";

type Search<TSearchField extends string> = {
    searchValue: TSearchField | null,

    search: (value: TSearchField) => TSearchField[],
    clear: () => void,
}

/**
 * Hook to search in fields by using function search()
 * @param data fields to search.
 * @returns 
 */
export const useSearch = <TSearchData extends string>(data: TSearchData[]): Search<TSearchData> => {
    const [searchValue, setSearchValue] = useState<TSearchData | null>(null);
    
    return {
        search: (value) => {
            setSearchValue(value);
            return data.filter(field => field.toLowerCase().includes(value.toLowerCase()));
        },
        clear: () => {
            setSearchValue(null);
        },

        searchValue,
    }
}


export default useSearch;