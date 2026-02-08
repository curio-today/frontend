import { Loader2 } from "lucide-react"
import { useVideo } from "../../contexts/video-context"

export const LoadingOverlay = () => {
    const { isLoading } = useVideo()
    if (!isLoading) return null

    return (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <Loader2 className="h-10 w-10 animate-spin text-white/50" />
        </div>
    )
}
