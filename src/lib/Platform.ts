import { headers } from "next/headers";

/**
 * Works only on Server-Side!
 */
export async function Server_isMobile(): Promise<boolean> {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";

    return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
};