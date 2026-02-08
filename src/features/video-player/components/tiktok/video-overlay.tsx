import { Play } from "lucide-react"
import { useVideo } from "../../contexts/video-context"

export const VideoOverlay = () => {
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