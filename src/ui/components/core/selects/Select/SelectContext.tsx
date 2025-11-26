import { createContext, PropsWithChildren, useContext } from "react";

type SelectContextType = {
    searchTerm: string,
    filteredItems: string[] | null,
    selectedItem: string | null,
}

export const SelectContext = createContext<SelectContextType>({
  searchTerm: "",
  filteredItems: null,
  selectedItem: null,
});

type SelectProviderProps = PropsWithChildren<{
  value: SelectContextType
}>;

export function SelectProvider({ children, value }: SelectProviderProps) {
  return (
    <SelectContext.Provider value={value}>
      {children}
    </SelectContext.Provider>
  );
}

export const useSelect = () => useContext(SelectContext);