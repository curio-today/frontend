import { Image, Meta } from "@/shared/data.types";

export type PostProps = {
    meta: Meta
    image: Image;
    title: string;
    subtitle: string;

    publishedDate: Date;
}