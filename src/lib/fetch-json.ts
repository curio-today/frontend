import { fetchWithTimeout } from "./fetch-with-timeout";

export async function fetchJson<T>(url: string, options: RequestInit = {}, timeout = 15000): Promise<T> {
    try {
        const response = await fetchWithTimeout(url, options, timeout);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Failed to fetch ${url}:`, response.status, errorText);
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        return (await response.json()) as T;
    } catch (err) {
        console.error(`Error fetching ${url}:`, err);

        if (err instanceof TypeError && err.message.includes('fetch')) {
            throw new Error('Network error. Please check your connection and try again.');
        }
        if (err instanceof Error && err.name === 'AbortError') {
            throw new Error('Request timed out. Please try again.');
        }

        throw new Error('Unexpected error occurred. Please try again later.');
    }
}
