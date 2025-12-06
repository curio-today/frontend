"use client"

import { NavigationLink } from "./navigation-link";
import { CATEGORY_LIST } from "@/constants/categories";
import { NavigationMenu, NavigationMenuList } from "@/components/core/navigation-menu"
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-mobile";



export const NavigationCategoryMenu = ({ orientation }: { orientation?: "vertical" | "horizontal" }) => {
  const t = useTranslations("Navigation"); 
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className={orientation === "vertical" ? "flex flex-col" : undefined}>
          {CATEGORY_LIST.map(category => (
            <NavigationLink key={category} href={`/${category}`}>{t(`${category}.title`)}</NavigationLink>
          ))}
        </NavigationMenuList>
    </NavigationMenu>
  )
}