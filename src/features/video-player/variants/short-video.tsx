"use client"

import { cn } from "@/lib/utils"
import { ShortVideoPlayerProps } from "../types"
import { Vignette } from "../components/visual-effects"

import { VideoElement } from "../components/tiktok/video-element"
import { VideoOverlay } from "../components/tiktok/video-overlay"
import { VerticalSidebar } from "../components/tiktok/vertical-sidebar"
import { BottomInfo } from "../components/tiktok/bottom-info"
import { ProgressBar } from "../components/tiktok/progress-bar"
import { LoadingOverlay } from "../components/tiktok/loading-overlay"

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
                className
            )}
        >
            <VideoElement src={src} poster={poster} />
            <VideoOverlay />

            <VerticalSidebar />
            <BottomInfo
                userName={userName}
                description={description}
                musicName={musicName}
            />

            <LoadingOverlay />
            <ProgressBar />

            <Vignette />
        </div>
    )
}
