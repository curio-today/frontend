import { FocalPoint } from "./focal-point";

export type Image = {
    alt: string;
    url: string;
}

export type ImageWithFocal = Image & {
    focalX: FocalPoint["x"];
    focalY: FocalPoint["y"];
}

