export type PostProps = {
    slug: string;
    image: {
        src: string;
        sizes: string[];
        alt: string;
    }
    title: string;
    subtitle: string;
    badge: {
        label: string;
        color: string;
    };
    publishedDate: string;
}