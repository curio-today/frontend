"use client"

import { CATEGORY_LIST } from "@/constants/categories";
import { NavigationMenu, NavigationMenuList } from "@/components/core/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile";
import { sendGAEvent } from "@next/third-parties/google";
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/core/item";
import Link from "next/link";
import { 
  Tooltip,
  TooltipContent, 
  TooltipTrigger 
} from "@/components/core/tooltip";
import { ChevronRightIcon } from "lucide-react";
import { Category } from "@/types/category";
import { useTranslations } from "next-intl";
import { 
    NavigationMenuItem, 
    NavigationMenuLink, 
    navigationMenuTriggerStyle 
} from "@/components/core/navigation-menu";


type NavigationCategoryItemProps = {
  category: Category;
};

type NavigationCategoriesMenuProps = {
  orientation?: "vertical" | "horizontal";
};

export const NavigationCategoryMenu = ({
  orientation = "horizontal",
}: NavigationCategoriesMenuProps) => {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList
        className={
          orientation === "vertical"
            ? "flex flex-col gap-4"
            : undefined
        }
      >
        {CATEGORY_LIST.map((category) => (
          <NavigationCategoryMenuItem
            key={category}
            category={category}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};


export const NavigationCategoryMenuItem = ({ category }: NavigationCategoryItemProps) => {
  const t = useTranslations("Navigation");

  const href = `/${category}`;
  const name = t(`${category}.title`);
  const description = t(`${category}.description`);

  const handleClick = () => {
    sendGAEvent("event", "link_click", {
      link_text: category,
      link_url: href,
    });
  };

  return (
    <NavigationMenuItem>
      <Tooltip>
        <TooltipTrigger asChild>
          <NavigationMenuLink
            href={href}
            onClick={handleClick}
            className={navigationMenuTriggerStyle()}
          >
            {name}
          </NavigationMenuLink>
        </TooltipTrigger>
        <TooltipContent>{description}</TooltipContent>
      </Tooltip>
    </NavigationMenuItem>
  );
};
