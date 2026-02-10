import { BodyClass } from "@/components/core/body-class";
import { MagicBackground } from "./_components/magic-background";
import { PropsWithChildren } from "react";

export default function NumerocastLayout({ children }: PropsWithChildren) {
    return (
        <>
            <BodyClass className="bg-[#fdfbfd] dark:bg-[#0a0505] overflow-x-hidden selection:bg-[#f88167]/20 transition-colors duration-700" />
            <MagicBackground />
            {children}
        </>
    );
}