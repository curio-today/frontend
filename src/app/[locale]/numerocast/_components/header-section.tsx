import { AuthorBadge } from "./author-badge";
import { NumerocastTitle } from "./numerocast-title";

interface HeaderSectionProps {
    date: string;
    authorLabel: string;
}

export const HeaderSection = ({ date, authorLabel }: HeaderSectionProps) => {
    return (
        <section className="flex flex-col gap-3 items-center justify-center px-4 sm:px-6">
            <NumerocastTitle />

            {/* Date pill */}
            <h2 className="text-lg md:text-xl text-white px-6 py-1.5 bg-[#f88167] w-fit rounded-full whitespace-nowrap shadow-lg shadow-[#f88167]/20">
                {date}
            </h2>

            {/* Author byline — always visible above the fold */}
            <AuthorBadge
                label={authorLabel}
                name="Numerologgi"
                url="https://numerologgi.com"
            />
        </section>
    );
};