import { createContext, RefObject } from "react";

type ContextType = {
    searchTerm: string | null;
    inputRef: RefObject<HTMLInputElement | null>;
}

export const SelectContext = createContext<ContextType>({
    searchTerm: null,
    inputRef: { current: null }
})