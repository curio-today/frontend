"use client"

import { useRef, useCallback } from "react"
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    Minimize,
    FastForward,
    Rewind,
    Loader2,
    Settings2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useVideo } from "./video-context"
import { useTranslations } from "next-intl"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const VideoElement = ({ src, poster }: { src: string; poster?: string }) => {
    const { videoRef, togglePlay, setShowControls } = useVideo()

    return (
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="h-full w-full cursor-pointer object-contain"
            onClick={togglePlay}
            onMouseMove={() => setShowControls(true)}
            playsInline
        />
    )
}

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

export const PlayButton = () => {
    const { isPlaying, togglePlay } = useVideo()

    return (
        <Button
            onClick={togglePlay}
            variant="ghost"
            size="icon"
        >
            {isPlaying ? (
                <Pause className="h-6 w-6 fill-current" />
            ) : (
                <Play className="h-6 w-6 fill-current" />
            )}
        </Button>
    )
}

export const RewindButton = () => {
    const { videoRef } = useVideo()
    return (
        <Button
            onClick={() => { if (videoRef.current) videoRef.current.currentTime -= 10 }}
            variant="ghost"
            size="icon"
        >
            <Rewind className="h-5 w-5 fill-current" />
        </Button>
    )
}

export const FastForwardButton = () => {
    const { videoRef } = useVideo()
    return (
        <Button
            onClick={() => { if (videoRef.current) videoRef.current.currentTime += 10 }}
            variant="ghost"
            size="icon"
        >
            <FastForward className="h-5 w-5 fill-current" />
        </Button>
    )
}

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

export const VolumeButton = () => {
    const { isMuted, volume, toggleMute } = useVideo()
    return (
        <Button
            onClick={toggleMute}
            variant="ghost"
            size="icon"
        >
            {isMuted || volume === 0 ? (
                <VolumeX className="h-5 w-5" />
            ) : (
                <Volume2 className="h-5 w-5" />
            )}
        </Button>
    )
}

export const VolumeSlider = () => {
    const { volume, handleVolumeChange } = useVideo()
    return (
        <div className="w-0 overflow-hidden transition-all duration-300 group-hover/volume:w-24 group-hover/volume:ml-1">
            <Input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={e => handleVolumeChange(parseFloat(e.target.value))}
                className="h-1 w-full cursor-pointer accent-primary appearance-none bg-white/10 rounded-full"
            />
        </div>
    )
}

export const PlaybackSpeedButton = () => {
    const {
        playbackRate,
        handlePlaybackRateChange,
    } = useVideo()
    return (
        <Button variant="outline" className="flex items-center gap-1 text-xs font-bold text-white/70 hover:text-white transition-all p-2 cursor-pointer bg-white/5 hover:bg-white/10 rounded-lg border border-white/5">
            <Settings2 className="h-4 w-4" />
            <span className="hidden sm:inline w-8 text-center">{playbackRate}x</span>
        </Button>
    )
}

export const PlaybackRateOption = ({ rate }: { rate: number }) => {
    const { playbackRate, handlePlaybackRateChange } = useVideo()
    return (
        <Button
            key={rate}
            onClick={() => handlePlaybackRateChange(rate)}
            className={cn(
                "block w-full px-4 py-1.5 text-left text-xs font-medium transition-colors rounded-lg cursor-pointer",
                playbackRate === rate ? "bg-primary text-white" : "text-white/60 hover:bg-white/10 hover:text-white"
            )}
        >
            {rate}x
        </Button>
    )
}

export const FullscreenButton = () => {
    const { isFullscreen, toggleFullscreen } = useVideo()
    return (
        <Button
            onClick={toggleFullscreen}
            variant="ghost"
            size="icon"
        >
            {isFullscreen ? (
                <Minimize className="h-5 w-5" />
            ) : (
                <Maximize className="h-5 w-5" />
            )}
        </Button>
    )
}

export const ControlButtons = () => {
    const {
        isFullscreen,
        toggleFullscreen
    } = useVideo()

    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-6">
                <PlayButton />

                <div className="flex items-center gap-1">
                    <RewindButton />
                    <FastForwardButton />
                </div>

                <TimeDisplay />
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                {/* Volume */}
                <div className="flex items-center group/volume">
                    <VolumeButton />
                    <VolumeSlider />
                </div>

                {/* Playback Speed
                <div className="relative group/speed">
                    <PlaybackSpeedButton />
                    <div className="absolute bottom-full right-0 mb-3 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all origin-bottom-right bg-zinc-900/90 backdrop-blur-xl rounded-xl p-1.5 border border-white/10 shadow-2xl pointer-events-none group-hover:pointer-events-auto">
                        {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                            <PlaybackRateOption key={rate} rate={rate} />
                        ))}
                    </div>
                </div> */}

                <FullscreenButton />
            </div>
        </div >
    )
}
