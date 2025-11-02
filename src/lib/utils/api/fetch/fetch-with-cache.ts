import { RequestMethod } from "@/lib/types/api/methods";

export async function fetchWithCache<TExpectedResponseData>(url: string, method: RequestMethod): Promise<TExpectedResponseData> {
    try {
        const response = await fetch(url, {
            method: method,
            cache: "reload",
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch the url (${url}): ${response.statusText}`);
        }

        return await response.json() as Promise<TExpectedResponseData>;
    }
    catch (error) {
        throw new Error(`Failed to fetch the url (${url}) with the error: ${error}`);
    }
}