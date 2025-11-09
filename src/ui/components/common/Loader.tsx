import { ComponentPropsWithRef } from "react";

export type LoaderProps = {
    isLoading: boolean,
} & ComponentPropsWithRef<"div">

export const Loader = ({ isLoading, ref, children, ...rest }: LoaderProps) => {
    return (
        <div {...rest} ref={ref} className="w-[500px] h-[500px] text-center py-4 text-sm text-gray-500 dark:text-gray-400" >
            {isLoading ? "Loading..." : "Scroll to load..."}
        </div>
    );
}

export default Loader;