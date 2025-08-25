import { FocalPoint, Percent } from "@/shared/data.types";
import Image, { ImageProps } from "next/image";

type Props = {
    focalPoint: FocalPoint
} & ImageProps;


const ImageWithFocal = ({ focalPoint, children, ...rest }: Props) => {
    return (
        <Image style={{ objectPosition: `${focalPoint.x} ${focalPoint.y}`}} {...rest}>
            {children}
        </Image>
    )
}


export default ImageWithFocal;