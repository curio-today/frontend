import { IconType } from "@/components/ui/Icon";
import { Heading } from "@/shared/data.types";
import { Property } from "csstype";

export type HeadingData = {
    [K in Heading]: {
        icon: IconType,
        label: string,
        href: string;
        color: Property.BackgroundColor;
    }
}

export const Headings: HeadingData = {
    amuses: {
        icon: "wow",
        label: "Amuses",
        href: "/amuses",
        color: "-moz-initial"
    },
    amazes: {
        icon: "clock",
        label: "",
        href: "",
        color: "-moz-initial"
    },
    informs: {
        icon: "clock",
        label: "",
        href: "",
        color: "-moz-initial"
    },
    inspires: {
        icon: "clock",
        label: "",
        href: "",
        color: "-moz-initial"
    }
}

