import Image from "next/image";

import styles from "./Icon.module.scss"
import { IconProps } from "./types/IconProps";
import { IconData } from "./data";

import clsx from "clsx";

/**
 * Renders a static (non-animated) icon.
 *
 * @param icon - The type or name of the icon to display.
 * @param size - The size of the icon.
 * @param style - Optional inline styles to apply to the icon.
 * @param props - Additional props to spread onto the icon element.
 *
 * @constructor
 */
const Icon = ({ icon, size, style, ...props}: IconProps) => {
    const data = IconData[icon];

    return (
        <div className={clsx(
            styles.iconWrapper,
            styles[size]
        )} style={style}>
            <Image
                src={data.url}
                alt={data.alt}
                style={{
                    objectFit: "contain",
                }}
                fill
                {...props}
            />
        </div>
    );
}

export default Icon;