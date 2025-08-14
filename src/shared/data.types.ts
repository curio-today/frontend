import { IconType } from "@/components/ui/Icon";

export type Image = {
    src: string;
    alt: string;
}

export type Heading = "amazes" | "informs" | "amuses" | "inspires"

export type Meta = {
    heading: Heading;
    slug: string;
}

export type Size = "small" | "medium" | "large" | "huge"


export type Icon = {
    icon: IconType;
    size: Size,
}