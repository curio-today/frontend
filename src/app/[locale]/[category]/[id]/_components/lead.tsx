import { PropsWithChildren } from "react";

export const Lead = ({ children }: PropsWithChildren) => {
    return <h3 className="description text-md md:text-xl lg:text-2xl text-blue-400">{children}</h3>;
}