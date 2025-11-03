import { IconVariant } from "@/ui/components/primitives/Icon";

export type NavBarHeading = {
    translationKey: string;
    href: string;
    icon: IconVariant;
    label?: string;
}


export type NavBarProps = {
    headings: NavBarHeading[];
}
