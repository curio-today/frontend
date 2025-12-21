"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/core/sheet"
import { Button } from "../../core/button"
import { Menu } from "lucide-react"
import { NavigationCategoryMenu } from "@/components/ui/navigation/navigation-category-menu"
import { useTranslations } from "next-intl"
import { Separator } from "@/components/core/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { 
    Drawer, 
    DrawerContent, 
    DrawerDescription, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerTitle, 
    DrawerTrigger
} from "@/components/core/drawer"

export const CategorySheet = () => {
    const t = useTranslations("Navigation")
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline">
                        <Menu />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{t("title")}</DrawerTitle>
                        <DrawerDescription>{t("description")}</DrawerDescription>
                    </DrawerHeader>

                    <span className="flex flex-col items-center">
                        <Separator />
                        <NavigationCategoryMenu orientation="vertical"/>
                    </span>    
                    <DrawerFooter />
                </DrawerContent>
            </Drawer>
        )
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{t("title")}</SheetTitle>
                    <SheetDescription>{t("description")}</SheetDescription>
                </SheetHeader>

                <span className="flex flex-col items-center">
                    <Separator />
                    <NavigationCategoryMenu orientation="vertical"/>
                </span>

            </SheetContent>
        </Sheet>
    )
}