"use client"

import { Copy } from "lucide-react"
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip"
import { useTranslations } from "next-intl"
import { InputGroupButton } from "@/components/ui/input-group"
import { useClipboard } from "@/hooks/use-clipboard"



export const CopyToClipboardButton = ({ text }: { text: string }) => {
    const t = useTranslations("Buttons.Copy");
    const { copy } = useClipboard();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <InputGroupButton onClick={() => copy(text)} variant="ghost">
                    <Copy />
                </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
                <p>{t("tooltipContent")}</p>
            </TooltipContent>
        </Tooltip>
    )
}