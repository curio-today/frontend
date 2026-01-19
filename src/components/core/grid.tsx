import { ComponentProps } from "react";

export const Grid2then3 = ({ children, ...rest }: ComponentProps<"section">) => {
    return  (
        <section className="w-auto flex flex-col gap-[clamp(1rem,1vw,5rem)] md:grid md:grid-cols-6 md:auto-rows-auto" {...rest}>
            {children}
        </section>
    )
}