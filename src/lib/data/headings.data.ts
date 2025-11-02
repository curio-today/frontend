import { IconVariant } from "@/ui/components/ui/Icon";
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

/**
 * @deprecated Use nav.data.ts instead
 */
export const HEADINGS: HeadingData = {
    Amuses: {
        icon: "wow",
        label: "Amuses",
        href: "/amuses",
        color: "-moz-initial"
    },
    Amazes: {
        icon: "clock",
        label: "",
        href: "",
        color: "-moz-initial"
    },
    Informs: {
        icon: "clock",
        label: "",
        href: "",
        color: "-moz-initial"
    },
    Inspires: {
        icon: "clock",
        label: "",
        href: "",
        color: "-moz-initial"
    },
    Feed: {
        icon: "newspaper",
        label: "",
        href: "",
        color: "initial"
    }
}

