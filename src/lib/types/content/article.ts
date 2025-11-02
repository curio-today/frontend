import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Slug } from "./slug";
import { ContentStatus } from "./content-status";
import { BadgeProps } from "@/components/ui/Badge";
import { ImageWithFocal } from "./image";
import { MediaAsset } from "../api/media-asset";

export type Article = {
    id: string;
    slug: Slug;
    _status: ContentStatus;
    updatedAt: string;
    createdAt: string;

    title: string;
    subtitle: string;
    source: string;
    
    badge: BadgeProps;
    cover: MediaAsset<ImageWithFocal>;

    content: SerializedEditorState;
}