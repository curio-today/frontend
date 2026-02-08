"use client";

export function MagicBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
            {/* Base background */}
            <div className="absolute inset-0 bg-[#fdfbfd] dark:bg-[#0a0505] transition-colors duration-700" />

            {/* Animated Blobs - Warm tones */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#f88167]/20 dark:bg-[#f88167]/30 blur-[120px] animate-pulse"
                style={{ animationDuration: '8s' }} />

            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#fb8167]/15 dark:bg-[#fb8167]/25 blur-[130px] animate-pulse"
                style={{ animationDuration: '12s', animationDelay: '2s' }} />

            <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#f88167]/10 dark:bg-[#f88167]/20 blur-[100px] animate-pulse"
                style={{ animationDuration: '10s', animationDelay: '1s' }} />

            {/* Flowing overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] contrast-150 pointer-events-none" />

            {/* Subtle light rays or shimmering effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[#f88167]/5 dark:via-[#f88167]/10 to-transparent rotate-12 scale-150 animate-shimmer pointer-events-none" />
        </div>
    );
}
