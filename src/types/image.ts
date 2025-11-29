export type Image = {
    url: string,
    alt: string,
}

export type ImageWithFocal = Image & {
    focalX: number;
    focalY: number;
}