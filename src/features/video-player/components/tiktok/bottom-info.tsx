import { Music2 } from "lucide-react";
import Link from "next/link";

export type BottomInfoProps = {
    userName: {
        name: string;
        url: string;
    };
    description?: string;
    musicName?: string;
}

export const BottomInfo = ({
    userName,
    description = "",
    musicName = "",
}: BottomInfoProps) => {
    return (
        <div className="absolute left-4 bottom-2 right-16 z-20 flex flex-col gap-3 text-white">
            <h3 className="font-bold text-lg drop-shadow-md">
                <Link href={userName.url} target="_blank" rel="noopener noreferrer">
                    @{userName.name}
                </Link>
            </h3>
            {description && (
                <p className="text-sm line-clamp-2 drop-shadow-md leading-relaxed">
                    {description}
                </p>
            )}
            {musicName && (
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
            )}
        </div>
    )
}
