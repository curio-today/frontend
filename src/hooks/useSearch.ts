import { useState } from "react";

export type Search<TSearchField extends string> = {
    searchValue: TSearchField | null,

    search: (value: TSearchField) => TSearchField[],
    clear: () => void,
}

export const useSearch = <TSearchField extends string>(searchFields: TSearchField[]): Search<TSearchField> => {
    const [searchValue, setSearchValue] = useState<TSearchField | null>(null);
    
    return {
        search: (value) => {
            setSearchValue(value);
            return searchFields.filter(field => field.toLowerCase().includes(value.toLowerCase()));
        },
        clear: () => {
            setSearchValue(null);
        },

        searchValue,
    }
}


export default useSearch;