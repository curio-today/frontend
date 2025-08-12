import { BadgeProps } from "@/components/ui/Badge";
import { Size } from "@/types/Size";

export type PostProps = {
    slug: string;
    size?: Size;
    image: {
        src: string;
        sizes: string[];
        alt: string;
    }
    title: string;
    subtitle: string;
    badge: BadgeProps;
    publishedDate: string;
}