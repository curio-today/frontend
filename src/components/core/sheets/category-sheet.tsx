"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { NavigationCategoryMenu } from "@/components/navigation/navigation-category-menu"
import { useTranslations } from "next-intl"

export const CategorySheet = () => {
    const t = useTranslations("Navigation")

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
                    <NavigationCategoryMenu orientation="vertical"/>
                </span>

            </SheetContent>
        </Sheet>
    )
}