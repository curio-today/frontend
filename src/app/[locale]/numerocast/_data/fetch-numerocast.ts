"use server"

import { Video } from "@/types/api/video";
import { Recommendation } from "@/app/[locale]/numerocast/_types/recommendation";
import { fetchJson } from "@/lib/fetch-json";
import { PaginatedContent } from "@/types/api/paginated-article";
import { MediaAsset } from "@/types/api/media-asset";
import { ImageWithFocal } from "@/types/image";
import { getLocale } from "next-intl/server";

export interface Numerocast {
    date: string;
    recommendations: Recommendation[];
    video: Video | null;
    cover: MediaAsset<ImageWithFocal>;
}

/**
 * Fetches the latest numerocast from the API.
 * @returns The latest numerocast or null if not found.
 */
export async function fetchNumerocast(): Promise<Numerocast | null> {
    const locale = await getLocale();
    const paginatedNumerocast = await fetchJson<PaginatedContent<Numerocast>>(`${process.env.NEXT_PUBLIC_API_URL}/numerologgi?locale=${locale}`).catch(() => null);
    const numerocast = paginatedNumerocast?.docs?.[0];

    return numerocast || null;
}