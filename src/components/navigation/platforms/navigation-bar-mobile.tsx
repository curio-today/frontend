"use client"

import {
    BrainIcon,
    HomeIcon, LightbulbIcon, ListIcon, SearchIcon, SmileIcon,
    SparklesIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Tabs, TabsButton, TabsCategoryItem } from "./components/tabs";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/core/drawer";
import { ViewTransition } from "react";


const tabs = [
    { key: 'amuses', icon: SmileIcon, href: "/amuses" },
    { key: 'amazes', icon: SparklesIcon, href: "/amazes" },
    { key: 'informs', icon: BrainIcon, href: "/informs" },
    { key: 'inspires', icon: LightbulbIcon, href: "/inspires" },
];



export const NavigationBarMobile = () => {
    const t = useTranslations("Navigation");
    const pathname = usePathname();

    return (
        <Tabs className="justify-center">
            <ViewTransition name="navigation-bar-mobile">
                <Drawer>
                    <DrawerTrigger asChild>
                        <TabsButton
                            icon={ListIcon}
                            label={t("title")}
                        >
                        </TabsButton>
                    </DrawerTrigger>
                    <DrawerContent className="pb-4">
                        <DrawerHeader>
                            <DrawerTitle>{t("title")}</DrawerTitle>
                            <DrawerDescription>{t("description")}</DrawerDescription>
                        </DrawerHeader>
                        <div className="flex flex-col gap-4 m-2">
                            {tabs.map(tab =>
                                <TabsCategoryItem
                                    key={tab.key}
                                    href={tab.href}
                                    icon={tab.icon}
                                    title={t(`${tab.key}.title`)}
                                    description={t(`${tab.key}.description`)}
                                    isSelected={pathname === tab.href}
                                />
                            )}
                        </div>
                    </DrawerContent>
                </Drawer>
            </ViewTransition>
            <Link href="/">
                <TabsButton
                    icon={HomeIcon}
                    label={t(`home.title`)}
                    isSelected={pathname === "/"}
                >
                </TabsButton>
            </Link>
            <Link href="/search">
                <TabsButton
                    icon={SearchIcon}
                    label={t("searchButton")}
                    isSelected={pathname === "/search"}
                >

                </TabsButton>
            </Link>
        </Tabs >
    )
}
