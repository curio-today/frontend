"use client"

import { VideoPlayerProvider } from "./contexts/video-context"

import { ShortVideoPlayerProps, VideoPlayerProps } from "./types"

import { VideoPlayerContent } from "./variants/video"
import { ShortVideoPlayerContent } from "./variants/short-video"

export const VideoPlayer = ({ autoPlay, ...props }: VideoPlayerProps) => {
    return (
        <VideoPlayerProvider autoPlay={autoPlay}>
            <VideoPlayerContent {...props} />
        </VideoPlayerProvider>
    )
}

export const ShortVideoPlayer = ({ autoPlay, ...props }: ShortVideoPlayerProps) => {
    return (
        <VideoPlayerProvider autoPlay={autoPlay}>
            <ShortVideoPlayerContent {...props} />
        </VideoPlayerProvider>
    )
}
