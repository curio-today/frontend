import { NavBarHeading } from "@/components/navigation/NavBar/nav-bar.types";

export const Desktop: NavBarHeading[] = [
    { translationKey: "amazes", href: "/feed/amazes", icon: "wow" },
    { translationKey: "informs", href: "/feed/informs", icon: "clock" },
    { translationKey: "amuses", href: "/feed/amuses", icon: "clock" },
    { translationKey: "inspires", href: "/feed/inspires", icon: "clock" },
];


export const Mobile: NavBarHeading[] = [
    { translationKey: "amazes", href: "/feed/amazes", icon: "wow" },
    { translationKey: "informs", href: "/feed/informs", icon: "megaphone" },
    { translationKey: "feed", href: "/feed", icon: "newspaper" },
    { translationKey: "amuses", href: "/feed/amuses", icon: "question_mark" },
    { translationKey: "inspires", href: "/feed/inspires", icon: "lightbulb" },
];