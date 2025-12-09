"use client"

import { Button } from "../core/button"
import { 
    Dialog, 
    DialogTrigger, 
    DialogHeader, 
    DialogTitle, 
    DialogDescription,
    DialogContent,
    DialogClose,
    DialogFooter
} from "../core/dialog"

import { Label } from "../core/label"
import { Share } from "lucide-react"
import { useTranslations } from "next-intl"
import { InputGroup, InputGroupInput } from "../core/input-group"
import { usePathname } from "@/i18n/navigation"
import { CopyToClipboardButton } from "./copy-to-clipboard-button"
import { useIsMobile } from "@/hooks/use-mobile"
import { useClipboard } from "@/hooks/use-clipboard"

export const ShareButton = () => {
    const pathname = usePathname();
    const isMobile = useIsMobile();
    const t = useTranslations("Buttons.Share");

    const { copy } = useClipboard();
    
    const link = "https://curio.today" + pathname;


    return (
        <Dialog>
            <DialogTrigger asChild>
            <Button size="lg" variant="outline" onClick={() => copy(link)} >
                    <Share />
                    <span className="hidden sm:block">
                        {t("button")}
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{t("title")}</DialogTitle>
                    <DialogDescription>{t("description")}</DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">{t("sr")}</Label>
                        <InputGroup>
                            <InputGroupInput
                                id="link"
                                defaultValue={link}
                                readOnly
                            />
                            <CopyToClipboardButton text={link}/>
                        </InputGroup>
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button variant="secondary">{t("buttons.close")}</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

