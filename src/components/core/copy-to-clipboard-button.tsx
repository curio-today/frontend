"use client"

import { Check, Copy } from "lucide-react"
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip"
import { useTranslations } from "next-intl"
import { InputGroupButton } from "@/components/ui/input-group"
import { useClipboard } from "@/hooks/use-clipboard"
import { motion } from "motion/react"
import { useState } from "react"


export const CopyToClipboardButton = ({ text }: { text: string }) => {
    const t = useTranslations("Buttons.Copy");
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const { copy } = useClipboard();

    function handleCopyClick() {
        copy(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <InputGroupButton variant="ghost" onClick={handleCopyClick}>
                    <motion.div
                        key={isCopied ? "check" : "copy"}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                    >
                        {isCopied ? <Check /> : <Copy />}
                    </motion.div>
                </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
                <p>{t("tooltipContent")}</p>
            </TooltipContent>
        </Tooltip>
    )
}