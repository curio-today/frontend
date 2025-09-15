import ApiEndpoint from "../api/endpoint";
import { QueryStringifier } from "../api/query-stringifier";

export type ApiConfig = {
    baseUrl: string,
    endpoints: {
        [K: string]: ApiEndpoint
    },
    query: {
        stringfier: QueryStringifier,
    };
}