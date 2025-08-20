import { IconVariant } from "@/components/ui/Icon";
import { Heading } from "@/shared/data.types";

export type NavBarData = {
    href: string;
    heading: Heading;
    icon: IconVariant;
}

export type NavBarProps = {
    headings: NavBarData[];
}

