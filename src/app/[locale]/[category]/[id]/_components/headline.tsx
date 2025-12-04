import { PropsWithChildren } from "react"

export const Headline = ({ children }: PropsWithChildren) => {
    return <h1 className="title font-bold text-6xl">{children}</h1>
}