"use client"

import { PlayButton, RewindButton, FastForwardButton } from "./playback-controls"
import { TimeDisplay } from "./time-display"
import { VolumeButton, VolumeSlider } from "./volume-controls"
import { FullscreenButton } from "./fullscreen-button"

export const ControlButtons = () => {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-6">
                <PlayButton />

                <div className="flex items-center gap-1">
                    <RewindButton />
                    <FastForwardButton />
                </div>

                <TimeDisplay />
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                {/* Volume */}
                <div className="flex items-center group/volume">
                    <VolumeButton />
                    <VolumeSlider />
                </div>

                {/* Playback Speed
                <div className="relative group/speed">
                    <PlaybackSpeedButton />
                    <div className="absolute bottom-full right-0 mb-3 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all origin-bottom-right bg-zinc-900/90 backdrop-blur-xl rounded-xl p-1.5 border border-white/10 shadow-2xl pointer-events-none group-hover:pointer-events-auto">
                        {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                            <PlaybackRateOption key={rate} rate={rate} />
                        ))}
                    </div>
                </div> */}

                <FullscreenButton />
            </div>
        </div >
    )
}
