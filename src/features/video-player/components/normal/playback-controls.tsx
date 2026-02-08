"use client"

import { Play, Pause, Rewind, FastForward } from "lucide-react"
import { useVideo } from "../../contexts/video-context"
import { Button } from "@/components/ui/button"

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
