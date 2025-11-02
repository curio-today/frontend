import { FocalPoint } from "@/lib/types/content/focal-point";
import Image, { ImageProps } from "next/image";

type Props = {
    focalPoint: FocalPoint
} & ImageProps;


const ImageWithFocal = ({ focalPoint, children, alt, src, ...rest }: Props) => {
    return (
        <Image style={{ objectPosition: `${focalPoint.x} ${focalPoint.y}`, objectFit: "cover"}} alt={alt} src={src} {...rest}>
            {children}
        </Image>
    )
}


export default ImageWithFocal;