import { RequestMethod } from "@/lib/types/api/methods";
import { QueryParams } from "@/lib/types/api/query-params";
import { Api } from "@@/api.config";
import { buildUrl } from "../build-url";
import { fetchWithCache } from "@/lib/utils/api/fetch/fetch-with-cache";
import { AvailableEndpoints } from "@/lib/types/api/available-endpoints";

/**
 * Fetches a list of resources from a specified API endpoint.
 *
 * This function constructs a URL using the specified endpoint,
 * optionally adds query parameters, and performs a cached fetch
 * request using the provided HTTP method (default is "GET").
 *
 * @template T - The expected return type of the fetched data.
 *
 * @param {AvailableEndpoints} endpoint - The API endpoint key from the `Api.endpoints` map.
 * @param {QueryParams} [query] - Optional query parameters to include in the request.
 * @param {RequestMethod} [requestMethod="GET"] - The HTTP method to use for the request.
 *
 * @returns {Promise<T>} A promise that resolves to the fetched list of resources of type `T`.
 *
 * @throws {Error} If the request fails or the endpoint is invalid.
 */
export async function fetchEndpointList<T>(endpoint: AvailableEndpoints, query: QueryParams | undefined = undefined, requestMethod: RequestMethod = "GET"): Promise<T> {
    const requestUrl: URL = buildUrl({
        baseUrl: Api.baseUrl,
        endpointName: Api.endpoints[endpoint].list,
        query: query,
    })

    return fetchWithCache<T>(requestUrl.href, requestMethod);
}
