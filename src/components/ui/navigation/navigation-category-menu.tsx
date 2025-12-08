"use client"

import { NavigationLink } from "./navigation-link";
import { CATEGORY_LIST } from "@/constants/categories";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/core/navigation-menu"
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-mobile";
import { sendGAEvent } from "@next/third-parties/google";



export const NavigationCategoryMenu = ({ orientation }: { orientation?: "vertical" | "horizontal" }) => {
  const t = useTranslations("Navigation"); 
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className={orientation === "vertical" ? "flex flex-col" : undefined}>
          {CATEGORY_LIST.map(category => {
            const linkUrl = `/${category}`;
            const categoryName = t(`${category}.title`);

            return (
                <NavigationMenuItem key={category}>
                  <NavigationMenuLink 
                    href={`/${category}`} 
                    onClick={() => sendGAEvent("event", "link_click", {
                      link_text: category,
                      link_url: linkUrl,
                    })}
                    className={navigationMenuTriggerStyle()} 
                    tabIndex={0}
                  >
                    {categoryName}
                  </NavigationMenuLink>
                </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
    </NavigationMenu>
  )
}