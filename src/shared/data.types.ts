export type Image = {
    src: string;
    alt: string;
}

export type Meta = {
    heading: Heading;
    slug: string;
}

export type Heading = "Amazes" | "Informs" | "Amuses" | "Inspires" | "Feed" | (string & {})
export type Size = "small" | "medium" | "large" | "huge"

export type Percent = `${number}%`;

export type FocalPoint = {
    x: Percent;
    y: Percent;
}

export type Author = {
    name: string,
    url: string,
}