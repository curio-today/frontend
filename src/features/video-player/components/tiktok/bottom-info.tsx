import { Music2 } from "lucide-react";

export type BottomInfoProps = {
    userName: string;
    description?: string;
    musicName?: string;
}

export const BottomInfo = ({
    userName,
    description = "",
    musicName = "Original Sound - User"
}: BottomInfoProps) => {
    return (
        <div className="absolute left-4 bottom-8 right-16 z-20 flex flex-col gap-3 text-white">
            <h3 className="font-bold text-lg drop-shadow-md">@{userName}</h3>
            <p className="text-sm line-clamp-2 drop-shadow-md leading-relaxed">
                {description}
            </p>
            <div className="flex items-center gap-2 overflow-hidden">
                <Music2 className="w-4 h-4 shrink-0" />
                <div className="relative flex whitespace-nowrap overflow-hidden">
                    <span className="animate-marquee inline-block px-2 text-sm">
                        {musicName}
                    </span>
                    <span className="animate-marquee inline-block px-2 text-sm">
                        {musicName}
                    </span>
                </div>
            </div>
        </div>
    )
}
