import { PropsWithChildren } from "react";

export const Lead = ({ children }: PropsWithChildren) => {
    return <h3 className="description text-xl text-blue-400">{children}</h3>;
}