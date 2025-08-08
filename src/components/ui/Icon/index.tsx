import "./index.scss"

import { IconProps } from "@/shared/props/IconProps";
import Image from "next/image";


export const Icon = ({ src, alt, style, ...props}: IconProps) => {
    return (
        <div className="icon-wrapper" style={style}>
            <Image
                src={src}
                alt={alt}
                fill
                objectFit="contain"
                priority
                {...props}
            />
        </div>
    );
}