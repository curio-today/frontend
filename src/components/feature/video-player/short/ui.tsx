"use client"

import { Heart, MessageCircle, Share2, Music2, Plus, User2, Loader2, Play, Pause } from "lucide-react"
import { useVideo } from "../video-context"

export const ShortVideoElement = ({ src, poster, loop = true }: { src: string; poster?: string; loop?: boolean }) => {
    const { videoRef, togglePlay } = useVideo()

    return (
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="h-full w-full object-cover"
            onClick={togglePlay}
            playsInline
            loop={loop}
        />
    )
}

export const ShortVideoOverlay = () => {
    const { isPlaying, togglePlay } = useVideo()

    return (
        <div
            className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
        >
            {!isPlaying && (
                <div className="bg-black/20 backdrop-blur-sm rounded-full p-6 animate-in fade-in zoom-in duration-200">
                    <Play className="w-12 h-12 text-white fill-white" />
                </div>
            )}
        </div>
    )
}

export const VerticalSidebar = ({
    onLike,
    onComment,
    onShare
}: {
    likes?: string;
    comments?: string;
    shares?: string;
    onLike?: () => void;
    onComment?: () => void;
    onShare?: () => void;
}) => {
    return (
        <div className="absolute right-4 bottom-24 z-20 flex flex-col items-center gap-6">
            {/* Rotating Disc (Music) */}
            <div className="mt-4">
                <div className="h-12 w-12 rounded-full bg-zinc-800 border-4 border-zinc-700/50 flex items-center justify-center animate-spin-slow overflow-hidden">
                    <div className="h-6 w-6 rounded-full bg-linear-to-tr from-zinc-700 to-zinc-900 border border-white/10" />
                </div>
            </div>
        </div>
    )
}

export const BottomInfo = ({
    username = "username",
    description = "Video description goes here #trending #tiktok",
    musicName = "Original Sound - User"
}: {
    username?: string;
    description?: string;
    musicName?: string;
}) => {
    return (
        <div className="absolute left-4 bottom-8 right-16 z-20 flex flex-col gap-3 text-white">
            <h3 className="font-bold text-lg drop-shadow-md">@{username}</h3>
            <p className="text-sm line-clamp-2 drop-shadow-md leading-relaxed">
                {description}
            </p>
            <div className="flex items-center gap-2 overflow-hidden">
                <Music2 className="w-4 h-4 shrink-0" />
                <div className="relative flex whitespace-nowrap overflow-hidden">
                    <span className="animate-marquee inline-block px-2 text-sm">
                        {musicName}
                    </span>
                    <span className="animate-marquee inline-block px-2 text-sm">
                        {musicName}
                    </span>
                </div>
            </div>
        </div>
    )
}

export const ShortProgressBar = () => {
    const { currentTime, duration } = useVideo()
    const progress = (currentTime / (duration || 1)) * 100

    return (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-30">
            <div
                className="h-full bg-white transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}

export const ShortLoadingOverlay = () => {
    const { isLoading } = useVideo()
    if (!isLoading) return null

    return (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <Loader2 className="h-10 w-10 animate-spin text-white/50" />
        </div>
    )
}
