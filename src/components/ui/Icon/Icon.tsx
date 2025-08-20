import Image from "next/image";

import { IconProps, iconVariants } from "./icon.types";
import { ICONS_SVG } from "@/data/icon.data";

import { motion } from "framer-motion";

/**
 * Renders a static (non-animated) icon.
 *
 * @param icon - The type or name of the icon to display.
 * @param size - The size of the icon.
 * @param style - Optional inline styles to apply to the icon.
 * @param className - Will be used on icon wrapper.
 * @param props - Additional props to spread onto the icon element.
 *
 * @constructor
 */
const Icon = ({ icon, size, style, className, imageProps}: IconProps) => {
    const data = ICONS_SVG[icon];

    if (!data) {
        return null;
    }

    return (
        <motion.div className={iconVariants({ size, className })} style={style} initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Image
                {...imageProps}
                src={data.src}
                alt={data.alt}
                style={{ objectFit: "contain" }}
                fill
            />
        </motion.div>
    );
}

export default Icon;