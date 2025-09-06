export type MediaAsset<T extends object> = {
    quality: number;
    mimeType: string;
    filename: string;
    filesize: number;
    thumbnailURL: string | null;
} & T;