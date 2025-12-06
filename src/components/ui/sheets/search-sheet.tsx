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
import { Search } from "lucide-react"
import { useTranslations } from "next-intl"

export const SearchSheet = () => {
    const t = useTranslations("Settings")

    return (
        <Button variant="outline" disabled>
            <Search />
        </Button>
    )
}