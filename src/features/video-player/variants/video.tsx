import { useEffect } from "react"
import { cn } from "@/lib/utils"
import { useVideo } from "../contexts/video-context"
import { VideoElement } from "../components/normal/video-element"
import { BigPlayButton } from "../components/normal/big-play-button"
import { LoadingOverlay } from "../components/normal/loading-overlay"
import { ProgressBar } from "../components/normal/progress-bar"
import { ControlButtons } from "../components/normal/control-buttons"
import { VideoPlayerProps } from "../types"

export const VideoPlayerContent = ({ src, poster, className }: Omit<VideoPlayerProps, "autoPlay" | "mode">) => {
    const {
        containerRef,
        isFullscreen,
        showControls,
        setShowControls,
        toggleFullscreen,
        togglePlay,
        toggleMute,
        videoRef
    } = useVideo()

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

            switch (e.code) {
                case "Space":
                    e.preventDefault()
                    togglePlay()
                    break
                case "ArrowRight":
                    if (videoRef.current) videoRef.current.currentTime += 5
                    break
                case "ArrowLeft":
                    if (videoRef.current) videoRef.current.currentTime -= 5
                    break
                case "KeyM":
                    toggleMute()
                    break
                case "KeyF":
                    toggleFullscreen()
                    break
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [togglePlay, toggleMute, toggleFullscreen, videoRef])

    return (
        <div
            ref={containerRef}
            className={cn(
                "group/container relative flex aspect-video w-full flex-col overflow-hidden rounded-2xl bg-zinc-950 shadow-2xl transition-all duration-500",
                isFullscreen ? "fixed inset-0 z-9999 h-screen w-screen rounded-none" : "max-w-5xl",
                className
            )}
            onMouseMove={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onDoubleClick={(e) => {
                e.preventDefault()
                toggleFullscreen()
            }}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 z-0 bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-50" />

            <VideoElement src={src} poster={poster} />
            <BigPlayButton />
            <LoadingOverlay />

            {/* Controls Overlay */}
            <div
                className={cn(
                    "absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)",
                    showControls ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
                )}
            >
                <ProgressBar />
                <ControlButtons />
            </div>
        </div>
    )
}
