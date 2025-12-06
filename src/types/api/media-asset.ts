export type MediaAsset<T> = {
    quality: number;
    mimeType: string;
    filename: string;
    filesize: number;
    thumbnailURL: string | null;
} & T;