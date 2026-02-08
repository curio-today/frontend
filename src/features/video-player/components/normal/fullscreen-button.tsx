"use client"

import { Maximize, Minimize } from "lucide-react"
import { useVideo } from "../../contexts/video-context"
import { Button } from "@/components/ui/button"

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
