"use client"

import { FilterIcon } from "lucide-react"
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuGroup,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuPortal,
    DropdownMenuSubContent,
    DropdownMenuRadioItem,
    DropdownMenuRadioGroup
} from "@/components/ui/dropdown-menu"
import { InputGroupButton } from "@/components/ui/input-group"
import { useTranslations } from "next-intl"
import { useFilters } from "@/hooks/use-filters"
import { useCategories } from "@/hooks/use-categories"


export const FilterButton = () => {
    const { filters, setFilter } = useFilters();
    const { categories } = useCategories();
    const t = useTranslations("Buttons.Filters");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <InputGroupButton variant="ghost">
                    <FilterIcon />
                </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>{t("category")}</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup value={filters.category} onValueChange={value => setFilter("category", value)}>
                                    {categories.map(category => (
                                        <DropdownMenuRadioItem key={category.key} value={category.key}>
                                            {category.label}
                                        </DropdownMenuRadioItem>
                                    ))}
                            </DropdownMenuRadioGroup>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

