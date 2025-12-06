import { PropsWithChildren } from "react"

export const Headline = ({ children }: PropsWithChildren) => {
    return <h1 className="title font-bold text-2xl md:text-4xl lg:text-6xl">{children}</h1>
}