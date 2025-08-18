import type { SerializedEditorState } from "lexical";


type AssetChild = {
    detail: number;
    format: number;
    mode: string;
    style: string;
    text: string;
    type: string;
    version: number;
};

export type Asset = {
    updatedAt: string;
    createdAt: string;
    content: SerializedEditorState
    slug: string,
    _status: "published" | "draft",
    id: string,
};

export type PostAsset = Asset & {
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