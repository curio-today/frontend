export type Post = {
    slug: string,
    title: string,
    description: string,
    publishedDate: string,

    category: "amazes" | "informs" | "amuses" | "inspires",

    img: {
        src: string,
        srcset: string,
        alt: string,
    },
}