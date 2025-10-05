import { RequestMethod } from "@/types/api/methods";
import { QueryParams } from "@/types/api/query-params";
import { Api } from "@@/api.config";
import { buildUrl } from "../build-url";
import { AvailableEndpoints } from "@/types/api/available-endpoints";
import { fetchWithCache } from "./fetch-with-cache";


/**
 * Fetches detailed data for a specific resource from a given API endpoint.
 *
 * This function constructs a URL using the specified endpoint and resource ID,
 * optionally adds query parameters, and performs a cached fetch request using
 * the provided HTTP method (default is "GET").
 *
 * @template T - The expected return type of the fetched data.
 *
 * @param {AvailableEndpoints} endpoint - The API endpoint key from the `Api.endpoints` map.
 * @param {string} id - The unique identifier for the resource to fetch.
 * @param {QueryParams} [query] - Optional query parameters to include in the request.
 * @param {RequestMethod} [requestMethod="GET"] - The HTTP method to use for the request.
 *
 * @returns {Promise<T>} A promise that resolves to the fetched resource of type `T`.
 *
 * @throws {Error} If the request fails or the endpoint is invalid.
 */
export async function fetchEndpointDetail<T>(endpoint: AvailableEndpoints, id: string, query: QueryParams | undefined = undefined, requestMethod: RequestMethod = "GET"): Promise<T> {
    const requestUrl: URL = buildUrl({
        baseUrl: Api.baseUrl,
        endpointName: Api.endpoints[endpoint].detail(id),
        query: query,
    })

    return fetchWithCache(requestUrl.href, requestMethod);
}
