import { FocalPoint } from "@/types/content/focal-point";
import Image, { ImageProps } from "next/image";

type Props = {
    focalPoint: FocalPoint
} & ImageProps;


const ImageWithFocal = ({ focalPoint, children, alt, ...rest }: Props) => {
    return (
        <Image style={{ objectPosition: `${focalPoint.x} ${focalPoint.y}`, objectFit: "cover"}} alt={alt} {...rest}>
            {children}
        </Image>
    )
}


export default ImageWithFocal;