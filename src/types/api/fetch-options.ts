import { QueryParams } from "./query-params";

export type FetchOptions = {
    id?: string;
    query?: Partial<QueryParams>
}
