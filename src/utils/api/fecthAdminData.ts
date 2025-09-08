import { ApiEndpoint } from "@/types/api/api-endpoint";
import { FetchOptions } from "@/types/api/fetch-options";

type FetchAdminDataParams = {
    endpoint: ApiEndpoint;
    options: FetchOptions;
}

const getQuery = async(queryParams: FetchOptions["query"]): Promise<string> => {
    const params: string[] = [];

    for (const q in queryParams) {
        if (q) {
            params.push(q);
        }
    }
    
    return params.join("&");
}
const getAdminPath = (path: string) => (`https://admin.curio.today/${path}`)


export async function fetchAdminData<TExpectedResponseData>({ endpoint, options }: FetchAdminDataParams) {
    const query: string = await getQuery(options.query);

    const requestUrl = getAdminPath(`${endpoint.path}?${query}`)

    try {
        const response = await fetch(requestUrl, {
            method: endpoint.method,
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