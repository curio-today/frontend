import { IconVariant } from "@/components/ui/Icon";

export type NavBarHeading = {
    translationKey: string;
    href: string;
    icon: IconVariant;
    label?: string;
}


export type NavBarProps = {
    headings: NavBarHeading[];
}
