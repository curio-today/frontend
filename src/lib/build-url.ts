import { QueryParams } from "next-intl/navigation";
import { stringify } from "querystring";

export function buildUrl(endpoint: string, query?: QueryParams, baseUrl: string = "https://admin.curio.today/api", ): URL {
    const url = baseUrl + endpoint + (query ? `?${stringify(query)}` : "")
    
    return new URL(url, baseUrl);
}