import { IconVariant } from "@/components/ui/Icon";
import { Heading } from "@/shared/data.types";
import { Property } from "csstype";

type HeadingData = {
    [K in Heading]: {
        icon: IconVariant,
        label: string,
        href: string;
        color: Property.BackgroundColor;
    }
}

export const HEADINGS: HeadingData = {
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

