import { PostProps } from "@/components/pages/feed/Post";
import { getAdmin } from "@/configs/url.config";

import { ApiResponse } from "@/shared/network";
import { PostAsset } from "@/shared/network/asset.types";
import { Heading } from "@/shared/data.types";
import { FetchOptions } from "@/shared/network/";

const API_KEY = "11f7f25b-a955-454f-b551-3f8ba3c72d33";

async function fetchPostsRaw(query?: Partial<FetchOptions>): Promise<PostAsset[]> {
    const adminUrl = getAdmin();
    let url = "/api/posts";

    if (query?.slug) {
        url += `?where[slug][equals]=${query.slug}`;
    } else {
        const page = query?.page ?? 1;
        const limit = query?.limit ?? 10;
        const status = query?._status ?? "published";
        url += `?page=${page}&limit=${limit}&where[_status][equals]=${status}`;
    }

    try {
        const response = await fetch(adminUrl(url), {
            headers: {
                Authorization: `third-party-access API-Key ${API_KEY}`,
            },
        });

        if (!response.ok) {
            console.error("Failed to fetch posts:", response.statusText);
            return Promise.reject(new Error("Failed to fetch posts."));
        }

        const data: ApiResponse<PostAsset> = await response.json();

        // Fix cover URLs
        return data.docs.map(doc => ({
            ...doc,
            cover: {
                ...doc.cover,
                url: adminUrl(doc.cover.url),
            },
        }));
    } catch (error) {
        console.error("Error fetching posts:", error);
        return Promise.reject(error);
    }
}

export async function getPostBySlug(slug: string): Promise<PostAsset> {
    const posts = await fetchPostsRaw({ slug });
    return posts[0];
}

export async function getPosts(query: FetchOptions): Promise<PostProps[]> {
    const posts = await fetchPostsRaw(query);
    return posts.map(doc => ({
        meta: {
            heading: doc.badge.name.toLowerCase() as Heading,
            slug: doc.slug,
        },
        image: {
            src: doc.cover.url,
            alt: doc.cover.alt,
        },
        title: doc.title,
        subtitle: doc.subtitle,
        publishedDate: new Date(doc.createdAt),
    }));
}
