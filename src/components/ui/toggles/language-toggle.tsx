"use client"

import { Button } from "@/components/core/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/core/dropdown-menu"
import { useChangeLocale } from "@/hooks/use-change-locale";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function LanguageToggle() {
  const locale = useLocale();
  const t = useTranslations("Translation");

  const changeLocale = useChangeLocale();
   

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default">
            <Languages />
            <span>{locale.toLocaleUpperCase()}</span>
            <span className="sr-only">{t("description")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>{t("description")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={locale === "en"} onCheckedChange={() => changeLocale("en")}>
          English
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={locale === "lv"} onCheckedChange={() => changeLocale("lv")}>
          Latviešu
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={locale === "ru"} onCheckedChange={() => changeLocale("ru")}>
          Русский
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
