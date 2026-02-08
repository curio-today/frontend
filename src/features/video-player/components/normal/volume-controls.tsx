"use client"

import { Volume2, VolumeX } from "lucide-react"
import { useVideo } from "../../contexts/video-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
