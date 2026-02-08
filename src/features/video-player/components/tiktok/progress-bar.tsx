import { useVideo } from "../../contexts/video-context"

export const ProgressBar = () => {
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
