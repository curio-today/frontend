"use client"

import { Search } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../core/input-group"
import { useTranslations } from "next-intl"
import { FilterButton } from "./filter-button"
import { useSearch } from "@/hooks/use-search"

export const SearchBar = () => {
  const t = useTranslations("Navigation")
  const { query, setQuery, onKeyDown } = useSearch({ debounceMs: 250 }) 

  return (
    <div className="flex flex-row gap-2 md:gap-4">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>

        <InputGroupInput
          placeholder={t("placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
        />

        <InputGroupAddon align="inline-end">
          <FilterButton />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
