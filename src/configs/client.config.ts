/**
 * Get public key from the environment.
 */
export function getPublicApiKey(): string | undefined {
    return process.env.PUBLIC_API_KEY;
}