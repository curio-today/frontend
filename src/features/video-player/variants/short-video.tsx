"use client"

import { cn } from "@/lib/utils"
import { ShortVideoPlayerProps } from "../types"
import { Vignette } from "../components/visual-effects"

import { VideoElement } from "../components/tiktok/video-element"
import { VideoOverlay } from "../components/tiktok/video-overlay"
import { BottomInfo } from "../components/tiktok/bottom-info"

export const ShortVideoPlayerContent = ({
    src,
    poster,
    userName,
    description,
    musicName,
    className
}: Omit<ShortVideoPlayerProps, "autoPlay">) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden bg-black shadow-2xl border border-white/10 mx-auto transition-all duration-300",
                "relative overflow-hidden sm:rounded-3xl sm:px-6",
                className
            )}
        >
            <VideoElement src={src} poster={poster} />
            <VideoOverlay />

            <BottomInfo
                userName={userName}
                description={description}
                musicName={musicName}
            />
            <Vignette />
        </div>
    )
}
