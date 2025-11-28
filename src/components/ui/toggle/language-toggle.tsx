"use client"

import { Button } from "@/components/core/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/core/dropdown-menu"
import { Languages } from "lucide-react";
import { Locale, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export function LanguageToggle() {
    const locale = useLocale();
    const router = useRouter();

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
            <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchTo("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchTo("lv")}>
          Latviešu
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchTo("ru")}>
          Русский
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
