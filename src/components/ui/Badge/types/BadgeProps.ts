import { IconType } from "@/components/ui/Icon";
import { Section } from "@/types/Section";
import { Property } from "csstype";

import BackgroundColor = Property.BackgroundColor;

export type BadgeProps = {
    isActive?: boolean;
    icon: IconType;
    label: Section;
    href: string;
    color: BackgroundColor;
}