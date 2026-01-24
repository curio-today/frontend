"use client"

import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "@/components/ui/dialog"
import { useTranslations } from "next-intl"
import { ShareButton } from "@/components/core/share-button"
import { useState } from "react"
import { DontShowAgainButton } from "@/components/core/dont-show-again-button";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "share-dialog";

export const ShareDialog = () => {
    const t = useTranslations("Buttons.Share");
    const [open, setOpen] = useState(true);

    if (localStorage.getItem(STORAGE_KEY) === "false") {
        return null;
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogTitle>
                    {t("question")}
                </DialogTitle>
                <DialogDescription>
                    {t("description")}
                </DialogDescription>
                <ShareButton />
                <DialogFooter className="items-center">
                    <DontShowAgainButton onClick={() => {
                        localStorage.setItem(STORAGE_KEY, "false");
                        setOpen(false);
                    }} />
                    <DialogClose asChild>
                        <Button variant="ghost">{t("buttons.close")}</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}