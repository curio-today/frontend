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
  const isMobile = useIsMobile();

  const href = `/${category}`;
  const name = t(`${category}.title`);
  const description = t(`${category}.description`);

  const handleClick = () => {
    sendGAEvent("event", "link_click", {
      link_text: category,
      link_url: href,
    });
  };

  const LinkContent = (
    <>
      {isMobile ? (
        <>
          <ItemContent>
            <ItemTitle>{name}</ItemTitle>
            <ItemDescription>{description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </>
      ) : (
        <>{name}</>
      )}
    </>
  );

  if (isMobile) {
    return (
      <Item className="w-full" variant="outline" asChild>
        <Link href={href} onClick={handleClick}>
          {LinkContent}
        </Link>
      </Item>
    );
  }

  return (
    <NavigationMenuItem>
      <Tooltip>
        <TooltipTrigger asChild>
          <NavigationMenuLink
            href={href}
            onClick={handleClick}
            className={navigationMenuTriggerStyle()}
          >
            {LinkContent}
          </NavigationMenuLink>
        </TooltipTrigger>
        <TooltipContent>{description}</TooltipContent>
      </Tooltip>
    </NavigationMenuItem>
  );
};
