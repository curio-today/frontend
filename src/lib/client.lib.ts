import { getPublicApiKey } from "@/configs/client.config";
import { getAdmin } from "@/configs/url.config";
import { Endpoint, FetchOptions } from "@/shared/network";

/**
 * Get auth header for admin api by using a third-part-access collection in admin panel
 * @example
 *         const response = await fetch(requestUrl, {
 *             method: "GET",
 *             headers: {
 *                 Authorization: getAuthHeader(),
 *             }
 *         });
 */
function getAuthHeader(): string {
    const publicApiKey = getPublicApiKey();

    try {
        return `third-party-access API-Key ${publicApiKey}`
    } catch (e) {
        console.error(e);
        return "";
    }
}

/**
 * Fetches data from the admin API with error handling.
 *
 * @async
 * @template T
 * @param {string} endpoint - The relative API endpoint (e.g. "users", "settings").
 * @param options
 * @returns {Promise<T>} The parsed JSON response.
 *
 * @throws {Error} If the network request fails or the response is not OK.
 */
export async function fetchAdmin<R> (endpoint: Endpoint, options: FetchOptions): Promise<R> {
    const adminUrl = getAdmin();

    const params: string[] = [];

    if (options.limit !== undefined) params.push(`limit=${options.limit}`);
    if (options.page !== undefined) params.push(`page=${options.page}`);
    if (options.locale !== undefined) params.push(`locale=${options.locale}`);
    if (options.slug !== undefined) params.push(`where[slug][equals]=${options.slug}`);
    if (options._status !== undefined) params.push(`where[_status][equals]=${options._status}`);
    if (options.heading !== undefined) params.push(`where[badge.name][equals]=${options.heading}`);

    const requestUrl = adminUrl(`${endpoint}?${params.join("&")}`);

    console.log(requestUrl);

    try {
        const response = await fetch(requestUrl, {
            method: "GET",
            headers: {
                Authorization: getAuthHeader(),
            }
        });

        if (!response.ok) {
            console.error("Failed to fetch admin:", response.statusText);
            return Promise.reject(new Error("Failed to fetch admin."));
        }

        return await response.json() as Promise<R>;
    }
    catch (error) {
        console.error("Unexpected error: ",  error);
        return Promise.reject(error);
    }
}
