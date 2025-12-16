import { Category } from "./category";

export type SearchFilters = Partial<{
    q: string,
    category: Category,
}>