import { FocalPoint } from "./focal-point";

export type Image = {
    quality: string;
    alt: string;
    url: string;
}

export type ImageWithFocal = Image & {
    focalX: FocalPoint["x"];
    focalY: FocalPoint["y"];
}

