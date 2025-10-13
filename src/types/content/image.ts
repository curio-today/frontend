import { FocalPoint } from "./focal-point";

export type Image = {
    alt: string;
    src: string;
    quality?: string;
}

export type ImageWithFocal = Image & {
    focalX: FocalPoint["x"];
    focalY: FocalPoint["y"];
}

