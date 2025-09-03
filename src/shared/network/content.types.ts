import type { SerializedEditorState } from "lexical";
import { Heading } from "../data.types";

/**
 * @deprecated
 */
export type ContentEntry = {
    updatedAt: string;
    createdAt: string;
    content: SerializedEditorState
    slug: string,
    _status: "published" | "draft",
    id: string,
};
/**
 * @deprecated use types/article/article instead
 */
export type Article = ContentEntry & {
    title: string;
    subtitle: string;
    badge: {
        name: Heading;
    };
    source: string;
    cover: {
        focalX: number;
        focalY: number;
        quality: string;
        filename: string;
        mimeType: string;
        filesize: number;
        alt: string;
        thumbnailURL: string;
        url: string;
    }
}