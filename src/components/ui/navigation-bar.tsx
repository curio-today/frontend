"use client"

import Link from "next/link"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/core/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import { PropsWithChildren } from "react"
import { SearchInput } from "./search-input"
import { Logo } from "../logo"
import { ButtonGroup } from "../core/button-group"


export const NavigationBar = () => {
  const isMobile = useIsMobile()

  return (
    <div className="w-full flex justify-center py-5 gap-4 bg-background">
      <Logo width="100"/>
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
          <NavigationBarTooltipLink href="/amazes">Amazes</NavigationBarTooltipLink>
          <NavigationBarTooltipLink href="/informs">Informs</NavigationBarTooltipLink>
          <NavigationBarTooltipLink href="/amuses">Amuses</NavigationBarTooltipLink>
          <NavigationBarTooltipLink href="/inspires">Inspires</NavigationBarTooltipLink>
        </NavigationMenuList>
        <ButtonGroup className="ml-3">
            <SearchInput />
            <ModeToggle />
        </ButtonGroup>
      </NavigationMenu>
    </div>

  )
}

const NavigationBarTooltipLink = ({ children, href }: Readonly<PropsWithChildren<{
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