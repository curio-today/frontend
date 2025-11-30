import { MediaAsset } from "./media-asset";
import { ImageWithFocal } from "../image";

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
    
    // content: SerializedEditorState;
    _status: "published" | "draft";
}