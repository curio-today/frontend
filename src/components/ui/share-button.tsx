"use client"

import { usePathname } from "@/i18n/navigation"
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
import { Input } from "../core/input"
import { Label } from "../core/label"
import { Share } from "lucide-react"
import { useTranslations } from "next-intl"



export const ShareButton = () => {
    const pathname = usePathname();
    const t = useTranslations("Buttons.Share");

    const link = `https://curio.today${pathname}`

    const copyLink = () => {

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
                        <Input
                            id="link"
                            defaultValue={link}
                            readOnly
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">{t("buttons.close")}</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}