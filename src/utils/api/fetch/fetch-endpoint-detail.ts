import { RequestMethod } from "@/types/api/methods";
import { QueryParams } from "@/types/api/query-params";
import { Api } from "@/configs";
import { buildUrl } from "./build-url";
import { fetchWithCache } from "../fetch-with-cache";
import { AvailableEndpoints } from "@/types/api/available-endpoints";


export async function fetchEndpointDetail<T>(endpoint: AvailableEndpoints, id: string, query: QueryParams | undefined = undefined, requestMethod: RequestMethod = "GET"): Promise<T> {
    const requestUrl: URL = buildUrl({
        baseUrl: Api.baseUrl,
        endpointName: Api.endpoints[endpoint].detail(id),
        query: query,
    })

    return fetchWithCache(requestUrl.href, requestMethod);
}
