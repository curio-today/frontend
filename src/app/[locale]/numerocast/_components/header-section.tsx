export const HeaderSection = ({ title, date }: { title: string; date: string }) => {
    return (
        <section className="flex flex-row sm:flex-col gap-4 items-center justify-center px-4 sm:px-6">
            <h1>
                <span className="text-4xl md:text-5xl bg-linear-to-b font-bold tracking-tighter from-[#f88167] via-[#fb8167] to-[#f88167]/80 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(248,129,103,0.3)]">
                    {title}
                </span>
            </h1>
            <h2 className="text-lg md:text-xl text-white px-6 py-1.5 bg-[#f88167] rounded-full w-fit whitespace-nowrap shadow-lg shadow-[#f88167]/20">
                {date}
            </h2>
        </section>
    );
};