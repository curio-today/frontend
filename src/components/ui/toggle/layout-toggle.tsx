"use client"

import { setWidePreference } from "@/actions/set-wide-preference";
import { Button } from "@/components/core/button"
import { useLayout } from "@/hooks/use-layout"
import { TextAlignCenter, TextAlignJustify } from "lucide-react"
import { Activity, useTransition } from "react";

export const LayoutToggle = () => {
    const { isWide } = useLayout();
    const [pending, startTransition] = useTransition();

    const handleOnClick = () => {
        startTransition(() => {
            setWidePreference(!isWide);
        });
    };

    return (
        <Button variant="ghost" onClick={handleOnClick} disabled={pending}>
            <Activity mode={isWide ? "visible" : "hidden"}>
                <TextAlignJustify />
            </Activity>
            <Activity mode={isWide ? "hidden" : "visible"}>
                <TextAlignCenter />
            </Activity>
        </Button>
    )
}