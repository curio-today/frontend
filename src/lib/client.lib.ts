import { getPublicApiKey } from "@/configs/client.config";
import { getAdmin } from "@/configs/url.config";
import { Endpoint } from "@/shared/network";

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
 * @returns {Promise<T>} The parsed JSON response.
 *
 * @throws {Error} If the network request fails or the response is not OK.
 */
export async function fetchAdmin<T>(endpoint: Endpoint): Promise<T> {    const adminUrl = getAdmin();
    const requestUrl: string = adminUrl(endpoint);

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

        return response.json();
    }
    catch (error) {
        console.error("Unexpected error: ",  error);
        return Promise.reject(error);
    }
}