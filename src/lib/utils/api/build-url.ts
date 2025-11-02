import stringifyQuery from "./stringify-query";
import { QueryParams } from "@/lib/types/api/query-params";

export type Params = {
    baseUrl: string | URL;
    endpointName: string;
    query?: QueryParams;
}

export function buildUrl({ baseUrl, endpointName, query }: Params): URL {    
    const url = `${baseUrl}/${endpointName}${query ? `?${stringifyQuery(query)}` : ""}`;

    return new URL(url, baseUrl);
}