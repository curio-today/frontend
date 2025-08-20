export type Image = {
    src: string;
    alt: string;
}

export type Meta = {
    heading: Heading;
    slug: string;
}

export type Heading = "amazes" | "informs" | "amuses" | "inspires" | (string & {})
export type Size = "small" | "medium" | "large" | "huge"

