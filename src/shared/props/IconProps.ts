import { ImageProps } from "next/image";

export type IconProps = {
} & Omit<ImageProps, "width" | "height">;