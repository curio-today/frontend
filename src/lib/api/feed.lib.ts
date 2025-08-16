import { PostProps } from "@/components/pages/feed/Post";
import { getAdmin } from "@/configs/url.config";

import { ApiResponse } from "@/shared/network";
import { PostAsset } from "@/shared/network/asset.types";
import { Heading } from "@/shared/data.types";


export async function getPosts(depth: number): Promise<PostProps[] | null> {
    const adminUrl = getAdmin();
    const API_KEY = "11f7f25b-a955-454f-b551-3f8ba3c72d33";

    try {
        const response = await fetch(adminUrl(`/api/posts?depth=${depth}`), {
            headers: {
                Authorization: `third-party-access API-Key ${API_KEY}`,
            },
        });

        if (!response.ok) {
            console.error("Failed to fetch posts:", response.statusText);
            return null;
        }

        const data: ApiResponse<PostAsset> = await response.json();
        const publishedDocs = data.docs.filter(doc => doc._status === "published");

        return publishedDocs.map((doc: PostAsset) => ({
            meta: {
                heading: doc.badge.name.toLowerCase() as Heading,
                slug: doc.slug,
            },
            image: {
                src: adminUrl(doc.cover.url),
                alt: doc.cover.alt,
            },
            title: doc.title,
            subtitle: doc.subtitle,
            publishedDate: new Date(doc.createdAt),
        }));
        
    } catch (error) {
        console.error("Error fetching posts:", error);
        return null;
    }
}
