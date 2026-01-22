"use client"

import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "@/components/ui/dialog"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ShareButton } from "../share-button"

export const ShareItem = () => {
    const t = useTranslations("Buttons.Share");

    return (
        <Dialog defaultOpen>
            <DialogContent>
                <DialogTitle>
                    {t("question")}
                </DialogTitle>
                <DialogDescription>
                    {t("description")}
                </DialogDescription>
                <ShareButton />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="ghost">{t("buttons.close")}</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}