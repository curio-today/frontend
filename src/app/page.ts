import { getMetadata } from "@/lib/get-metadata";
import { permanentRedirect } from "next/navigation";
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
    return getMetadata("feed");
}

export default async function AppPage() {
    // Temporary redirect to English locale
    return permanentRedirect("/en");
}