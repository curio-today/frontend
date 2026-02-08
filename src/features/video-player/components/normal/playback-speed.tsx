"use client"

import { Settings2 } from "lucide-react"
import { useVideo } from "../../contexts/video-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const PlaybackSpeedButton = () => {
    const {
        playbackRate,
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
