import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Slug } from "./slug";
import { ContentStatus } from "./content-status";
import { BadgeProps } from "@/components/ui/Badge";
import { Image, ImageWithFocal } from "./image";
import { MediaAsset } from "../api/media-asset";

export type Article = {
    updatedAt: Date;
    createdAt: Date;

    content: SerializedEditorState;
    slug: Slug;
    _status: ContentStatus;
    id: string;

    title: string;
    subtitle: string;
    source: string;
    
    badge: BadgeProps;
    cover: ImageWithFocal & MediaAsset
}