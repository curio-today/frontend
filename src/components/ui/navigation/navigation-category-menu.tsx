"use client"

import { NavigationLink } from "./navigation-link";
import { CATEGORY_LIST } from "@/constants/categories";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/core/navigation-menu"
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-mobile";
import { sendGAEvent } from "@next/third-parties/google";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/core/item";
import { Button } from "@/components/core/button";
import { BadgeCheckIcon, ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "@/components/core/skeleton";

export const NavigationCategoryMenu = ({ orientation }: { orientation?: "vertical" | "horizontal" }) => {
  const t = useTranslations("Navigation"); 
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className={orientation === "vertical" ? "flex flex-col gap-4" : undefined}>
          {CATEGORY_LIST.map(category => {
            const categoryLink = `/${category}`;
            const categoryName = t(`${category}.title`);
            const categoryDescription = t(`${category}.description`)

            if (isMobile) {
              return (
                <NavigationMenuItem key={category} className="w-full">
                  <Item className="w-full" variant="outline" asChild>
                    <Link href={categoryLink}>
                        <ItemContent>
                          <ItemTitle>{categoryName}</ItemTitle>
                          <ItemDescription>{categoryDescription}</ItemDescription>
                        </ItemContent>
                        <ItemActions>
                          <ChevronRightIcon className="size-4"/>
                        </ItemActions>
                    </Link>
                  </Item>
                </NavigationMenuItem>
              )
            }

            return (
                <NavigationMenuItem key={category}>
                  <NavigationMenuLink 
                    href={categoryLink} 
                    onClick={() => sendGAEvent("event", "link_click", {
                      link_text: category,
                      link_url: categoryLink,
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
