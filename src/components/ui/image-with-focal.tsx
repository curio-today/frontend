import Image, { ImageProps } from "next/image";

export const ImageWithFocal = ({ focalX, focalY, children, alt, ...rest }: ImageProps & { focalX: number, focalY: number }) => {
    return (
        <Image style={{ objectPosition: `${focalX} ${focalY}`, objectFit: "cover"}} alt={alt}  {...rest}>
            {children}
        </Image>
    )
}