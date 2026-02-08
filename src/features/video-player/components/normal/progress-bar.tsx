"use client"

import { useRef, useCallback } from "react"
import { cn } from "@/lib/utils"
import { useVideo } from "../../contexts/video-context"

export const ProgressBar = () => {
    const {
        currentTime,
        duration,
        buffered,
        isDragging,
        setIsDragging,
        seek,
        setCurrentTime
    } = useVideo()
    const progressRef = useRef<HTMLDivElement>(null)

    const handleSeek = useCallback((e: React.MouseEvent | MouseEvent | React.TouchEvent | TouchEvent) => {
        if (!progressRef.current || !duration) return
        const rect = progressRef.current.getBoundingClientRect()
        const clientX = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX
        const pos = (clientX - rect.left) / rect.width
        const seekTime = Math.max(0, Math.min(pos * duration, duration))

        if (e.type === 'mousemove' || e.type === 'touchmove') {
            setCurrentTime(seekTime)
        } else {
            seek(seekTime)
        }
    }, [duration, seek, setCurrentTime])

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        handleSeek(e)

        const onMouseMove = (e: MouseEvent) => handleSeek(e)
        const onMouseUp = (e: MouseEvent) => {
            setIsDragging(false)
            handleSeek(e)
            document.removeEventListener("mousemove", onMouseMove)
            document.removeEventListener("mouseup", onMouseUp)
        }

        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
    }

    const progress = (currentTime / (duration || 1)) * 100

    return (
        <div
            className="group/progress relative mb-4 h-1.5 w-full cursor-pointer rounded-full bg-white/10 transition-all hover:h-2.5"
            ref={progressRef}
            onMouseDown={onMouseDown}
        >
            {/* Buffered Bar */}
            <div
                className="absolute h-full rounded-full bg-white/20 transition-all duration-300"
                style={{ width: `${buffered}%` }}
            />
            {/* Played Bar */}
            <div
                className="absolute h-full rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
            {/* Thumb */}
            <div
                className={cn(
                    "absolute top-1/2 -translate-y-1/2 h-4 w-4 scale-0 rounded-full bg-white shadow-xl ring-4 ring-primary/20 transition-transform group-hover/progress:scale-100",
                    isDragging && "scale-100 shadow-[0_0_20px_white]"
                )}
                style={{ left: `calc(${progress}% - 8px)` }}
            />
        </div>
    )
}
