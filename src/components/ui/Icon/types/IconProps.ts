import { ImageProps } from "next/image";
import IconType from "./IconType";

export type IconProps = {
    icon: IconType;
    size: "small" | "medium" | "large" | "huge";
} & Omit<ImageProps, "width" | "height" | "src" | "alt">;

