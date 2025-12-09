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
import { 
    Tooltip, 
    TooltipTrigger,
    TooltipContent
} from "../core/tooltip"
import { Label } from "../core/label"
import { Copy, Share } from "lucide-react"
import { useTranslations } from "next-intl"
import { InputGroup, InputGroupButton, InputGroupInput } from "../core/input-group"
import { usePathname } from "@/i18n/navigation"
import { toast } from "sonner"



export const ShareButton = () => {
    const pathname = usePathname();
    const t = useTranslations("Buttons.Share");

    const link = "https://curio.today" + pathname;

    const copyLink = () => {
        navigator.clipboard.writeText(link);
        toast.success(t("success"))
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" variant="ghost">
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
                            >
                            </InputGroupInput>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <InputGroupButton onClick={copyLink}>
                                        <Copy />
                                    </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Copy link to this article</p>
                                </TooltipContent>
                            </Tooltip>

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