export const VerticalSidebar = () => {
    return (
        <div className="absolute right-4 bottom-24 z-20 flex flex-col items-center gap-6">
            {/* Rotating Disc (Music) */}
            <div className="mt-4">
                <div className="h-12 w-12 rounded-full bg-zinc-800 border-4 border-zinc-700/50 flex items-center justify-center animate-spin-slow overflow-hidden">
                    <div className="h-6 w-6 rounded-full bg-linear-to-tr from-zinc-700 to-zinc-900 border border-white/10" />
                </div>
            </div>
        </div>
    )
}