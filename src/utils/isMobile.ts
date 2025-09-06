import { headers } from "next/headers";

/**
 * Detects whether the current request comes from a mobile device.
 *
 * This function inspects the `user-agent` header and checks it against
 * common mobile device identifiers (`Mobi`, `Android`, `iPhone`, `iPad`, `iPod`).
 *
 * @async
 * @function isMobile
 * @returns {Promise<boolean>} A promise that resolves to `true` if the request
 * is from a mobile device, otherwise `false`.
 */
export async function isMobile(): Promise<boolean> {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";

    return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
};