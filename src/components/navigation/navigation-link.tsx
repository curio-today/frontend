import { PropsWithChildren } from "react"
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export const NavigationLink = ({ children, href }: Readonly<PropsWithChildren<{
  href: string,
}>>) => {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} href={href} tabIndex={0}>{children}</NavigationMenuLink>
      </NavigationMenuItem>
    )
}