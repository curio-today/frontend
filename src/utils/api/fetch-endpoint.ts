import { EndpointViewMethod, RequestMethod } from "@/types/api/methods";
import { QueryParams } from "@/types/api/query-params";
import { Api } from "@/configs";
import { NotInEndpointsList } from "@/types/exceptions/not-in-endpoints-list";
import { buildUrl } from "./build-url";
import { resolveEndpoint } from "./resolve-endpoint";
import { fetchWithCache } from "../fetch-with-cache";
import { AvailableEndpoints } from "@/types/api/available-endpoints";

type Params = {
    endpoint: AvailableEndpoints,
    view: EndpointViewMethod,
    
    requestMethod?: RequestMethod,
    query?: QueryParams
}

// TODO: Check logic for fetching detail or list in API
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
    if (!(endpoint in Api.endpoints)) {
        throw new NotInEndpointsList(endpoint);
    }
    
    const endpointName = resolveEndpoint(Api.endpoints[endpoint][view]);

    const requestUrl: URL = buildUrl({
        baseUrl: Api.baseUrl,
        endpointName: endpointName,
        query,
    })
    return fetchWithCache(requestUrl.href, requestMethod);
}

fetchEndpoint({
    endpoint: "p",
    view: "detail"
})