import { useVideo } from "../../contexts/video-context";

export const VideoElement = ({ src, poster, loop = true }: { src: string; poster?: string; loop?: boolean }) => {
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