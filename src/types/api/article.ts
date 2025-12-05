import { MediaAsset } from "./media-asset";
import { ImageWithFocal } from "../image";
import { RootContent } from "@/components/content/content-renderer";

export type Article = {
    id: string;
    slug: string;
    updatedAt: string;
    createdAt: string;
    
    title: string;
    subtitle: string;
    source: string;
    
    badge: {
        name: string;
        id: string;
    };
    cover: MediaAsset<ImageWithFocal>;
    
    content: {
        root: RootContent
    };
    _status: "published" | "draft";
}