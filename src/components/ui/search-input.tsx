"use client"

import { Search } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../core/input-group"
import { useState } from "react"

export const SearchInput = () => {
    const [resultCount, setResultCount] = useState<number | null>(null)
    const [query, setQuery] = useState<string>("");

    const handleSearch = () => {
        const count = Math.floor(Math.random() * 25); 
        setResultCount(count);
    };


    return (
        <InputGroup onChange={handleSearch}>
            <InputGroupInput 
                placeholder="Search..." 
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            {resultCount !== null && (
                <InputGroupAddon align="inline-end">{resultCount} results</InputGroupAddon>
            )}
        </InputGroup>
    )
}