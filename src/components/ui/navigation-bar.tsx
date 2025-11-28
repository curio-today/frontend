"use client"

import { PropsWithChildren } from "react";
import Link from "next/link"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/core/navigation-menu"
import { ModeToggle } from "./toggle/mode-toggle";
import { SearchInput } from "./search-input";
import { Logo } from "../logo";
import { ButtonGroup } from "../core/button-group";
import { LanguageToggle } from "./toggle/language-toggle";
import { useTranslations } from "next-intl";


export const NavigationBar = () => {
  const isMobile = useIsMobile()
  const t = useTranslations("Navigation");

  return (
    <header className="w-full fixed flex p-4 items-center top-0 left-0 z-50">
      <Link href="/" className="absolute left-4 flex items-center gap-3">
        <Logo width="100" />
      </Link>

      <NavigationMenu
        viewport={isMobile}
        className="absolute left-1/2 -translate-x-1/2"
      >
        <NavigationMenuList className="flex-wrap">
          <NavLink href="/amazes">{t("Amazes.title")}</NavLink>
          <NavLink href="/informs">{t("Informs.title")}</NavLink>
          <NavLink href="/amuses">{t("Amuses.title")}</NavLink>
          <NavLink href="/inspires">{t("Inspires.title")}</NavLink>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="ml-auto pr-4">
        <ButtonGroup>
          <ButtonGroup>
            <SearchInput />
          </ButtonGroup>
          <ButtonGroup>
            <LanguageToggle />
            <ModeToggle />
          </ButtonGroup>
        </ButtonGroup>
      </div>
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