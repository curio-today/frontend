import type { SerializedEditorState } from "lexical";

export type ContentEntry = {
    updatedAt: Date;
    createdAt: Date;
    content: SerializedEditorState
    slug: string,
    _status: "published" | "draft",
    id: string,
};

export type Article = ContentEntry & {
    title: string;
    subtitle: string;
    badge: {
        color: string;
        name: string;
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