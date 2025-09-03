export type MediaAsset<T extends {}> = {
    quality: number;
    mimeType: string;
    filename: string;
    filesize: number;
    thumbnailURL: string | null;
} & T;