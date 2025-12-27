import { getMetadata } from "@/lib/get-metadata";

export async function generateMetadata() {
    return getMetadata("feed");
}
