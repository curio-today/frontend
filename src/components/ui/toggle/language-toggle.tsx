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
import { Languages } from "lucide-react";
import { Locale, useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export function LanguageToggle() {
    const locale = useLocale();
    const router = useRouter();
    const t = useTranslations("Translation")

    const switchTo = (newLocale: Locale) => {
        if (newLocale !== locale) {
          router.push(`/${newLocale}`)
        }
    }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default">
            <Languages />
            <span>{locale.toLocaleUpperCase()}</span>
            <span className="sr-only">{t("description")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("description")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={locale === "en"} onCheckedChange={() => switchTo("en")}>
          English
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={locale === "lv"} onCheckedChange={() => switchTo("lv")}>
          Latviešu
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={locale === "ru"} onCheckedChange={() => switchTo("ru")}>
          Русский
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
