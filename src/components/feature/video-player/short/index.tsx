"use client"

import { cn } from "@/lib/utils"
import { VideoPlayerProvider } from "../video-context"
import {
    ShortVideoElement,
    ShortVideoOverlay,
    VerticalSidebar,
    BottomInfo,
    ShortProgressBar,
    ShortLoadingOverlay
} from "./ui"

export type ShortVideoPlayerProps = {
    src: string
    poster?: string
    username?: string
    description?: string
    musicName?: string
    userImage?: string
    likes?: string
    comments?: string
    shares?: string
    className?: string
    autoPlay?: boolean
}

const ShortVideoPlayerContent = ({
    src,
    poster,
    username,
    description,
    musicName,
    userImage,
    likes,
    comments,
    shares,
    className
}: Omit<ShortVideoPlayerProps, "autoPlay">) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden bg-black shadow-2xl border border-white/10 mx-auto transition-all duration-300",
                className
            )}
        >
            {/* Main Video */}
            <ShortVideoElement src={src} poster={poster} />

            {/* Interaction Layer */}
            <ShortVideoOverlay />

            {/* TikTok Sidebar */}
            <VerticalSidebar />

            {/* Bottom Info */}
            <BottomInfo
                username={username}
                description={description}
                musicName={musicName}
            />

            {/* Loading Indicator */}
            <ShortLoadingOverlay />

            {/* Bottom Progress Bar */}
            <ShortProgressBar />

            {/* Vingette Effect */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/20 via-transparent to-black/40 z-10" />
        </div>
    )
}

export const ShortVideoPlayer = (props: ShortVideoPlayerProps) => {
    return (
        <VideoPlayerProvider autoPlay={props.autoPlay}>
            <ShortVideoPlayerContent {...props} />
        </VideoPlayerProvider>
    )
}
