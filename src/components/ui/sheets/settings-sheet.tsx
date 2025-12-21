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
import { Settings2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { LanguageToggle } from "../toggles/language-toggle"
import { ModeToggle } from "../toggles/mode-toggle"
import { Label } from "../../core/label"
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

export const SettingsSheet = () => {
    const t = useTranslations("Settings")
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline">
                        <Settings2 />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{t("title")}</DrawerTitle>
                        <DrawerDescription>{t("description")}</DrawerDescription>
                    </DrawerHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-name">{t("language")}</Label>
                            <LanguageToggle />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-username">{t("mode")}</Label>
                            <ModeToggle />
                        </div>
                    </div>     
                    <DrawerFooter />
                </DrawerContent>
            </Drawer>
        )
    }


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <Settings2 />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{t("title")}</SheetTitle>
                    <SheetDescription>{t("description")}</SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-name">{t("language")}</Label>
                        <LanguageToggle />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-username">{t("mode")}</Label>
                        <ModeToggle />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}