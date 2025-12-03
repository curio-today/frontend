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
import { Lightbulb, Menu } from "lucide-react"
import { NavigationCategoryMenu } from "@/components/ui/navigation-category-menu"
import { useTranslations } from "next-intl"
import { Separator } from "@/components/core/separator"


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
                    <Separator />
                    <NavigationCategoryMenu orientation="vertical"/>
                </span>

            </SheetContent>
        </Sheet>
    )
}