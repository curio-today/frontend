import { Precept } from "@/types/numerologgi";

type PreceptCardProps = Precept & { index?: number };

export const PreceptCard = ({ emoji, title, index = 0 }: PreceptCardProps) => {
    return (
        <li className="group flex items-center gap-6 p-4 rounded-2xl 
                       bg-white/40 dark:bg-white/5 backdrop-blur-xl
                       border border-[#f88167]/10 dark:border-white/10
                       shadow-sm hover:shadow-xl hover:shadow-[#f88167]/10 
                       hover:scale-[1.02] transition-all duration-300 ease-out
                       cursor-default list-none
                       animate-fade-in-up opacity-0"
            style={{ animationDelay: `${index * 100}ms` }}>

            <div className="relative shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl 
                          bg-linear-to-br from-[#f88167] to-[#fb8167]
                          shadow-lg shadow-[#f88167]/20 group-hover:shadow-[#f88167]/40
                          transition-shadow duration-300">
                <span className="text-3xl select-none group-hover:scale-110 transition-transform duration-300">
                    {emoji}
                </span>

                <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-white/20 to-transparent pointer-events-none" />
            </div>

            <span className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200 
                           group-hover:text-[#f88167] dark:group-hover:text-[#fb8167]
                           transition-colors duration-300 tracking-tight">
                {title}
            </span>
        </li>
    );
};