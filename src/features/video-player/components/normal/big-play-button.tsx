"use client"

import { Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"
import { useVideo } from "../../contexts/video-context"

export const BigPlayButton = () => {
    const { isPlaying, showControls, togglePlay } = useVideo()

    return (
        <div
            className={cn(
                "absolute inset-0 z-10 flex items-center justify-center transition-all duration-500 pointer-events-none",
                !isPlaying || showControls ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
        >
            <button
                onClick={togglePlay}
                className={cn(
                    "flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl border border-white/20 outline-none transition-all hover:scale-110 hover:bg-white/20 active:scale-95 pointer-events-auto cursor-pointer shadow-2xl",
                    isPlaying && "opacity-0 group-hover/container:opacity-100"
                )}
            >
                {isPlaying ? (
                    <Pause className="h-10 w-10 fill-current" />
                ) : (
                    <Play className="h-10 w-10 translate-x-1 fill-current" />
                )}
            </button>
        </div>
    )
}
