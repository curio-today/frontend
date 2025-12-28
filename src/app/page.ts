import { getMetadata } from "@/lib/get-metadata";
import { permanentRedirect } from "next/navigation";

export async function generateMetadata() {
    return getMetadata("feed");
}

export default async function AppPage() {
    // Temporary redirect to English locale
    return permanentRedirect("/en");
}