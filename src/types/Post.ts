import { Section } from "@/types/Section";

export type Post = {
    slug: string,
    title: string,
    description: string,
    publishedDate: string,

    category: Section,

    img: {
        src: string,
        srcset: string,
        alt: string,
    },
}