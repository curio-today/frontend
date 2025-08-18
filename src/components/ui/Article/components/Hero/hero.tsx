import styles from "./hero.module.css"

import Text, { TextProps } from "@/components/ui/Text";
import { ComponentProps } from "react";
import Image, { ImageProps } from "next/image";

type HeroProps = ComponentProps<"figure">;
type HeroImageProps = ImageProps;
type HeroSourceProps = ComponentProps<"figcaption">;

const HeroImageSource = ({ source, id = "source", variant = "small", ...rest }: { source: string } & Partial<TextProps>) => <Text variant={variant} id={id} {...rest}>{source}</Text>
const HeroImage = (props: HeroImageProps) => <Image className={styles.image} {...props}/>


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