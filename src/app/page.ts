import { getMetadata } from "@/lib/get-metadata";
import { permanentRedirect } from "next/navigation";
import {Metadata} from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    return getMetadata("feed");
}

export default async function AppPage() {
    const locale = await getLocale();

    return permanentRedirect(locale);
}
