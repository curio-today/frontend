import { ImageProps } from "next/image";
import IconType from "./IconType";
import { Size } from "@/types/Size";

export type IconProps = {
    icon: IconType;
    size: Size;
} & Omit<ImageProps, "width" | "height" | "src" | "alt">;

