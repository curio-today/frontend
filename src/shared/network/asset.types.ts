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
    content: {
        root: {
            children: AssetChild[];
        };
        direction: "ltr" | "rtl";
        format: string;
        indent: number;
        type: string;
        version: number;
    };
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
    cover: {
        quality: string;
        filename: string;
        mimeType: string;
        filesize: number;
        alt: string;
        thumbnailURL: string;
        url: string;
    }
}