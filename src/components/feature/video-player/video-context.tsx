"use client"

import { useRef, useCallback, useEffect, useContext, createContext, useState } from "react"

interface VideoContextType {
    videoRef: React.RefObject<HTMLVideoElement | null>
    containerRef: React.RefObject<HTMLDivElement | null>
    isPlaying: boolean
    currentTime: number
    duration: number
    isMuted: boolean
    volume: number
    isFullscreen: boolean
    isLoading: boolean
    showControls: boolean
    playbackRate: number
    isDragging: boolean
    buffered: number
    togglePlay: () => void
    toggleMute: () => void
    toggleFullscreen: () => void
    handleVolumeChange: (val: number) => void
    handlePlaybackRateChange: (rate: number) => void
    seek: (time: number) => void
    setIsDragging: (isDragging: boolean) => void
    setBuffered: (buffered: number) => void
    setCurrentTime: (time: number) => void
    setShowControls: (show: boolean) => void
}

const VideoContext = createContext<VideoContextType | undefined>(undefined)

export const VideoPlayerProvider = ({
    children,
    autoPlay = false
}: {
    children: React.ReactNode,
    autoPlay?: boolean
}) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(1)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [showControls, setShowControls] = useState(true)
    const [playbackRate, setPlaybackRate] = useState(1)
    const [isDragging, setIsDragging] = useState(false)
    const [buffered, setBuffered] = useState(0)

    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const togglePlay = useCallback(() => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
    }, [])

    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            const newMuted = !videoRef.current.muted
            videoRef.current.muted = newMuted
            setIsMuted(newMuted)
            if (newMuted) {
                setVolume(0)
            } else {
                setVolume(videoRef.current.volume || 1)
            }
        }
    }, [])

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen()
            setIsFullscreen(true)
        } else {
            document.exitFullscreen()
            setIsFullscreen(false)
        }
    }, [])

    const handleVolumeChange = useCallback((val: number) => {
        setVolume(val)
        if (videoRef.current) {
            videoRef.current.volume = val
            videoRef.current.muted = val === 0
            setIsMuted(val === 0)
        }
    }, [])

    const handlePlaybackRateChange = useCallback((rate: number) => {
        setPlaybackRate(rate)
        if (videoRef.current) {
            videoRef.current.playbackRate = rate
        }
    }, [])

    const seek = useCallback((time: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time
            setCurrentTime(time)
        }
    }, [])

    const resetControlsTimeout = useCallback(() => {
        setShowControls(true)
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current)
        }
        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
                if (!isDragging) {
                    setShowControls(false)
                }
            }, 3000)
        }
    }, [isPlaying, isDragging])

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement)
        }
        document.addEventListener("fullscreenchange", handleFullscreenChange)
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }, [])

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const onPlay = () => setIsPlaying(true)
        const onPause = () => setIsPlaying(false)
        const onWaiting = () => setIsLoading(true)
        const onPlaying = () => setIsLoading(false)
        const onTimeUpdate = () => {
            if (!isDragging) {
                setCurrentTime(video.currentTime)
            }
        }
        const onLoadedMetadata = () => {
            setDuration(video.duration)
            setIsLoading(false)
        }
        const onProgress = () => {
            if (video.buffered.length > 0) {
                const lastBuffered = video.buffered.end(video.buffered.length - 1)
                setBuffered((lastBuffered / video.duration) * 100)
            }
        }

        video.addEventListener("play", onPlay)
        video.addEventListener("pause", onPause)
        video.addEventListener("waiting", onWaiting)
        video.addEventListener("playing", onPlaying)
        video.addEventListener("timeupdate", onTimeUpdate)
        video.addEventListener("loadedmetadata", onLoadedMetadata)
        video.addEventListener("progress", onProgress)

        if (autoPlay) {
            video.play().catch(() => setIsPlaying(false))
        }

        return () => {
            video.removeEventListener("play", onPlay)
            video.removeEventListener("pause", onPause)
            video.removeEventListener("waiting", onWaiting)
            video.removeEventListener("playing", onPlaying)
            video.removeEventListener("timeupdate", onTimeUpdate)
            video.removeEventListener("loadedmetadata", onLoadedMetadata)
            video.removeEventListener("progress", onProgress)
        }
    }, [autoPlay, isDragging])

    const value = {
        videoRef,
        containerRef,
        isPlaying,
        currentTime,
        duration,
        isMuted,
        volume,
        isFullscreen,
        isLoading,
        showControls,
        playbackRate,
        isDragging,
        buffered,
        togglePlay,
        toggleMute,
        toggleFullscreen,
        handleVolumeChange,
        handlePlaybackRateChange,
        seek,
        setIsDragging,
        setBuffered,
        setCurrentTime,
        setShowControls: resetControlsTimeout
    }

    return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}

export const useVideo = () => {
    const context = useContext(VideoContext)
    if (context === undefined) {
        throw new Error("useVideo must be used within a VideoPlayerProvider")
    }
    return context
}
