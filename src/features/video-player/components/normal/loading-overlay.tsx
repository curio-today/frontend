"use client"

import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { useVideo } from "../../contexts/video-context"

export const LoadingOverlay = () => {
    const t = useTranslations()
    const { isLoading } = useVideo()
    if (!isLoading) return null

    return (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-xs">
            <div className="relative flex flex-col items-center gap-4">
                <Loader2 className="h-14 w-14 animate-spin text-primary" />
                <span className="text-white/80 text-sm font-medium animate-pulse">{t('general.loading')}</span>
            </div>
        </div>
    )
}
