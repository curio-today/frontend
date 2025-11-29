"use client"

import { Fragment, PropsWithChildren } from "react";
import Link from "next/link"

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
import { Logo } from "../logo";
import { ButtonGroup, ButtonGroupSeparator } from "../core/button-group";
import { LanguageToggle } from "./toggles/language-toggle";
import { LayoutToggle } from "./toggles/layout-toggle";

import { useTranslations } from "next-intl";
import { useLayout } from "@/hooks/use-layout";

import { SettingsSheet } from "./sheets/settings-sheet";
import { SearchSheet } from "./sheets/search-sheet";


export const NavigationBar = () => {
  const isMobile = useIsMobile()
  const t = useTranslations("Navigation");
  const { isWide } = useLayout();

  return (
    <header className={isWide
      ? "bg-background w-full fixed flex p-4 items-center top-0 left-0 z-50 transition-all duration-300 ease-in-out"
      : "bg-background pr-[15vw] pl-[15vw] w-full fixed flex p-4 items-center top-0 left-0 z-50 transition-all duration-300 ease-in-out"
    }>
      <Link href="/" className="relative flex items-center gap-3">
        <Logo width="100" />
      </Link>

      <NavigationMenu
        viewport={isMobile}
        className={isWide ? "md:absolute left-1/2 -translate-x-1/2" : "ml-auto mr-auto"}
      >
        <NavigationMenuList className="flex-wrap hidden md:flex">
          <NavLink href="/amazes">{t("Amazes.title")}</NavLink>
          <NavLink href="/informs">{t("Informs.title")}</NavLink>
          <NavLink href="/amuses">{t("Amuses.title")}</NavLink>
          <NavLink href="/inspires">{t("Inspires.title")}</NavLink>
        </NavigationMenuList>
      </NavigationMenu>

      <ButtonGroup className="pr-auto">
        <ButtonGroup>
          <ButtonGroup className="hidden md:flex">
            <SearchInput />
            <LanguageToggle />
            <ModeToggle />
          </ButtonGroup>
          <ButtonGroup className="block md:hidden">
            <SearchSheet />
            <SettingsSheet />
          </ButtonGroup>
        </ButtonGroup>
        <div className="hidden">
          <ButtonGroupSeparator />
          <LayoutToggle />
        </div>
      </ButtonGroup>
    </header>
  )
}

const NavLink = ({ children, href }: Readonly<PropsWithChildren<{
  href: string,
}>>) => {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href={href}>{children}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    )
    
}