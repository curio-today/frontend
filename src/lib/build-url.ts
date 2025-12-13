import { QueryParams } from "next-intl/navigation";
import { stringify } from "querystring";

export function buildUrl(endpoint: string, query?: QueryParams): URL {
    const base = process.env.NEXT_PUBLIC_API_URL || "https://admin.curio.today/api";

    const url = base + endpoint + (query ? `?${stringify(query)}` : "")

    return new URL(url, base);
}