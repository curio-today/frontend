import { Category } from "./category";

export type SearchFilters = {
    category: Category,
}

export type SearchFiltersList = {
    key: keyof SearchFilters,
    value: string,
}[];