import { BottomInfoProps } from "./components/tiktok/bottom-info"

export type VideoPlayerProps = {
    src: string
    poster?: string
    className?: string
    autoPlay?: boolean
}

export type ShortVideoPlayerProps = VideoPlayerProps & BottomInfoProps & {
    className?: string
    autoPlay?: boolean
} 