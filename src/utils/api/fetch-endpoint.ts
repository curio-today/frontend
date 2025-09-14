import { EndpointViewMethod, RequestMethod } from "@/types/api/methods";
import { QueryParams } from "@/types/api/query-params";
import { Api } from "@/configs";
import { NotInEndpointsList } from "@/types/exceptions/not-in-endpoints-list";
import { buildUrl } from "./build-url";
import { resolveEndpoint } from "./resolve-endpoint";

type Params = {
    endpoint: string,
    view: EndpointViewMethod,
    
    requestMethod?: RequestMethod,
    query?: QueryParams
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
export async function fetchEndpoint<TExpectedResponseData>({ endpoint, view, query, requestMethod = "GET"}: Params): Promise<TExpectedResponseData> {
    if (!(endpoint in Api.endpoints)) {
        throw new NotInEndpointsList(endpoint);
    }
    
    const endpointName = resolveEndpoint(Api.endpoints[endpoint][view]);

    const requestUrl: URL = buildUrl({
        baseUrl: Api.baseUrl,
        endpointName: endpointName,
        query,
    })

    try {
        const response = await fetch(requestUrl.href, {
            method: requestMethod,
            cache: "reload",
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch the endpoint (${endpointName}): ${response.statusText}`);
        }

        return await response.json() as Promise<TExpectedResponseData>;
    }
    catch (error) {
        throw new Error(`Failed to fetch the endpoint (${endpointName}) with the error: ${error}`);
    }
    
}
