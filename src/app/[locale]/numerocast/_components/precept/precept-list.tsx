import { Suspense } from "react";
import { PreceptCard } from "./precept-card";
import { Precept } from "../../_types/precept";

interface PreceptListProps {
    precepts: Precept[];
}

export const PreceptList = ({ precepts }: PreceptListProps) => {
    return (
        <ul className="flex flex-col gap-4 list-none">
            {precepts.map((precept, index) => (
                <Suspense key={index}>
                    <PreceptCard index={index} {...precept} />
                </Suspense>
            ))}
        </ul>
    );
};