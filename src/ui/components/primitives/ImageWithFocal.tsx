import { FocalPoint } from "@/lib/types/content/focal-point";
import Image, { ImageProps } from "next/image";

export type ImageWithFocalProps = {
    focalPoint: FocalPoint
} & ImageProps;


export const ImageWithFocal = ({ focalPoint, children, alt, src, ...rest }: ImageWithFocalProps) => {
    return (
        <Image style={{ objectPosition: `${focalPoint.x} ${focalPoint.y}`, objectFit: "cover"}} alt={alt} src={src} {...rest}>
            {children}
        </Image>
    )
}

export default ImageWithFocal;