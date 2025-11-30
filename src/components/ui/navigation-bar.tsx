"use client"

import { PropsWithChildren } from "react";

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/core/navigation-menu"
import { ModeToggle } from "./toggles/mode-toggle";
import { SearchInput } from "./search-input";
import { Logo } from "./logo";
import { ButtonGroup } from "../core/button-group";
import { LanguageToggle } from "./toggles/language-toggle";
import { LayoutToggle } from "./toggles/layout-toggle";

import { useTranslations } from "next-intl";
import { useLayout } from "@/hooks/use-layout";

import { SettingsSheet } from "./sheets/settings-sheet";
import { SearchSheet } from "./sheets/search-sheet";
import Link from "next/link";

export const NavigationBar = () => {
  const isMobile = useIsMobile()
  const t = useTranslations("Navigation");
  const { isWide } = useLayout();

  return (
    <header className="lg: pl-10
     bg-background w-full fixed flex p-4 top-0 left-0 z-50 flex justify-start items-center lg:gap-10">
      <div className="flex-1 md:flex-0 justify-start">
        <Link href="/">
          <Logo width="100" />
        </Link>
      </div>
      <NavigationMenu
        viewport={isMobile}
      >
        <NavigationMenuList className="flex-wrap hidden md:flex">
          <NavLink href="/amazes" >{t("amazes.title")}</NavLink>
          <NavLink href="/informs">{t("informs.title")}</NavLink>
          <NavLink href="/amuses">{t("amuses.title")}</NavLink>
          <NavLink href="/inspires">{t("inspires.title")}</NavLink>
        </NavigationMenuList>
      </NavigationMenu>
      <ButtonGroup className="lg:flex-1 justify-end">
        <ButtonGroup>
          <ButtonGroup className="hidden md:block">
            <SearchInput />
          </ButtonGroup>
          <ButtonGroup className="block md:hidden">
            <SearchSheet />
          </ButtonGroup>
          <ButtonGroup className="hidden md:flex">
            <LanguageToggle />
            <ModeToggle />
          </ButtonGroup>
          <ButtonGroup className="block md:hidden">
            <SettingsSheet />
          </ButtonGroup>
        </ButtonGroup>
      </ButtonGroup>
    </header>
  )
}

const NavLink = ({ children, href }: Readonly<PropsWithChildren<{
  href: string,
}>>) => {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} href={href} tabIndex={0}>{children}</NavigationMenuLink>
      </NavigationMenuItem>
    )
    
}