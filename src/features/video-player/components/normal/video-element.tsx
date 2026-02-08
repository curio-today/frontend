"use client"

import { useVideo } from "../../contexts/video-context"

export const VideoElement = ({ src, poster }: { src: string; poster?: string }) => {
    const { videoRef, togglePlay, setShowControls } = useVideo()

    return (
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="h-full w-full cursor-pointer object-contain"
            onClick={togglePlay}
            onMouseMove={() => setShowControls(true)}
            playsInline
        />
    )
}
