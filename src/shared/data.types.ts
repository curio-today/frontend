/**
 * @deprecated 
 */
export type Image = {
    src: string;
    alt: string;
}
/**
 * @deprecated use types/meta
 */
export type Meta = {
    heading: Heading;
    slug: string;
}

/**
 * @deprecated use types/heading instead
 */
export type Heading = "Amazes" | "Informs" | "Amuses" | "Inspires" | "Feed" | (string & {})

/**
 * @deprecated use types/size instead
 */
export type Size = "small" | "medium" | "large" | "huge"
/**
 * @deprecated use types/percent instead
 */
export type Percent = `${number}%`;

/**
 * @deprecated use types/focal-point
 */
export type FocalPoint = {
    x: Percent;
    y: Percent;
}

/**
 * @deprecated use types/author instead
 */
export type Author = {
    name: string,
    url: string,
}