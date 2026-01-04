import {headers} from "next/headers";

export async function isMobile(): Promise<boolean> {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";

    return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
}