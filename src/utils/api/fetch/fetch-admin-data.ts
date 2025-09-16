import { Api } from "@/configs";
import { buildUrl } from "../build-url";
import { ApiRequest } from "@/types/api/new-request";


/**
 * @deprecated use fetchEndpoint instead and use ApiConfig
 */
export async function fetchAdminData<TExpectedResponseData>({ method, endpoint, query }: ApiRequest): Promise<TExpectedResponseData> {
    const requestUrl: URL = buildUrl({ 
        baseUrl: Api.baseUrl,
        endpoint: endpoint,
        query: query,
    })

    try {
        const response = await fetch(requestUrl.href, {
            method: method,
            cache: "reload",
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch admin url: ${response.statusText}`);
        }

        return await response.json() as Promise<TExpectedResponseData>;
    }
    catch (error) {
        throw new Error(`Failed to fetch admin url\n${error}`);
    }
}