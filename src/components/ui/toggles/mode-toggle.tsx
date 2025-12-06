"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/core/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel, 
  DropdownMenuSeparator
} from "@/components/core/dropdown-menu"
import { useTranslations } from "next-intl"

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const t = useTranslations("Mode");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>{t("description")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuCheckboxItem checked={theme == "light"} onCheckedChange={() => setTheme("light")}>
          {t("light")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme == "dark"} onCheckedChange={() => setTheme("dark")}>
          {t("dark")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme == "system"} onCheckedChange={() => setTheme("system")}>
          {t("system")}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    
    </DropdownMenu>
  )
}
