import { NumerocastTitle } from "./numerocast-title";

export const HeaderSection = ({ title, date }: { title: string; date: string }) => {
    return (
        <section className="flex flex-row sm:flex-col gap-4 items-center justify-center px-4 sm:px-6">
            <NumerocastTitle />
            <h2 className="text-lg md:text-xl text-white px-6 py-1.5 bg-[#f88167] w-full rounded-full whitespace-nowrap shadow-lg shadow-[#f88167]/20">
                {date}
            </h2>
        </section>
    );
};