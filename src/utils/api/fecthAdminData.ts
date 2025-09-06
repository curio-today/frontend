import { ApiEndpoint } from "@/types/api/api-endpoint";
import { FetchOptions } from "@/types/api/fetch-options";

async function getQuery(options: FetchOptions): Promise<string> {
    const params: string[] = [];

    if (options.limit !== undefined) params.push(`limit=${options.limit}`);
    if (options.page !== undefined) params.push(`page=${options.page}`);
    if (options.locale !== undefined) params.push(`locale=${options.locale}`);
    if (options.slug !== undefined) params.push(`where[slug][equals]=${options.slug}`);
    if (options._status !== undefined) params.push(`where[_status][equals]=${options._status}`);
    if (options.heading !== undefined) params.push(`where[badge.name][equals]=${options.heading}`);

    return params.join("&");
}

function getAdminPath(path: string) {
    return `https://admin.curio.today/${path}`;

}

type FetchAdminDataParams = {
    endpoint: ApiEndpoint;
    options: FetchOptions;
}

export async function fetchAdminData<TExpectedResponseData>({
    endpoint,
    options,
}: FetchAdminDataParams) {
    const query: string = await getQuery(options);

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