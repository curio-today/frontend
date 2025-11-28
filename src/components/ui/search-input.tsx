"use client"

import { Search } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../core/input-group"
import { Activity, useState } from "react"
import { useTranslations } from "next-intl"

export const SearchInput = () => {
    const [resultCount, setResultCount] = useState<number | null>(null)
    const [query, setQuery] = useState<string>("");
    const t = useTranslations("Navigation");

    const handleSearch = () => {
        const count = Math.floor(Math.random() * 25); 
        setResultCount(count);
    };


    return (
        <InputGroup onChange={handleSearch}>
            <div className="flex">
                <InputGroupInput
                    placeholder={t("placeholder")} 
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <InputGroupAddon>
                    <Search />
                </InputGroupAddon>
            </div>
            <Activity mode={resultCount === null ? "hidden" : "visible"} >
                <InputGroupAddon align="inline-end">{resultCount} results</InputGroupAddon>
            </Activity>
        </InputGroup>
    )
}