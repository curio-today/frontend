import styles from "./hero.module.css"

import Text, { TextProps } from "@/ui/components/ui/Text";
import { ComponentProps } from "react";
import { ImageProps } from "next/image";
import ImageWithFocal from "@/ui/components/primitives/ImageWithFocal";

type HeroProps = ComponentProps<"figure">;
type HeroImageProps = ImageProps & {
    focalX: number;
    focalY: number;
};
type HeroSourceProps = ComponentProps<"figcaption">;

const HeroImageSource = ({ source, id = "source", variant = "p", ...rest }: { source: string } & Partial<TextProps>) => <Text variant={variant} id={id} className={styles.source}{...rest}>{source}</Text>
const HeroImage = ({width = 300, height = 300, focalY, focalX, sizes, ...rest }: HeroImageProps) => <ImageWithFocal className={styles.image} width={width} height={height} focalPoint={{
    x: focalX,
    y: focalY
}} sizes={sizes} {...rest}/>


const HeroCaption = ({children, ...rest}: HeroSourceProps) => <figcaption className={styles.caption} {...rest}>{children}</figcaption>

const Hero = ({ children, ...rest}: HeroProps ) => {
    return (
        <figure className={styles.hero} {...rest}>
            {children}
        </figure>
    )
}
HeroImage.Source = HeroImageSource;
Hero.Image = HeroImage;
Hero.Caption = HeroCaption;



export default Hero;