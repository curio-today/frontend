import { ImageProps } from "next/image";

export type IconSet = "clock" | "external" | "sun" | "moon"

export type IconProps = {
    name: IconSet;
} & Omit<ImageProps, "src" | "alt" | "width" | "height">;