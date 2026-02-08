"use client"

import { useVideo } from "../../contexts/video-context"

export const TimeDisplay = () => {
    const { currentTime, duration } = useVideo()
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }
    return (
        <div className="text-sm font-medium text-white/90 tabular-nums select-none bg-white/5 px-2 py-1 rounded-md border border-white/10">
            <span className="text-primary">{formatTime(currentTime)}</span>
            <span className="mx-1 text-white/30">/</span>
            <span className="text-white/60">{formatTime(duration)}</span>
        </div>
    )
}
