"use client"

import { Button, type ButtonProps } from "@/components/core/button";
import {
    BrainIcon,
    HomeIcon, LightbulbIcon, SmileIcon,
    SparklesIcon,
} from "lucide-react";
import Link, {LinkProps} from "next/link";
import {cn} from "@/lib/utils";
import {useTranslations} from "next-intl";
import {usePathname} from "@/i18n/navigation";

const Tabs = [
    { key: 'amuses', icon: SmileIcon, href: "/amuses" },
    { key: 'amazes', icon: SparklesIcon, href: "/amazes" },
    { key: 'home', icon: HomeIcon, href: "/" },
    { key: 'informs', icon: BrainIcon, href: "/informs" },
    { key: 'inspires', icon: LightbulbIcon, href: "/inspires" },
];

type TabButtonProps = {
    isSelected: boolean;
} & Pick<LinkProps, "href"> & ButtonProps

export const TabButton = ({ children, href, isSelected }: TabButtonProps) => (
    <Button
        className={cn("flex flex-col justify-center p-0 w-20 h-20", isSelected ? 'text-primary bg-accent' : 'text-secondary')}
        variant="link"
        asChild
    >
        <Link href={href} >
            {children}
        </Link>
    </Button>
)

export const NavigationBarMobile = () => {
    const t = useTranslations("Navigation");
    const pathname = usePathname();

    return (
        <header className="p-1 bg-background w-full h-25 fixed flex bottom-0 left-0 z-50 items-center justify-between outline-solid outline-1">
            {Tabs.map(tab => (
                <TabButton key={tab.key} href={tab.href} isSelected={pathname === tab.href}>
                    <tab.icon className="size-5" />
                    <small className="text-xs">{t(`${tab.key}.title`)}</small>
                </TabButton>
            ))}
        </header>
    )
}