import { RequestMethod } from "@/types/api/methods";
import { QueryParams } from "@/types/api/query-params";
import { Api } from "@/configs";
import { buildUrl } from "./build-url";
import { fetchWithCache } from "../fetch-with-cache";
import { AvailableEndpoints } from "@/types/api/available-endpoints";
import { ViewEndpoint } from "@/types/api/views/view-endpoint";

type Params = {
    endpoint: AvailableEndpoints,
    view: Extract<ViewEndpoint, "list">,
    
    requestMethod?: RequestMethod,
    query?: QueryParams,
} 

/**
 * 
 * @example
 * const posts = await fetchApi<Post[]>({ 
 *    endpoint: Api.endpoints.posts,
 *    type: "list",
 *    ...
 * })
 */
export async function fetchEndpoint<T>({ endpoint, view, query, requestMethod = "GET"}: Params): Promise<T> {
    const requestUrl: URL = buildUrl({
        baseUrl: Api.baseUrl,
        endpointName: "",
        query: query,
    })

    console.log(requestUrl);

    return fetchWithCache(requestUrl.href, requestMethod);
}
