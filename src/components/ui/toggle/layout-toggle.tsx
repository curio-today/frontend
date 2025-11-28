"use client"

import { setWidePreference } from "@/actions/set-wide-preference";
import { Button } from "@/components/core/button"
import { useLayout } from "@/hooks/use-layout"
import { TextAlignCenter, TextAlignJustify } from "lucide-react"
import { Activity } from "react";

export const LayoutToggle = () => {
    const { toggleWide, isWide } = useLayout();

    return (
        <Button variant="ghost" onClick={toggleWide}>
            <Activity mode={isWide ? "visible" : "hidden"}>
                <TextAlignJustify />
            </Activity>
            <Activity mode={isWide ? "hidden" : "visible"}>
                <TextAlignCenter />
            </Activity>
        </Button>
    )
}